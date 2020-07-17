import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

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
    