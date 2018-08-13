import Vue from 'vue'
import Router from 'vue-router'
import LoginHome from '@/pages/home/LoginHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login-Home',
      component: LoginHome,
      meta: {
        title: '登录页面'
      }
    }
  ]
})
