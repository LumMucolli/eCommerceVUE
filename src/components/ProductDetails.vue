<template>
    <div class="product-details">
        <div class="product-details-header">
            <h1>{{ product.name }}</h1>
            <p>{{ product.description }}</p>
            <p class="product-price">{{ product.price | currency }}</p>
        </div>
        <div class="product-details-body">
            <img :src="product.image" alt="">
            <div class="product-details-description">
                <h2>Description</h2>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    data() {
        return {
            product: {}
        }
    },
    filters: {
        currency(value) {
            return '$' + value.toFixed(2);
        }
    },
    mounted() {
        // fetch the product data from the backend based on the id in the route params
        this.fetchProduct(this.$route.params.id);
    },
    methods: {
        fetchProduct(id) {
            // use axios to make a GET request to the backend API endpoint for retrieving a product by id
            // update the product data in the component's data when the response is received
            axios.get(`/api/products/${id}`)
                .then(response => {
                    this.product = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>

<style scoped>
.product-details {
    padding: 20px;
}

.product-details-header {
    margin-bottom: 20px;
}

.product-details-header h1 {
    font-size: 36px;
    margin-bottom: 10px;
}

.product-details-header p {
    font-size: 18px;
    margin-bottom: 10px;
}

.product-price {
    font-size: 24px;
    font-weight: bold;
}

.product-details-body {
    display: flex;
    justify-content: space-between;
}

.product-details-description {
    width: 50%;
}

.product-details-description h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.product-details-description p {
    font-size: 16px;
    line-height: 1.5;
}
</style>
