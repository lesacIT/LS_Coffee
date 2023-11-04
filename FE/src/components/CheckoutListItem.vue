<template>
  <div>
    <h3>Danh sách sản phẩm</h3>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <span class="name">{{ item.product.name }}:</span>

        <span>{{ item.product.price }}đ</span>
        <span class="quantity">X{{ item.quantity }} </span>
      </li>
    </ul>
    <h4 id="total-price">Tổng tiền: {{ this.totalPrice }}đ</h4>
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
