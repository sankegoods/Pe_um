import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const Home = () => import('./views/Home.vue')
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('./views/Login.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/404',
      component: () => import('./views/404.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'el-icon-message', // 图标样式class
      children: [
        { path: '/main', component: () => import('./views/Main.vue'), name: '主页', hidden: true },
        { path: '/table', component: () => import('./views/nav1/Table.vue'), name: 'Table' },
        { path: '/form', component: () => import('./views/nav1/Form.vue'), name: 'Form' },
        { path: '/user', component: () => import('./views/nav1/user.vue'), name: '列表' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航二',
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/page4', component: () => import('./views/nav2/Page4.vue'), name: '页面4' },
        { path: '/page5', component: () => import('./views/nav2/Page5.vue'), name: '页面5' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: '导航三',
      iconCls: 'fa fa-address-card',
      leaf: true,
      children: [
        { path: '/page6', component: () => import('./views/nav3/Page6.vue'), name: '页面6' }
      ]
    },
    {
      path: '/',
      component: Home,
      name: 'Charts',
      iconCls: 'fa fa-bar-chart',
      children: [
        { path: '/echarts', component: () => import('./views/charts/echarts.vue'), name: 'echarts' }
      ]
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
