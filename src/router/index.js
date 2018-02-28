import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Hello from '@/components/Hello'
import index from '@/components/index'
import check from '@/components/check'
import pay from '@/components/pay'
import send from '@/components/send'


Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/check',
      component: check
    },
    {
      path:'/pay/:price',
      component:pay
    },
    {
      path:'/send',
      component:send
    }
  ]
})
