<template>
  <div class="home-page">
    <h1>Welcome to my eCommerce store!</h1>
    <p>Check out our latest products:</p>
    <productList :products="products" />
  </div>
</template>

<script>
import axios from 'axios';
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
    axios.get('/api/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log(error);
      });
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
