// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/js/jquery-3.2.1.min'
import './assets/css/index.css'
import './assets/css/headBar.css'
import './assets/css/home.css'
import './assets/css/_all.css'
import './assets/css/douban.css'
import './assets/css/init.css'
import './assets/css/chaos.css'
import './assets/css/gallery.css'


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
