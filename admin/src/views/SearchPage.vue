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
      <ul class="sidebar navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/admin"><i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Tổng quan</span></a>
        </li>

        <!-- <li class="nav-item">
          <button
            class="admin-btn"
            :class="{ active: selectedOption === 'orders' }"
            @click="selectedOption = 'orders'"
          >
            Quản lý đơn hàng
          </button>
        </li> -->

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" :class="{ active: selectedOption === 'orders' }"
            @click="selectedOption = 'orders'"><i class="fas fa-shopping-cart"></i>
            <span>Đơn hàng</span></a>

        </li>
        <li class="nav-item dropdown  active show">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fab fa-product-hunt"></i>
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
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-user-alt"></i>
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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-comments"></i>
            <span>Bình Luận </span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/comment/list.html">Danh sách</a>
          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="far fa-image"></i>
            <span>Hình ảnh</span></a>
          <div class="dropdown-menu" aria-labelledby="">
            <a class="dropdown-item" href="../../pages/image/list.html">Danh sách</a>
          </div>
        </li>

        <li class="nav-item dropdown">
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
        </li>
      </ul>
      <manage-products v-if="selectedOption === 'products'" />
      <managers-products-edit v-if="selectedOption === 'productsEdit'" />
      <managers-products-add v-if="selectedOption === 'productsAdd'" />
      <manage-users v-if="selectedOption === 'users'" />
      <manage-orders v-if="selectedOption === 'orders'" />
      <manage-users-add v-if="selectedOption === 'usersAdd'" />
      <ManagersUsersEdit v-if="selectedOption === 'usersEdit'" />
      <ManagersProductsSearch v-if="selectedOption === 'productsSearch'" />
      <!-- /.content-wrapper -->
      <div id="page-wrap">
        <div class="search-results">
          <h2>Kết quả tìm kiếm cho "{{ searchTerm }}"</h2>
          <div v-if="products.length === 0">
            <p>Không có sản phẩm nào phù hợp với từ khóa "{{ searchTerm }}"</p>
          </div>

          <div class="" v-for="product in products" :key="product.id" :product="product">

            <section class="">
              <article class="card">
                <div class="card-header">
                  <img :src="product.imageUrl" class="card-img" style="width: 50%;height: 50%;">
                </div>
                <div class="card-body ">
                  <h2 class="card-title">{{ product.name }}</h2>
                  <p class="card-text">{{ product.price }}VNĐ</p>
                  <!-- <router-link v-bind:to="'/products/' + product.id">
                    <button class="product-btn">Xem chi tiết</button>
                  </router-link> -->
                </div>
              </article>
            </section>

          </div>
        </div>
      </div>
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
import axios from "axios";
// import ProductsGridItem from "../components/ProductsGridItem.vue";
export default {
  data() {
    return {
      products: [],
    };
  },
  props: {
    searchTerm: {
      type: String,
      required: true,
    },
  },
  components: {
    // ProductsGridItem,
  },
  watch: {
    searchTerm: {
      handler: "fetchData",
      immediate: true,
    },
  },
  methods: {
    async fetchData() {
      if (this.searchTerm.trim() === "") {
        return;
      }
      try {
        const response = await axios.get(
          `/api/products/search/${this.searchTerm}`
        );
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
