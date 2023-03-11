import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import AboutPage from '@/views/AboutPage.vue';
import ContactUs from '@/views/ContactUs.vue';
import ProductCatalog from '@/views/ProductCatalog.vue';


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
      component: ProductCatalog
    },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/contact', 
    name: 'Contact',
    component: ContactUs
  }
  ]
});

export default router;
