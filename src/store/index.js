/**
 * Created by web-01 on 2018/3/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './moving/state'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    state
  }
})
