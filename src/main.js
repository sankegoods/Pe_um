import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import { request } from './network/request.js'

new Vue({
        el: '#app',
        router,
        render: h => h(App)
    })
    // request({
    //     url: '/home/multidata'
    // }).then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })