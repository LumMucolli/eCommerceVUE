import Vue from 'vue';
import VueRouter from 'vue-router';

// import your route components here
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductList
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductDetails
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
