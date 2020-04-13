import Vue from 'vue'
import VueRouter from 'vue-router'

import router1 from './router1.js'
import router2 from './router2.js'
import router3 from './router3.js'
import router4 from './router4.js'


Vue.use(VueRouter)

const routes = [
    ...router1,
    ...router2,
    ...router3,
    ...router4
]

const router = new VueRouter({
    routes:routes
})

router.beforeEach((to, from, next) => {
    // console.log(to, from)
    next()
})

export default router
