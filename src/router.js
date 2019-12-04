import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Fixtures from './views/Fixtures.vue'
import DepecheMode from './views/DepecheMode.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fixtures',
      component: Fixtures
    },
    {
      path: '/depechemode',
      component: DepecheMode
    }
  ]
})
