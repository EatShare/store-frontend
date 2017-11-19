import Vue from 'vue'
import Router from 'vue-router'
import TheStorePage from '@/pages/TheStorePage'
import TheLandingPage from '@/pages/TheLandingPage'
import TheProductPage from '@/pages/TheProductPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: TheLandingPage
    },
    {
      path: '/store',
      name: 'StorePage',
      component: TheStorePage
    },
    {
      path: '/:product',
      name: 'ProductPage',
      component: TheProductPage
    }
  ]
})
