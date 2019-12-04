import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Nav from './components/Navigation.vue';

Vue.config.productionTip = false
Vue.component('Navigation', Nav);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
