import Vue from 'vue'
import Router from 'vue-router'
import TheStorePage from '@/pages/TheStorePage'
import TheLandingPage from '@/pages/TheLandingPage'

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
    }
  ]
})
