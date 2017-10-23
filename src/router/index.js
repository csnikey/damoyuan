import Vue from 'vue'
import Router from 'vue-router'
const comploader = (name) => (resolve) => require([`@/components/${name}`], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: comploader('test')
    },
    {
      path: '/tologin',
      name: 'tologin',
      component: comploader('tologin')
    },
    {
      path: '/confirmaddr',
      name: 'confirmaddr',
      component: comploader('confirmaddr')
    },
    {
      path: '/confirmorder',
      name: 'confirmorder',
      component: comploader('confirmorder')
    },
    {
      path: '/paysucc',
      name: 'paysucc',
      component: comploader('paysucc')
    },
    {
      path: '/lessondetail',
      name: 'lessondetail',
      component: comploader('lessondetail')
    },
    {
      path: '/error',
      name: 'error',
      component: comploader('error')
    }
  ]
})
