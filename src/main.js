import Vue from 'vue'
import Login from './page/Login.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Login),
}).$mount('#login')
