import Vue from 'vue'
import Router from 'vue-router'
import Toast from '@/components/Toast'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/toast',
      name: 'Toast',
      component: Toast
    }
  ]
})
