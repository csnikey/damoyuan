// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import '@/style/main.css'
import {ToastPlugin, AlertPlugin} from 'vux'
require('./lib/viewport.js')

Vue.use(VueRouter)
// 默认配置一些常用的插件
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
