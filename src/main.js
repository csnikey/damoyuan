// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import '@/style/main.css'
import Mint from 'mint-ui'
import api from '@/util/api.js'
Vue.use(Mint)
require('./lib/fit750.js')
// require('./lib/jquery.cookie')

Vue.use(VueRouter)

Vue.prototype.$api = api


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
