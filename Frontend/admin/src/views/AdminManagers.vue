<template>
  <body id="page-top">
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
      <a class="navbar-brand mr-1" href="index.html">LS Coffee</a>
      <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search -->
      <!-- Navbar -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item no-arrow text-white">
          <span>Chào Nguyễn Lê Sắc</span> |
          <a class="text-white nounderline" @click="logout">Thoát</a>
        </li>
      </ul>
    </nav>
    <div id="wrapper">
      <!-- Sidebar -->
      <ul class="sidebar navbar-nav" >
        <li class="nav-item">
          <a class="nav-link" href="/admin"><i class="fas fa-fw fa-tachometer-alt" style="margin-right: 5px;"></i>
            <span>Tổng quan</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" :class="{ active: selectedOption === 'orders' }"
            @click="selectedOption = 'orders'"><i class="fas fa-shopping-cart" style="margin-right: 5px;"></i>
            <span>Đơn hàng</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" :class="{ active: selectedOption === 'ordersstatus' }"
            @click="selectedOption = 'ordersstatus'"><i class="fas fa-shopping-cart" style="margin-right: 5px;"></i>
            <span>Trạng thái đơn hàng</span></a>
        </li>
        <li class="nav-item dropdown  active show" >
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fab fa-product-hunt"
              style="margin-right: 5px;"></i>
            <span>Sản phẩm</span></a>
          <div class="dropdown-menu show" aria-labelledby="">
            <a class="dropdown-item active" :class="{ active: selectedOption === 'products' }"
              @click="selectedOption = 'products'">Danh sách</a>
            <a class="dropdown-item" :class="{ active: selectedOption === 'productsAdd' }"
              @click="selectedOption = 'productsAdd'">Thêm</a>
            <a class="dropdown-item" :class="{ active: selectedOption === 'productsEdit' }"
              @click="selectedOption = 'productsEdit'">Cập Nhật</a>
            <a class="dropdown-item" :class="{ active: selectedOption === 'productsSearch' }"
              @click="selectedOption = 'productsSearch'">Tìm Kiếm</a>
          </div>
        </li>
        <li class="nav-item dropdown active show">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-user-alt"
              style="margin-right: 5px;"></i>
            <span>Người Dùng</span></a>
          <div class="dropdown-menu show" aria-labelledby="">
            <a class="dropdown-item" :class="{ active: selectedOption === 'users' }"
              @click="selectedOption = 'users'">Danh sách</a>
            <a class="dropdown-item" :class="{ active: selectedOption === 'usersAdd' }"
              @click="selectedOption = 'usersAdd'">Thêm</a>
            <a class="dropdown-item" :class="{ active: selectedOption === 'usersEdit' }"
              @click="selectedOption = 'usersEdit'">Cập Nhật</a>
          </div>
        </li>
        <li class="nav-item dropdown show">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="far fa-image" style="margin-right: 5px;"></i>
            <span>Hình ảnh</span></a>
          <div class="dropdown-menu show" aria-labelledby="">
            <a class="dropdown-item" :class="{ active: selectedOption === 'productsImg' }"
              @click="selectedOption = 'productsImg'">Danh sách</a>
          </div>
        </li>
        <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-shipping-fast"></i>
            <span>Phí giao hàng</span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/transport/list.html">Danh sách</a>
            <a class="dropdown-item" href="../../pages/transport/add.html">Thêm</a>
          </div>
        </li>
        <li class="nav-item dropdow">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-users"></i>
            <span>Nhân viên</span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/staff/list.html">Danh sách</a>
            <a class="dropdown-item" href="../../pages/staff/add.html">Thêm</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-user-shield"></i>
            <span>Phân quyền</span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/permission/roles.html">Danh sách vai trò</a>
            <a class="dropdown-item" href="../../pages/permission/add_role.html">Thêm vai trò</a>
            <a class="dropdown-item" href="../../pages/permission/actions.html">Danh sách tác vụ</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../../pages/order_status/list.html"><i class="fas fa-star-half-alt"></i> <span>Trạng
              thái đơn hàng</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-file-alt"></i>
            <span>News letter</span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/newsletter/list.html">Danh sách</a>
            <a class="dropdown-item" href="../../pages/newsletter/send.html">Gởi mail</a>
          </div>
        </li> -->
      </ul>
      <manage-products v-if="selectedOption === 'products'" />
      <managers-products-edit v-if="selectedOption === 'productsEdit'" />
      <managers-products-add v-if="selectedOption === 'productsAdd'" />
      <manage-users v-if="selectedOption === 'users'" />
      <manage-orders v-if="selectedOption === 'orders'" />
      <manage-users-add v-if="selectedOption === 'usersAdd'" />
      <ManagersUsersEdit v-if="selectedOption === 'usersEdit'" />
      <ManagersProductsSearch v-if="selectedOption === 'productsSearch'" />
      <ManagersProductsImg v-if="selectedOption === 'productsImg'" />
      <ManageOrdersStatus v-if="selectedOption === 'ordersstatus'" />
    </div>
    <!-- /#wrapper -->
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div>

  </body>
</template>

<script>
import ManageProducts from "../components/AdminManagersProducts.vue";
import ManageUsers from "../components/AdminManagersUsers.vue";
import ManageUsersAdd from "../components/AdminManagersUsersAdd.vue";
import ManageOrders from "../components/AdminManagersOrders.vue";
import ManageOrdersStatus from "../components/AdminManagersOrdersStatus.vue";
import ManagersProductsEdit from "../components/AdminManagersProductsEdit.vue";
import ManagersProductsAdd from "../components/AdminManagersProductsadd.vue";
import ManagersUsersEdit from "../components/AdminManagersUsersEdit.vue";
import ManagersProductsSearch from "../components/AdminManagersProductsaddseach.vue";
import ManagersProductsImg from "../components/AdminManagersProductsImg.vue";

export default {
  components: {
    ManageProducts,
    ManageUsers,
    ManageOrders,
    ManagersProductsEdit,
    ManagersProductsAdd,
    ManageUsersAdd,
    ManagersUsersEdit,
    ManagersProductsSearch,
    ManagersProductsImg,
    ManageOrdersStatus,
  },
  data() {
    return {
      selectedOption: "products",
    };
  },

  // thoát đăng nhập admin
  computed: {
    loggedIn() {
      return !!this.user;
    },
  },
  methods: {
    logout() {
      this.$router.push("/");
      this.updateUser(null);
      localStorage.removeItem("user");
    },
    async search() {
      if (this.searchTerm.trim() === "") {
        return;
      }

      try {
        const searchTerm = this.searchTerm;
        this.$router.push({ name: "SearchPage", params: { searchTerm } });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.nav-container {
  margin: 0 auto;
  width: 600px;
  background-color: #ffd400;
  height: 60px;
  border-radius: 0 0 20px 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-nav {
  display: flex;
  list-style: none;
  justify-content: space-between;

  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 10px 10px 10px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  background-color: #ddd;
  color: #333;
  border-radius: 0.25rem;
}

.admin-btn {
  background-color: #ffd400;
  color: rgb(0, 0, 0);
  border: none;
}
</style>
