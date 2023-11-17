<template>
  <div v-if="showSuccessMessage">
    <div class="error">
    <div class="error__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
    </div>
    <div class="error__title"> Order thành công! Chuyển về trang chủ sau vài giây...</div>
    <div class="error__close"><svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20"><path fill="#393a37" d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"></path></svg></div>
</div>
   
  </div>

  <!-- MAIN -->
  <main class="checkout-page" >
    <form v-on:submit.prevent="submitForm">


      <div class="container">
        <!-- Checkout content -->
        <div class="checkout-container">
          <div class="row gy-xl-3">
            <div class="col-8 col-xl-12">
              <div class="cart-info">
                <h1 class="cart-info__heading">Xác Nhận Đơn Hàng</h1>
                <div class="cart-info__separate"></div>

                <!-- Checkout address -->
                <div class="user-address">
                  <div class="user-address__top">
                    <div>
                      <h2 class="user-address__title">Tên: {{ this.user.result.name }}</h2>
                      <p class="user-address__desc">Email: {{ this.user.result.email }}</p>
                    </div>
                    <button class="user-address__btn btn btn--primary btn--rounded btn--small js-toggle"
                      toggle-target="#add-new-address">
                      <img src="../assets/icons/plus.svg" alt="" style="width: 24px;" />
                      Thêm địa chỉ mới
                    </button>
                  </div>
                  <div class="user-address__list">
                    <!-- Address card 1 -->
                    <article class="address-card">
                      <div class="address-card__left">
                        <div class="address-card__choose">
                          <label class="cart-info__checkbox">
                            <input type="radio" name="shipping-adress" checked class="cart-info__checkbox-input" />
                          </label>
                        </div>
                        <div class="address-card__info">
                          <h3 class="address-card__title">Địa Chỉ Giao Hàng </h3>
                          <p class="address-card__desc" name="address">

                          </p>
                          <input type="text" id="address" name="address" required style="width: 360px;"/>
                          <ul class="address-card__list">
                            <li class="address-card__list-item">Đang chuyển hàng</li>
                            <li class="address-card__list-item">Giao hàng từ cửa hàng</li>
                          </ul>

                        </div>
                      </div>
                      <div class="address-card__right">
                        <div class="address-card__ctrl">
                          <button class="cart-info__edit-btn js-toggle" toggle-target="#add-new-address">
                            <img class="icon" src="../assets/icons/edit.svg" alt="" />
                            Edit
                          </button>
                        </div>
                      </div>
                    </article>

                 
                  </div>
                </div>

                <div class="cart-info__separate"></div>

                <h2 class="cart-info__sub-heading">Danh Sách Sản Phẩm</h2>
                <CheckoutList :cartItems="cartItems" :totalPrice="totalPrice" />

              </div>
            </div>
            <div class="col-4 col-xl-12">
              <div class="cart-info">
                <div class="cart-info__row">
                  <span>Giá <span class="cart-info__sub-label">(Tổng)</span></span>
                  <span>{{ this.totalPrice }}</span>
                </div>
                <div class="cart-info__row">
                  <span>Vận Chuyển</span>
                  <span>Miễn Phí</span>
                </div>
                <div class="cart-info__separate"></div>
                <div class="cart-info__row">
                  <span>Thành Toán</span>

                  <span> {{ this.totalPrice }} </span>
                

                </div>

                <a>
                  <button type="submit" value="Submit" class="cart-info__next-btn btn btn--primary btn--rounded"
                    style="display:flex !important; background-color: #ffb700;color: #171c28 ;border-radius: 99px ;width: 100%; font-size: 18px;">Xác
                    nhận</button>
                </a>

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
    </form>

  </main>
</template>
<script>
import axios from "axios";


import CheckoutList from "@/components/CheckoutListItem.vue";
export default {
  name: "CheckoutPage",
  components: {
    CheckoutList,
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
      showSuccessMessage: false,
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
  methods: {
    async submitForm(event) {
      event.preventDefault();
      const { address } = event.target.elements;
      const formData = {
        name: this.user.result.name,
        email: this.user.result.email,
        address: address.value,
        cartItems: this.cartItems,
        totalPrice: this.totalPrice,
      };
      console.log(formData);
      await axios.post(`/api/users/${this.user.result.id}/orders`, formData);
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 1500);
    },
  },
  async created() {
    try {
      const response = await axios.get(
        `/api/users/${this.user.result.id}/cart`
      );
      const cartItems = response.data;
      this.cartItems = cartItems;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
<style scoped>
/* .check-out {
  width: 60%;
  margin: auto;
}

h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

h3 {
  margin: 0;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 16px;
  margin-left: 40px;
}

#address {
  border: 1px solid gray;
}
*/
input[type="text"],
input[type="email"] {
  padding: 8px;
  border-radius: 4px;
  border: none;
  border: 1px solid gray;
}

/* button[type="submit"] {
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
} */
.error {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 320px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  background: #5BEF80;
  border-radius: 8px;
  box-shadow: 0px 0px 5px -3px #111;
}

.error__icon {
  width: 20px;
  height: 20px;
  transform: translateY(-2px);
  margin-right: 8px;
}

.error__icon path {
  fill: #fff;
}

.error__title {
  font-weight: 500;
  font-size: 14px;
  color: #fff;
}

.error__close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin-left: auto;
}

.error__close path {
  fill: #fff;
}
</style>
