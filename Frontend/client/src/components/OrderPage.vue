<template>

  <div class="col-8 col-xl-12" style="margin: auto;">
    <h1 class="cart-info__sub-heading" style="font-weight: 700; font-size: 24px;">Đơn Hàng Của Bạn </h1>
    <div class="cart-info__list">
      <!-- Cart item 1 -->
      <article class="cart-item" v-for="order in orders" :key="order._id">
        <!-- <a href="../product-detail.html">
          <img src="../assets/img/product/item-1.png" alt="" class="cart-item__thumb" />
        </a> -->
        
        <div class="cart-item__content">
          <div class="cart-item__content-left" v-for="item in order.cartItems" :key="item._id"
            style="margin-right: 10px;">
            <h3 class="cart-item__title" style="white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 250px; ">
              <a href="../product-detail.html">
                {{ item.product.name }}
              </a>
            </h3>
            <p class="cart-item__price-wrap">
              {{ order.totalPrice }} VND|
               <span class="cart-item__status">Trong kho</span>
            </p>
            <div class="cart-item__ctrl cart-item__ctrl--md-block">
              <div class="cart-item__input">
                Đơn Hàng được giao thành công
                <!-- <img class="icon" src="../assets/icons/arrow-down-2.svg" alt="" /> -->
              </div>
              <div class="cart-item__input">

                <span>{{ item.quantity }} sản phẩm</span>

              </div>
            </div>
          </div>
          <div class="cart-item__content-right">
            <p class="cart-item__total-price">
              Ngày đặt hàng: {{ order.date }}
            </p>
            <div class="cart-item__ctrl">

              <div class="order-total">Tổng tiền: {{ order.totalPrice }} VND</div>
            </div>

          </div>
        </div>

      </article>


    </div>
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
