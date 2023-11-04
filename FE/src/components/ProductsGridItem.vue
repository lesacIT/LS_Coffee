<template>
  <div class="product-item">
    <img :src="product.imageUrl" />
    <div class="product-name-wrap">
      <h4 class="product-name">{{ product.name }}</h4>
    </div>

    <p class="product-price">{{ product.price }}VNĐ</p>
    <router-link v-bind:to="'/products/' + product.id">
      <button class="product-btn">Xem chi tiết</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ProductsGridItem",
  props: ["product"],
};
</script>

<style scoped>
.product-item {
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 2px 5px #888;
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  padding: 20px;
  position: relative;
  width: 30%;
}

.product-name {
  margin-bottom: 0;
}
.product-name-wrap {
  height: 70px;
}
img {
  height: 150px;
  width: 150px;
}

a {
  width: 100%;
}

button {
  width: 100%;
}
.product-btn {
  background-color: #e34f23;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
}
.product-btn:hover {
  background-color: #c73e1d;
}
</style>
