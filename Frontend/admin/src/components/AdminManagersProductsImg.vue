<template>
  <div id="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Quản lý</a>
        </li>
        <li class="breadcrumb-item active">Hình ảnh</li>
      </ol>

      <div class="card mb-3">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th><input type="checkbox" onclick="checkAll(this)"></th>
                  <th>Hình ảnh</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(product, index) in products" :key="index">
                  <td ><input type="checkbox"></td>
                  <td><img :src="product.imageUrl"></td>
                  <td><input type="button" @click="deleteProduct(index)" value="Xóa" class="btn btn-danger btn-sm"
                      style="max-width: 150px;"></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
    <!-- /.container-fluid -->
    <!-- Sticky Footer -->
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
/*Custom fonts for this template */
import "../../vendor/fontawesome-free/css/all.min.css";
/*Page level plugin CSS*/
import "../../vendor/datatables/dataTables.bootstrap4.css"
/* Custom styles for this template */
import "../../css/sb-admin.css";
import "../../css/admin.css"




/*

<!-- Create favicon -->
      <link rel="shortcut icon" type="image/x-icon" href="../../images/logo.jpg" />
      <!-- Custom fonts for this template-->
      <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
      <!-- Page level plugin CSS-->
      <link href="../../vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
      <!-- Custom styles for this template-->
      <link href="../../css/sb-admin.css" rel="stylesheet">
      <link href="../../css/admin.css" rel="stylesheet">

*/
// import "../../vendor/jquery/jquery.min.js";
// import "../../vendor/bootstrap/js/bootstrap.bundle.min.js";




import { v4 as uuidv4 } from "uuid";
export default {
  name: "manage-products",
  data() {
    return {
      products: [],
      newProduct: {
        name: "",
        description: "",
        price: 0,
      },
      editingIndex: null,
    };
  },

  mounted() {
    this.loadProducts();
  },

  methods: {
    async loadProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addProduct() {
      try {
        if (
          !this.newProduct.name ||
          !this.newProduct.description ||
          !this.newProduct.price ||
          !this.newProduct.imageUrl
        ) {
          alert("Vui lòng nhập đầy đủ thông tin sản phẩm!"); // Kiểm tra các trường input không được trống
          return;
        }
        if (this.editingIndex === null) {
          // Thêm sản phẩm mới
          const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: uuidv4(),
              name: this.newProduct.name,
              price: this.newProduct.price,
              description: this.newProduct.description,
              imageUrl: this.newProduct.imageUrl,
              averageRating: "5.0",
            }),
          });
          const data = await response.json();
          this.products.push(data);
          await this.loadProducts();
        } else {
          // Cập nhật sản phẩm
          const product = this.products[this.editingIndex];
          const response = await fetch(`/api/products/${product.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: product.id,
              name: this.newProduct.name,
              price: this.newProduct.price,
              description: this.newProduct.description,
              imageUrl: this.newProduct.imageUrl,
              averageRating: product.averageRating,
            }),
          });
          const data = await response.json();
          this.products.splice(this.editingIndex, 1, data);
          this.editingIndex = null;
          await this.loadProducts(); // Reset biến editingIndex sau khi cập nhật sản phẩm
        }
        this.newProduct.name = "";
        this.newProduct.description = "";
        this.newProduct.price = 0;
        this.newProduct.imageUrl = ""; // Reset giá trị của biến newProduct
      } catch (error) {
        console.error(error);
      }
    },
    async editProduct(index) {
      this.editingIndex = index; // Gán giá trị editingIndex bằng index sản phẩm đang được sửa
      this.newProduct = Object.assign({}, this.products[index]); // Gán giá trị của sản phẩm đang được sửa cho biến newProduct
    },

    async deleteProduct(index) {
      try {
        const productId = this.products[index].id;
        await fetch(`/api/products/${productId}`, {
          method: "DELETE",
        });
        this.products.splice(index, 1);
      } catch (error) {
        console.error(error);
      }
    },
  },

};


</script>
<style>
/* .admin-page-wrap {
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
}



.navbar-nav {
  justify-content: flex-start !important;
  ;
} */
</style> 
