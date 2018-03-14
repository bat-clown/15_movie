/**
 * Created by web-01 on 2018/3/14.
 */
import * as types from './types'
export const mutations = {
  [types.MOVING_LIST] (state,{list}){
    state.movingList = list
  },
  [types.UP_COMING] (state, {list}) {
    state.upComing = list
  },
  [types.TOP_250] (state, {list}) {
    state.upComing = list
  },
  [types.NUM] (state, {num}) {
    state.num = num
  }
}
