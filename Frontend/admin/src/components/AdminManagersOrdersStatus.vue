<template>
  <div id="content-wrapper">
    <div class="container-fluid">
      <!-- Breadcrumbs-->
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Quản lý</a>
        </li>
        <li class="breadcrumb-item active">Đơn hàng</li>
      </ol>
      <!-- DataTables Example -->
      <div class="card mb-3">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th><input type="checkbox" onclick="checkAll(this)"></th>
                  <th>Mã</th>
                  <th>Tên khách hàng</th>
                  <!-- <th>Email</th> -->
                  <th>Trạng Thái Đơn Hàng</th>
                  <th>Tổng cộng</th>
                  <!-- <th>Ngày Đặt</th>
                  <th>Địa chỉ </th> -->
                  <th>Sản Phẩm Đã Mua</th>

                  <!-- <th></th>  -->
                </tr>
              </thead>
              <tbody v-for="order in orders" :key="order._id">
                <tr v-show="order.order_status === 'đang xử lí'">
                  <td><input type="checkbox"></td>
                  <td>{{ order._id }}</td>
                  <td>{{ order.name }}</td>
                  <!-- <td>{{ order.email }}</td> -->
                  <td v-if="order.order_status === 'giao hàng thành công'">Giao Hàng thành công</td>
                  <td v-else-if="order.order_status === 'đang xử lí'">Đang Xử Lí</td>
                  <td v-else>Chưa Xác Nhận</td>
                  <td>{{ order.totalPrice }}</td>
                  <!-- <td>{{ order.date }}</td>
                  <td>{{ order.address }}</td> -->
                  <!-- <td v-for="item in order.cartItems" :key="item._id" style="display: flex;">
                    <li class="price">{{ item.product.name }}
                      {{ item.product.price }}đ x{{ item.quantity }}</li>
                    <li class="price"></li>
                  </td> -->

                  <td v-if="order.order_status === 'giao hàng thành công'"></td>

                  <!-- <td v-else><input type="button" value="Xác Nhận" class="btn btn-danger btn-sm"
                      style="max-width: 100px;"></td> -->
                  <td v-else><input type="button" value="Xác Nhận" class="btn btn-danger btn-sm"
                      style="max-width: 100px;" 
                      @click="confirmOrder(order._id)"
                      ></td>
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
import axios from "axios";

export default {
  name: "manage-orders",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(`/api/orders`);
      this.orders = response.data.map((order) => ({
        ...order,
        showDetail: false,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    showDetail(order) {
      order.showDetail = !order.showDetail;
    },

    // cập nhật trạng thái đơn hàng
    async fetchOrders() {
      try {
        const response = await axios.get('/api/orders');
        this.orders = response.data;
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async confirmOrder(orderId) {
      try {
        await axios.put(`/api/orders/${orderId}`, {
          order_status: 'Giao Hàng Thành Công',
        });

        this.fetchOrders();
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
</script>
<style>
.order-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  font-size: 18px;
}

.order-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.order-item:hover {
  background-color: #f5f5f5;
}

.order-date {
  font-weight: bold;
  cursor: pointer;
}

.order-detail {
  display: none;
  flex-direction: column;
  font-size: 16px;
}

.order-detail.visible {
  display: flex;
}

.order-detail-item {
  display: flex;
  justify-content: space-between;
}

.order-detail-item span.price {
  margin-left: 10px;
}
</style>
