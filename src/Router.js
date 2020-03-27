import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Auth from '@/services/authService';

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth : true}
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/',
        redirect:'/dashboard'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (Auth.isAuthenticated()) {
      next()
    } else {
      next({
        name: "login"
      });
    }
  }
  else {
    next();
  }
  
})

export default router;