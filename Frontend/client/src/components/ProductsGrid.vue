<template>
  <div class="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3">
    <ProductsGridItem
    v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
   
</template>

<script>
import ProductsGridItem from "./ProductsGridItem.vue";

export default {
  name: "ProductsGrid",
  props: ["products"],
  components: {
    ProductsGridItem,
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
}
</style>
