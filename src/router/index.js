import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import AboutPage from '@/views/AboutPage.vue';
import ContactUs from '@/views/ContactUs.vue';
import ProductCatalog from '@/views/ProductCatalog.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import UserDashboard from '@/views/UserDashboard.vue';
import { auth } from '../FirebaseConfig';

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
    },
    {
      path: '/admin',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta: {
        requiresAuth: true,
        requiresAdmin: true
      }
    },
    {
      path: '/user',
      name: 'UserDashboard',
      component: UserDashboard,
      meta: {
        requiresAuth: true,
        requiresUser: true
      }
    }
  ]
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;
  if (requiresAuth && !currentUser) {
    next('/');
  } else {
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
    const requiresUser = to.matched.some(record => record.meta.requiresUser);
    if (requiresAdmin && currentUser && currentUser.admin) {
      next();
    } else if (requiresUser && currentUser && !currentUser.admin) {
      next();
    } else {
      next('/');
    }
  }
});

export default router;
