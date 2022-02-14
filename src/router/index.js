import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Home'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/components/Home'),
  },
        {
          path: '/shop',
          name: 'Shop',
          component: () => import('@/components/Shop'),
        },

  ]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
