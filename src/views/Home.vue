<template>
  <div class="home-page">
    <h1>Welcome to my eCommerce store!</h1>
    <p>Check out our latest products:</p>
    <product-list :products="products" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomePage',
  components: {
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    // Fetch products data from API
  },
};
</script>

<style>
.home-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
