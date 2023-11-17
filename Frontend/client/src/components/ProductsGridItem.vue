<template>
  <div class="col">
    <article class="product-card" style="margin-left: 10px;">
      <div class="product-card__img-wrap">
        <router-link v-bind:to="'/products/' + product.id">
          <img :src="product.imageUrl" alt="" class="product-card__thumb" />
        </router-link>
        <button class="like-btn product-card__like-btn">
          <img src="../assets/icons/heart.svg" alt="" class="like-btn__icon icon" style="height: 24px;!important width: 24px !important;"/>
          <img src="../assets/icons/heart-red.svg" alt="" class="like-btn__icon--liked" />
        </button>
      </div>
      <h3 class="product-card__title">
        <a href="../product-detail.html">{{ product.name }}</a>
      </h3>
      <p class="product-card__brand">LS Coffee</p>
      <div class="product-card__row">
        <span class="product-card__price">{{ product.price }}VNĐ</span>
        <img src="../assets/icons/star.svg" alt="" class="product-card__star"  style="height: 24px;!important width: 24px !important;"/>
        <span class="product-card__score">{{ product.averageRating }}</span>
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

</style>
