/**
 * Created by web-01 on 2018/3/14.
 */
import {Util} from '../../utils/util'

let util = new Util()

export const actions = {

  getMoving ({commit,state}) {
    util.get('/movie/in_theaters',{city: state.city}).then(res => {
      commit('MOVING_LIST', {list: res})
    })
  },
  getUpComing ({commit,state}) {
    util.get('/movie/coming_soon',{city: state.city}).then(res => {
      commit('UP_COMING', {list: res})
    })
  },
  getTop250 ({commit,state}) {
    util.get('/movie/top250').then(res => {
      commit('TOP_250', {list: res})
    })
  }
}
