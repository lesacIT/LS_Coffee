<template>
  <div id="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Quản lý</a>
        </li>
        <li class="breadcrumb-item active">Người dùng</li>
      </ol>
      <!-- /form -->
      <form @submit.prevent="addUser">
        <div class="form-group row">
          <label class="col-md-12 control-label" for="fullname">Họ Và Tên</label>
          <div class="col-md-9 col-lg-6">
            <input name="fullname" v-model="newUser.name" type="text"  class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-12 control-label" for="username">Email</label>
          <div class="col-md-9 col-lg-6">
            <input name="username" v-model="newUser.email" type="text"  class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-12 control-label" for="password">Mật Khẩu</label>
          <div class="col-md-9 col-lg-6">
            <input name="password" v-model="newUser.password"  type="password"  class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-md-12 control-label" for="role">Vai trò</label>
          <div class="col-md-9 col-lg-6">
            <select class="form-control"  v-model="newUser.isAdmin">
              <option value="0">Người Dùng</option>
              <option value="1">Quản Trị</option>
            </select>
          </div>
        </div>
        <button v-if="editingIndex === null" type="submit">
        Thêm người dùng
      </button>
      </form>
      <!-- /form -->
    </div>
    <!-- /.container-fluid -->
    <footer class="sticky-footer">
      <div class="container my-auto">
        <div class="copyright text-center my-auto">
          <span>Nguyễn Lê Sắc @2023</span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
export default {
  name: "manage-users",
  data() {
    return {
      users: [],
      newUser: {
        name: "",
        email: "",
        password: "",
        isAdmin: 0,
      },
      editingIndex: null,
    };
  },

  mounted() {
    this.loadUsers();
  },

  methods: {
    async loadUsers() {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addUser() {
      if (this.editingIndex == null) {
        try {
          const response = await axios.post("/api/signup", {
            name: this.newUser.name,
            email: this.newUser.email,
            password: this.newUser.password,
            isAdmin: this.newUser.isAdmin,
          });
          console.log("Signup successful:", response.data);
          // Redirect to login page
          await this.loadUsers();
        } catch (error) {
          console.error("Signup failed:", error.response.data);
          alert("Signup failed. Please try again.");
        }
      } else {
        try {
          if (!this.newUser.name || !this.newUser.email) {
            alert("Vui lòng nhập đầy đủ thông tin người dùng!"); // Kiểm tra các trường input không được trống
            return;
          }

          // Tạo object để gửi đến API
          const user = {
            name: this.newUser.name,
            email: this.newUser.email,
            isAdmin: this.newUser.isAdmin,
          };

          // Nếu password được nhập thì thêm vào object user
          if (this.newUser.password) {
            user.password = this.newUser.password;
          }

          const response = await fetch(`/api/users/${this.newUser.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });

          if (!response.ok) {
            throw new Error("Cập nhật người dùng thất bại!");
          }

          const data = await response.json();
          const index = this.users.findIndex(
            (user) => user.id === this.newUser.id
          );

          if (index !== -1) {
            this.users[index] = data;
          } else {
            this.users.push(data);
          }

          this.newUser.name = "";
          this.newUser.email = "";
          this.newUser.password = "";
          this.newUser.isAdmin = 0;
          alert("Cập nhật người dùng thành công!");
          await this.loadUsers();
          this.editingIndex = null;
        } catch (error) {
          console.error(error);
          alert("Cập nhật người dùng thất bại!");
        }
      }
    },
    async editUser(index) {
      this.editingIndex = index; // Gán giá trị editingIndex bằng index sản phẩm đang được sửa
      this.newUser = Object.assign({}, this.users[index]); // Gán giá trị của sản phẩm đang được sửa cho biến newUser
    },

    async deleteUser(index) {
      try {
        const userId = this.users[index].id;
        await fetch(`/api/users/${userId}`, {
          method: "DELETE",
        });
        this.users.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style>
.admin-page-wrap {
  max-width: 800px;
  min-height: 100vh;
  margin: auto;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

img {
  height: 60px;
  width: 60px;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.admin-form {
  margin-bottom: 2rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: 100%;
  margin-bottom: 1rem;
}

button[type="submit"] {
  margin-top: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
}

th {
  font-weight: bold;
  background-color: #f2f2f2;
}</style>
