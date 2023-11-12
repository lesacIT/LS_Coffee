<template>
 <div class="admin-page-wrap">
    <h1>Trang quản lý sản phẩm</h1>

    <form class="admin-form" @submit.prevent="addProduct">
      <h2 v-if="this.editingIndex === null">Thêm sản phẩm mới</h2>
      <h2 v-else>Sửa sản phẩm</h2>

      <label>
        Tên sản phẩm:
        <input type="text" v-model="newProduct.name" />
      </label>

      <label>
        Mô tả:
        <textarea v-model="newProduct.description"></textarea>
      </label>
      <label>
        Link hình ảnh:
        <input type="text" v-model="newProduct.imageUrl" />
      </label>

      <label>
        Giá:
        <input type="text" v-model="newProduct.price" />
      </label>

      <button v-if="this.editingIndex === null" type="submit">
        Thêm sản phẩm
      </button>
      <button v-else type="submit">Sửa sản phẩm</button>
    </form>

    <h2>Danh sách sản phẩm</h2>

    <table>
      <thead>
        <tr>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Mô tả</th>
          <th>Giá</th>
          <th>Sửa</th>
          <th>Xóa</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td><img :src="product.imageUrl" /></td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td><button @click="editProduct(index)">Sửa</button></td>
          <td><button @click="deleteProduct(index)">Xóa</button></td>
        </tr>
      </tbody>
    </table>
  </div> 

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
          <a class="text-white nounderline" href="#" data-toggle="modal" data-target="#logoutModal">Thoát</a>
        </li>
      </ul>
    </nav>
    <div id="wrapper">
      <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
            <li class="nav-item">
               <a class="nav-link" href="../../pages/dashboard/index.html"><i class="fas fa-fw fa-tachometer-alt"></i> <span>Tổng quan</span></a>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-shopping-cart"></i> <span>Đơn hàng</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/order/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/order/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdown  active show">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fab fa-product-hunt"></i> <span>Sản phẩm</span></a>
               <div class="dropdown-menu show" aria-labelledby="">
                  <a class="dropdown-item active" href="../../pages/product/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/product/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-comments"></i> <span>Comment</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/comment/list.html">Danh sách</a>
               </div>
            </li>

            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="far fa-image"></i> <span>Hình ảnh</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/image/list.html">Danh sách</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-user-alt"></i> <span>Khách hàng</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/customer/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/customer/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-folder"></i> <span>Danh mục</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/category/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/category/add.html">Thêm</a>
               </div>
            </li>
            
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-percentage"></i> <span>Khuyến mãi</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/promotion/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/promotion/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-shipping-fast"></i> <span>Phí giao hàng</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/transport/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/transport/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdow">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-users"></i> <span>Nhân viên</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/staff/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/staff/add.html">Thêm</a>
               </div>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-user-shield"></i> <span>Phân quyền</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/permission/roles.html">Danh sách vai trò</a>
                  <a class="dropdown-item" href="../../pages/permission/add_role.html">Thêm vai trò</a>
                  <a class="dropdown-item" href="../../pages/permission/actions.html">Danh sách tác vụ</a>
               </div>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="../../pages/order_status/list.html"><i class="fas fa-star-half-alt"></i> <span>Trạng thái đơn hàng</span></a>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id=""><i class="fas fa-file-alt"></i> <span>News letter</span></a>
               <div class="dropdown-menu" aria-labelledby="">
                  <a class="dropdown-item" href="../../pages/newsletter/list.html">Danh sách</a>
                  <a class="dropdown-item" href="../../pages/newsletter/send.html">Gởi mail</a>
               </div>
            </li>
         </ul>
      <div id="content-wrapper">
        <div class="container-fluid">
          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Quản lý</a>
            </li>
            <li class="breadcrumb-item active">Sản phẩm</li>
          </ol>
          <!-- DataTables Example -->
          <!-- <div class="action-bar">
            <input type="submit" class="btn btn-primary btn-sm" value="Thêm" name="add">
            <input type="submit" class="btn btn-danger btn-sm" value="Xóa" name="delete">
          </div> -->
          <div class="card mb-3">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th><input type="checkbox" onclick="checkAll(this)"></th>
                      <th>Mã</th>
                      <th style="width:50px">Tên </th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Lượng tồn</th>
                      <th>Đánh giá</th>
                      <th>Nội bật</th>
                      <th style="max-width:800px">Mô Tả</th>
                      <th>Ngày tạo</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product, index) in products" :key="index">

                      <td><input type="checkbox"></td>
                      <td>#25</td>
                      <td>{{ product.name }}</td>
                      <td><img :src="product.imageUrl"></td>
                      <td>{{ product.price }} VND</td>
                    
                      <td>50</td>
                      <td>4,8</td>
                      <td></td>
                      <td style="max-width:800px">{{ product.description }}</td>
                      <td>2017-10-16 15:22:00</td>
                   
                      <td><a href="../../pages/image/list.html">Hình ảnh</a></td>
                      <td><input type="button" onclick="Edit('25');" value="Sửa" class="btn btn-warning btn-sm"></td>
                      <td><input type="button" onclick="Delete('25');" value="Xóa" class="btn btn-danger btn-sm"></td>
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
      <!-- /.content-wrapper -->
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



.navbar-nav{
  justify-content:flex-start!important;;
}

</style> 
