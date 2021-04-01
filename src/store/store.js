import Vue from 'vue'
import Vuex from 'vuex'
import { add as addInput, cancel as cancelInput } from './actions/inputActions'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    addInput,
    cancelInput
  }
});
