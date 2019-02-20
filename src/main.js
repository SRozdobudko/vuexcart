import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import App from './App.vue'
import './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
