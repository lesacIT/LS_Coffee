<template>
 
 
 <!-- <div class="product-container">
     <img class="product-image" :src="product.imageUrl" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}đ</p>
    </div>
    <input
      type="number"
      v-bind:value="quantity"
      v-on:input="updateQuantity($event.target.value)"
      min="1"
    />
    <button class="remove-button" @click="remove(product.id)">Xóa</button> 
  </div> -->

   <!-- Cart item 1 -->
   <article class="cart-item">
                <a href="../product-detail.html">
                  <img :src="product.imageUrl" alt="" class="cart-item__thumb" />
                </a>
                <div class="cart-item__content">
                  <div class="cart-item__content-left">
                    <h3 class="cart-item__title">
                      <a href="../product-detail.html">
                        {{ product.name }}
                      </a>
                    </h3>
                    <p class="cart-item__price-wrap">
                      {{ product.price }} VNĐ | <span class="cart-item__status">Trong Kho</span>
                    </p>
                    <div class="cart-item__ctrl cart-item__ctrl--md-block">
                      <div class="cart-item__input">
                        LS Coffe

                      </div>
                      <div class="cart-item__input">
                        <!-- <button class="cart-item__input-btn">
                          <img class="icon" src="../assets/icons/minus.svg" alt="" style="height: 24px!important; ,width:24px!important;"/>
                        </button> -->
                        <!-- <span>1</span> -->
                        <!-- <button class="cart-item__input-btn">
                          <img class="icon" src="../assets/icons/plus.svg" alt="" style="height: 24px!important; ,width: 24px!important;"/>
                        </button> -->
                        <span>
                          <input type="number" v-bind:value="quantity" v-on:input="updateQuantity($event.target.value)"
                            min="1" />

                        </span>


                      </div>
                    </div>

                  </div>
                  <div class="cart-item__content-right">
                    <p class="cart-item__total-price">  {{ product.price }} VND</p>
                    <div class="cart-item__ctrl">
                      <button class="cart-item__ctrl-btn">
                        <img src="../assets/icons/heart-2.svg" alt=""
                          style="height: 24px;!important ,width: 24px;!important" />
                        Save
                      </button>
                      <button class="cart-item__ctrl-btn " @click="remove(product.id)"
                        style="height: 24px;!important ,width: 24px;!important">
                        <img src="../assets/icons/trash.svg" alt=""
                          style="height: 24px;!important ,width: 24px;!important" />
                        Xóa
                      </button>

                    </div>
                  </div>
                </div>
              </article>
 
</template>
<script>
import axios from "axios";
export default {
  name: "CartsListItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    remove: {
      type: Function,
      required: true,
    },
    loadData: {
      type: Function,
      required: true,
    },
  },
  methods: {
    updateQuantity(newQuantity) {
      const id = this.product.id;
      if (newQuantity > 0) {
        axios
          .patch(`/api/users/${this.user.result.id}/cart/${id}`, {
            quantity: newQuantity,
          })

          .then((response) => {
            this.loadData();

            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style>
/* .product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  align-items: center;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}
.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  margin: auto;
  background-color: red;
  color: wheat;
  border: none;
}
input[type="number"] {
  width: 60px;
  height: 50px;
  margin: 10px;
} */



/* .card-body {
  font-size: 18px;
} */
</style>
