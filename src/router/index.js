import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";

// import your route components here
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
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
  ]
});

export default router;
