import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/Hello'
import index from '@/components/movie/index'
import content from '@/components/movie/compot/content'
import pag_26861685 from '@/components/movie/pages/pag_26861685'
import pay from '@/components/pay'
import send from '@/components/send'


Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {path:'/',component:content},
        {path:'/subjects/26861685',component:pag_26861685}
      ]
    },
    {
      path:'/subject/:id',
      component:pay
    },
    {
      path:'/send',
      component:send
    }
  ]
})
