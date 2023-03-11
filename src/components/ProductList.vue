<template>
  <div class="product-list">
    <div v-for="product in products" :key="product._id" class="product-card">
      <div class="product-card-img">
        <img :src="product.image" alt="">
      </div>
      <div class="product-card-body">
        <h5 class="product-card-title">{{ product.name }}</h5>
        <p class="product-card-text">{{ product.description }}</p>
        <div class="product-card-footer">
          <p class="product-card-price">{{ formattedPrice(product.price) }}</p>
          <router-link :to="{ name: 'product', params: { id: product._id } }" class="btn btn-primary">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductList',
  props: ['products'],
  methods: {
    formattedPrice(price) {
      return '$' + price.toFixed(2);
    }
  }
}
</script>
<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-card {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.product-card-img img {
  width: 100%;
  height: auto;
}

.product-card-body {
  padding: 10px;
}

.product-card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.product-card-text {
  font-size: 14px;
  margin-bottom: 10px;
}

.product-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card-price {
  font-size: 18px;
  font-weight: bold;
}
</style>