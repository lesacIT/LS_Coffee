<template>
  
  <div class="cart-info__list">
    <!-- Cart item 1 -->
    <article class="cart-item" v-for="item in cartItems" :key="item.id">
      
      <div class="cart-item__content">
        <div class="cart-item__content-left">
          <h3 class="cart-item__title">
            <a href="../product-detail.html">
              {{ item.product.name }}
            </a>
          </h3>
          <p class="cart-item__price-wrap">
            {{ item.product.price }} VNĐ | <span class="cart-item__status">Trong Kho</span>
          </p>
          <div class="cart-item__ctrl cart-item__ctrl--md-block">
            <div class="cart-item__input">
              LS-Coffee
              <img class="icon" src="../assets/icons/arrow-down-2.svg" alt="" style="width: 24px;"/>
            </div>
            <div class="cart-item__input">
              <button class="cart-item__input-btn">
                <img class="icon" src="../assets/icons/minus.svg" alt="" style="width: 24px "/>
              </button>
              <span>{{ item.quantity }}</span>
              <button class="cart-item__input-btn" >
                <img class="icon" src="../assets/icons/plus.svg" alt="" style="width: 24px" />
              </button>
            </div>
          </div>
        </div>
        <div class="cart-item__content-right">
          <p class="cart-item__total-price">{{ item.product.price }} VND</p>
          <div class="cart-item__ctrl">
            <!-- <button class="cart-item__ctrl-btn">
              <img src="../assets/icons/heart-2.svg" alt="" style="width: 24px"/>
              Thích
            </button>
            <button class="cart-item__ctrl-btn js-toggle" toggle-target="#delete-confirm">
              <img src="../assets/icons/trash.svg" alt="" style="width: 24px" />
              Xóa
            </button> -->
          </div>
        </div>
      </div>
    </article>



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
          <span>Tổng Phụ:</span>
          <span>{{ this.totalPrice }} VND</span>
        </div>
        <div class="cart-info__row">
          <span>Vận Chuyển</span>
          <span>Miễn Phí</span>
        </div>
        <div class="cart-info__separate"></div>
        <div class="cart-info__row cart-info__row--bold">
          <span>Tổng:</span>
          <span>{{ this.totalPrice }} VND</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutList",
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
li {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

li span.name {
  width: 200px;
}

li span.quantity {
  margin-left: 10px;
}

#total-price {
  text-align: center;
}
</style>
