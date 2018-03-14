import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath'
import content from '@/components/movie/content'
import movieDetail from '@/components/movie/movieDetail'


Vue.use(Router);

function lazyLoad(path){
  return resolve => require(['@/' + path + '.vue'],resolve)
}

let routers = [];
for (let key in routerPath){
  if (routerPath.hasOwnProperty(key)){
    let item = {}
    item.name = routerPath[key].name
    item.path = key
    item.component = lazyLoad(routerPath[key].path)
    if (!!routerPath[key].redirect){
      item.redirect = routerPath[key].redirect
    }
    routers.push(item)
  }
}



export default new Router({
  mode:'history',
  routes:routers
})
