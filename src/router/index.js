import Vue from 'vue'
import Router from 'vue-router'

const leftNav = () => import('../view/layout/templates/leftNav')
const right = () => import('../view/layout/templates/right')

Vue.use(Router)
const routes = [{
    path: '/',
    name: 'leftNav',
    component: leftNav
}, {
    path: '/leftNav',
    name: 'leftNav',
    component: leftNav
}, {
    path: '/right',
    name: 'right',
    component: right
}]

const router = new Router({
    routes,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    console.log('s')
    next((vm) => {
        console.log(vm.$route.path)
    })
})
export default router