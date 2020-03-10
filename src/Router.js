import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
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