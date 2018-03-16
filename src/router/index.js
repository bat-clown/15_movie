import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

let routers = [
  {
  path:'/',
  name:'content',
  component: resolve => require(['@/components/movie/content'],resolve)
  },
  {
  path:'/movieDetail',
  name:'movieDetail',
  component: resolve => require(['@/components/movie/movieDetail'],resolve)
  }
]



export default new Router({
  mode:'history',
  routes:routers
})
