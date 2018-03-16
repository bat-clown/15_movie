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
  },
  [types.PREVPAGE] (state) {
    state.left -= 700;
    if (state.left < -700) {
      state.left = 0
    }
  },
  [types.NEXTPAGE] (state) {
    state.left += 700;
    if (state.left > 0) {
      state.left = -700;
    }
  },
  [types.CHANGEPAGE] (state, {indexD}) {
    state.left = -700 * indexD
  },
  [types.IDCLICK] (state, {id}) {
    state.id = id
  },
  [types.MOVING_DETAILS] (state, {list}) {
    state.movingDetails = list
  }
}
