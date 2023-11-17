<template>
  
  
  <main class="checkout-page">

<div class="container">
  <!-- Search bar -->
  <div class="checkout-container">
    <div class="search-bar d-none d-md-flex">
      <input type="text" name="" id="" placeholder="Search for item" class="search-bar__input" />
      <button class="search-bar__submit">
        <img src="../assets/icons/search.svg" alt="" class="search-bar__icon icon" />
      </button>
    </div>
  </div>
  <!-- Checkout content -->
  <div class="checkout-container">
    <div class="row gy-xl-3">
      <div class="col-8 col-xl-12">
        <div class="cart-info">
          <div class="cart-info__list">
            <CartsList :cartItems="cartItems" :user="this.user" :removeFromCart="removeFromCart" :loadData="loadData" />
          </div>
          <div class="cart-info__bottom d-md-none">
            <div class="row">
              <div class="col-8 col-xxl-7">
                <div class="cart-info__continue">
                  <a href="../" class="cart-info__continue-link">
                    <img class="cart-info__continue-icon icon" src="../assets/icons/arrow-down-2.svg" alt="" />
                    Tiếp Tục Mua Hàng
                  </a>
                </div>
              </div>
              <div class="col-4 col-xxl-5">
                <div class="cart-info__row">
                  <span>Tổng Tiền:</span>
                  <span>{{ totalPrice }} VND</span>
                </div>
                <div class="cart-info__row">
                  <span>Vận Chuyển:</span>
                  <span>Miễn Phí</span>
                </div>
                <div class="cart-info__separate"></div>
                <div class="cart-info__row cart-info__row--bold">
                  <span>Tổng Tiền:</span>
                  <span>{{ totalPrice }} VND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 col-xl-12">
        <div class="cart-info">
          <!-- <div class="cart-info__row">
            <span>Tổng <span class="cart-info__sub-label">(items)</span></span>
            <span>{{ quantity }}</span>
          </div> -->
          <div class="cart-info__row">
            <span>Giá <span class="cart-info__sub-label">(Total)</span></span>
            <span>{{ totalPrice }} VND</span>
          </div>
          <div class="cart-info__row">
            <span>Vận Chuyển</span>
            <span>Miễn Phí</span>
          </div>
          <div class="cart-info__separate"></div>
          <div class="cart-info__row">
            <span>Tổng Tiền</span>
            <span>{{ totalPrice }} VND</span>
          </div>
          <!-- <a href="../shipping.html" class="cart-info__next-btn btn btn--primary btn--rounded">
            Continue to checkout
          </a> -->
          <router-link to="/checkout"><a class="cart-info__next-btn btn btn--primary btn--rounded" >Xác nhận đơn hàng</a></router-link>
        </div>
        <div class="cart-info">
          <a href="#!">
            <article class="gift-item">
              <div class="gift-item__icon-wrap">
                <img src="../assets/icons/gift.svg" alt="" class="gift-item__icon" />
              </div>
              <div class="gift-item__content">
                <h3 class="gift-item__title">Gửi đơn đặt hàng này như một món quà.</h3>
                <p class="gift-item__desc">
                  Các mặt hàng có sẵn sẽ được chuyển đến người nhận quà của bạn.
                </p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
</template>
<script>
import axios from "axios";
import CartsList from "@/components/CartsList.vue";

export default {
  name: "CartPage",
  components: {
    CartsList,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    totalPrice() {
      const sum = this.cartItems.reduce(
        (sum, item) =>
          sum + parseFloat(item.product?.price) * parseInt(item.quantity),
        0
      );
      const total = sum > 999 ? sum / 1000 : sum;
      console.log(total.toFixed(3).toString()); // hiển thị kết quả với 3 chữ số thập phân
      return total.toFixed(3).toString();
    },
    
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async removeFromCart(id) {
      console.log(id);
      const response = await axios.delete(
        `/api/users/${this.user.result.id}/cart/${id}`
      );
      if (response.status === 200) {
        await this.loadData();
      }
    },
    async loadData() {
      const result = await axios.get(`/api/users/${this.user.result.id}/cart`);
      const cartItems = result.data;
      this.cartItems = cartItems;
      console.log(cartItems);
    },
  },

  async created() {
    await this.loadData();
  },
};
</script>

<style scoped>
/* h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  border: none;
  width: 100%;
  margin-bottom: 20px;
  background-color: red;
  color: white;
} */
</style>
