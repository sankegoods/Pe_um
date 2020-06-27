import Vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import modulesA from './modules/modulesA'

Vue.use(vuex)

const store = new vuex.Store({
    state: {},
    mutations,
    actions,
    getters,
    modules: {
        a: modulesA
    }
})

export default store