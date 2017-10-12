import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/login.vue'
import Home from '@/components/page/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
    ]
})
