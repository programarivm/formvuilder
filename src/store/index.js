import Vue from 'vue'
import Vuex from 'vuex'
import input from './modules/input'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    input
  }
})
