<template>
 <NavBar2/>
  <div>
    <ProductsGrid :products="products" />
  </div>
 
  
</template>

<script>
import axios from "axios";
import ProductsGrid from "@/components/ProductsGrid.vue";
import  NavBar2 from "@/components/NavBar2.vue"

export default {
  name: "ProductsPage",
  components: {
    NavBar2,
    ProductsGrid,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const result = await axios.get("/api/products");
    const products = result.data;
    this.products = products;
  },
};
</script>
