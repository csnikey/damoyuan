import Vue from 'vue'
import Router from 'vue-router'
const compLoad = (name) => (resolve) => require([`@/components/${name}`], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: compLoad('HelloWorld')
    },
    {
      path: '/index',
      name: 'index',
      component: compLoad('index')
    },
    {
      path: '/qq',
      name: 'qq',
      component: compLoad('qq')
    }
  ]
})
