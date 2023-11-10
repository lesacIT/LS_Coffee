<template>
  <!-- <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" />
    </div>
    <div id="product-details">
      <h3>{{ product.name }}</h3>
      <h3 id="price">{{ product.price }}vnđ</h3>
      <p>Đánh giá: {{ product.averageRating }}</p>
      <button
        class="button-detail"
        id="add-to-cart"
        v-if="!itemIsInCart && !showSuccessMessage"
        v-on:click="addToCart"
      >
        Thêm vào giỏ hàng
      </button>
      <button
        id="add-to-cart"
        class="green-button button-detail"
        v-if="!itemIsInCart && showSuccessMessage"
      >
        Thêm vào giỏ hàng thành công!
      </button>
      <button
        id="add-to-cart"
        class="grey-button button-detail"
        v-if="itemIsInCart"
      >
        sản phẩm đã có trong giỏ hàng
      </button>
      <h4>Mô Tả</h4>
      <p v-html="product.description"></p>
    </div>
  </div> -->
  <div v-if="product">
    <main class="product-page">
      <div class="container">
        <!-- Search bar -->
        <div class="product-container">
          <div class="search-bar d-none d-md-flex">
            <input type="text" name="" id="" placeholder="Search for item" class="search-bar__input" />
            <button class="search-bar__submit">
              <img src="../assets/icons/search.svg" alt="" class="search-bar__icon icon" />
            </button>
          </div>
        </div>
        <!-- Product info -->
        <div class="product-container prod-info-content">
          <div class="row">
            <div class="col-5 col-xl-6 col-lg-12">
              <div class="prod-preview">
                <div class="prod-preview__list">
                  <div class="prod-preview__item">
                    <img v-bind:src="product.imageUrl" alt="" class="prod-preview__img" />
                  </div>
                  <div class="prod-preview__item">
                    <img src="../assets/img/product/item-2.png" alt="" class="prod-preview__img" />
                  </div>
                  <div class="prod-preview__item">
                    <img src="../assets/img/product/item-3.png" alt="" class="prod-preview__img" />
                  </div>
                  <div class="prod-preview__item">
                    <img src="../assets/img/product/item-4.png" alt="" class="prod-preview__img" />
                  </div>
                </div>
                <div class="prod-preview__thumbs">
                  <img src="../assets/img/product/item-1.png" alt=""
                    class="prod-preview__thumb-img prod-preview__thumb-img--current" />
                  <img src="../assets/img/product/item-2.png" alt="" class="prod-preview__thumb-img" />
                  <img src="../assets/img/product/item-3.png" alt="" class="prod-preview__thumb-img" />
                  <img src="../assets/img/product/item-4.png" alt="" class="prod-preview__thumb-img" />
                </div>
              </div>
            </div>
            <div class="col-7 col-xl-6 col-lg-12">
              <form action="" class="form">
                <section class="prod-info">
                  <h1 class="prod-info__heading">
                    {{ product.name }}
                  </h1>
                  <div class="row">
                    <div class="col-5 col-xxl-6 col-xl-12">
                      <div class="prod-prop">
                        <img src="../assets/icons/star.svg" alt="" class="prod-prop__icon" style="height: 24px; width: 24px;" />
                        <h4 class="prod-prop__title">({{ product.averageRating }}) 1100 reviews</h4>
                      </div>
                      <label for="" class="form__label prod-info__label">Khối Lượng</label>
                      <div class="filter__form-group">
                        <div class="form__select-wrap">
                          <div class="form__select" style="--width: 146px">
                            500
                            <!-- <img src="../assets/icons/select-arrow.svg" alt="" class="form__select-arrow icon" /> -->
                          </div>
                          <div class="form__select">
                            Gram
                            <!-- <img src="../assets/icons/select-arrow.svg" alt="" class="form__select-arrow icon" /> -->
                          </div>
                        </div>
                      </div>
                      <div class="filter__form-group">
                        <div class="form__tags">
                          <button class="form__tag prod-info__tag">Nhỏ</button>
                          <button class="form__tag prod-info__tag">Trung Bình</button>
                          <button class="form__tag prod-info__tag">Lớn</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-7 col-xxl-6 col-xl-12">
                      <div class="prod-props">
                        <div class="prod-prop">
                          <img src="../assets/icons/document.svg" alt="" class="prod-prop__icon icon" style="height: 24px; width: 24px;"/>
                          <h4 class="prod-prop__title">So Sánh
                            <p>Sản phẩm tương tự</p>
                          </h4>
                          
                        </div>
                        <div class="prod-prop">
                          <img src="../assets/icons/buy.svg" alt="" class="prod-prop__icon icon" style="height: 24px; width: 24px;" />
                          <div>
                            <h4 class="prod-prop__title">Vận chuyển</h4>
                            <p class="prod-prop__desc">Vận chuyển
                              Từ 25.000đ trong 1-3 ngày</p>
                          </div>
                        </div>
                        <div class="prod-prop">
                          <img src="../assets/icons/bag.svg" alt="" class="prod-prop__icon icon" style="height: 24px; width: 24px;"/>
                          <div>
                            <h4 class="prod-prop__title">Nhận Hàng</h4>
                            <p class="prod-prop__desc">Tại Cửa Hàng Số 2,Ninh Kiều Hôm Nay</p>
                          </div>
                        </div>
                        <div class="prod-info__card " style="width: 100%;" >
                          <!-- <div class="prod-info__row">
                            <span class="prod-info__price">$500.00</span>
                            <span class="prod-info__tax">10%</span>
                          </div> -->
                          <p class="prod-info__total-price">{{ product.price }} vnđ</p>
                          <div class="prod-info__row">
                            <button class="button-detail" id="add-to-cart" v-if="!itemIsInCart && !showSuccessMessage"
                              v-on:click="addToCart">
                              Thêm vào giỏ hàng
                            </button>
                            <button id="add-to-cart" class="green-button button-detail"
                              v-if="!itemIsInCart && showSuccessMessage">
                              Thêm vào giỏ hàng thành công!
                            </button>
                            <button id="add-to-cart" class="grey-button button-detail" v-if="itemIsInCart">
                              sản phẩm đã có trong giỏ hàng
                            </button>
                            <button class="like-btn prod-info__like-btn">
                              <img src="../assets/icons/heart.svg" alt="" class="like-btn__icon icon" style="height: 24px; width: 24px;" />
                              <img src="../assets/icons/heart-red.svg" alt="" class="like-btn__icon--liked" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>

        <!-- Product content -->
        <div class="product-container">
          <div class="prod-tab js-tabs">
            <ul class="prod-tab__list">
              <li class="prod-tab__item prod-tab__item--current">Giới Thiệu</li>
              <li class="prod-tab__item">Đánh giá (1100)</li>
              <li class="prod-tab__item">Tương tự</li>
            </ul>
            <div class="prod-tab__contents">
              <div class="prod-tab__content prod-tab__content--current">
                <div class="row">
                  <div class="col-8 col-xl-10 col-lg-12">
                    <div class="text-content prod-tab__text-content">
                      <p v-html="product.description"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <NotFound v-else />
