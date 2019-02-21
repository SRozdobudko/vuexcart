import Vue from 'vue'
import Vuex from 'vuex'
import cards from './cards'
import panel from './panel'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: [
        cards,
        panel
    ]
})