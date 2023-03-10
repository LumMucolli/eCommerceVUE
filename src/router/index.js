import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductList'
import ProductDetails from '../components/ProductDetails'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  },
  {
    path: '/products/:id',
    name: 'product',
    component: ProductDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
