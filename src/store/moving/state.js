/**
 * Created by web-01 on 2018/3/14.
 */
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'


const state = {
  movingList: {
    subjects: []
  },
  city: '武汉',
  upComing: {
  subjects: []
  },
  num: 0
}


export default {
  state,
  getters,
  actions,
  mutations
}