</template>

<script>
import axios from "axios";
import NotFound from "./NotFound";

export default {
  name: "ProductDetailPage",
  components: {
    NotFound,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      product: {},
      cartItems: [],
      showSuccessMessage: false,
    };
  },
  computed: {
    itemIsInCart() {
      return this.cartItems.some((item) => item.product.id === this.product.id);
    },
  },
  methods: {
    async addToCart() {
      if (this.user == null) {
        window.alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
        setTimeout(() => {
          this.$router.push("/login");
        }, 1000);
      } else {
        console.log(this.user.result.id);
        await axios.post(`/api/users/${this.user.result.id}/cart`, {
          productId: this.$route.params.id,
        });
        this.showSuccessMessage = true;
        setTimeout(() => {
          this.$router.push("/products");
        }, 1000);
      }
    },
  },
  async created() {
    const { data: product } = await axios.get(
      `/api/products/${this.$route.params.id}`
    );
    this.product = product;

    const { data: cartItems } = await axios.get(
      `/api/users/${this.user.result.id}/cart`
    );
    this.cartItems = cartItems;
  },
};
</script>

<style scoped>
/* #page-wrap {
  margin-top: 50px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #888;
}

#img-wrap {
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px #888;
  margin-bottom: 20px;
}

img {
  width: 400px;
  height: 400px;
  border-radius: 10px;
}

#product-details {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px #888;
  border-radius: 10px;
  position: relative;
}
#product-details h3 {
  text-align: left;
  margin-bottom: 10px;
}
#price {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fb6e2e;
}
*/
.button-detail {
  background-color: #fb6e2e;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: 0;
  padding: 16px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
}

.grey-button {
  background-color: #f0f0f0;
  color: #6c757d;
}

.green-button {
  background-color: #28a745;
}

.button-detail:hover {
  background-color: #ff8a4a;
  transform: translateY(-5px);
}</style>
