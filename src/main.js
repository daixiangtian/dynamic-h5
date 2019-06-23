// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from "vue-scroller"
import {store} from './store'

import {PlugIn} from './plugIn/plugin'

Vue.config.productionTip = false

Vue.use(PlugIn)
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: {App},
  template: '<App/>'
})
