import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Toast from '@/components/Toast'
import TogglePanel from '@/components/TogglePanel'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/toast',
        name: 'Toast',
        component: Toast
    }, {
        path: '/togglepanel',
        name: 'TogglePanel',
        component: TogglePanel
    }]
})