<template>
    <div class="products">
        <h1>Products</h1>
        <div class="product-list">
            <div v-for="product in products" :key="product._id" class="product-card">
                <h2>{{ product.name }}</h2>
                <p>{{ product.description }}</p>
                <p>Price: {{ product.price }}</p>
                <p>Quantity: {{ product.quantity }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            products: []
        };
    },
    async created() {
        try {
            const response = await axios.get('/api/products');
            this.products = response.data;
        } catch (error) {
            console.log(error);
        }
    }
};
</script>

<style scoped>
.products {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.products h1 {
    font-size: 32px;
    margin-bottom: 20px;
}

.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.product-card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    flex-basis: calc(33.33% - 20px);
    text-align: center;
}

.product-card h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-card p {
    font-size: 16px;
    margin-bottom: 10px;
}</style>
