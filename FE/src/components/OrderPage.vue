<template>
  <div>
    <h1>Đơn hàng của bạn</h1>
    <div class="order-list">
      <div v-for="order in orders" :key="order._id" class="order-item">
        <div class="order-date" @click="showDetail(order)">
          {{ order.date }}
        </div>
        <div class="order-total">Tổng tiền: {{ order.totalPrice }}đ</div>
        <div class="order-detail" :class="{ visible: order.showDetail }">
          <div class="order-detail-item">Name: {{ order.name }}</div>

          <div class="order-detail-item">Email: {{ order.email }}</div>
          <div class="order-detail-item">Addres: {{ order.address }}</div>
          <div
            class="order-detail-item"
            v-for="item in order.cartItems"
            :key="item._id"
          >
            <span>{{ item.product.name }}</span>
            <span class="price"
              >{{ item.product.price }}đ x{{ item.quantity }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="padding-top: 200px;"> 

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "OrderPage",
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
      const response = await axios.get(
        `/api/users/${this.user.result.id}/orders`
      );
      this.orders = response.data.map((order) => ({
        ...order,
        showDetail: false,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    showDetail(order) {
      order.showDetail = !order.showDetail;
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
  gap: 10px;
}

.order-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
}

.order-item:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.order-date {
  font-weight: bold;
  cursor: pointer;
  font-size: 22px;
}

.order-total {
  font-weight: bold;
  font-size: 18px;
}

.order-detail {
  display: none;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.order-detail.visible {
  display: flex;
}

.order-detail-item {
  margin-bottom: 5px;
}

.order-detail-item span:first-child {
  font-weight: bold;
  margin-right: 5px;
}

.price {
  font-weight: normal;
  margin-left: 5px;
}

h1 {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
