<template>
  <div id="page-wrap" v-if="product">
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
#page-wrap {
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
}
</style>
