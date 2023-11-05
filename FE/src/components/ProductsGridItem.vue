<template>
  <!-- <div class="product-item">
    <img :src="product.imageUrl" />
    <div class="product-name-wrap">
      <h4 class="product-name">{{ product.name }}</h4>
    </div>

    <p class="product-price">{{ product.price }}VNĐ</p>
    <router-link v-bind:to="'/products/' + product.id">
      <button class="product-btn">Xem chi tiết</button>
    </router-link>
  </div> -->
  <div class="col">
    <article class="product-card">
      <div class="product-card__img-wrap">
        <router-link v-bind:to="'/products/' + product.id">
          <img :src="product.imageUrl" alt="" class="product-card__thumb" />
        </router-link>
        <button class="like-btn product-card__like-btn">
          <img src="../assets/icons/heart.svg" alt="" class="like-btn__icon icon" />
          <img src="../assets/icons/heart-red.svg" alt="" class="like-btn__icon--liked" />
        </button>
      </div>
      <h3 class="product-card__title">
        <a href="../product-detail.html">{{ product.name }}</a>
      </h3>
      <p class="product-card__brand">LS Coffee</p>
      <div class="product-card__row">
        <span class="product-card__price">{{ product.price }}VNĐ</span>
        <img src="../assets/icons/star.svg" alt="" class="product-card__star" />
        <span class="product-card__score">4.3</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "ProductsGridItem",
  props: ["product"],
};
</script>

<style scoped>
/* .product-item {
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

*/
</style>
