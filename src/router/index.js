import Vue from 'vue'
import Router from 'vue-router'


import Container from "../pages/indx"
import First from "../pages/first/index"
import Second from "../pages/second/index"
import Third from "../pages/third/index"
import Fourth from "../pages/fourth/index"

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      meta: {},
      component: Container,
      children: [
        {
          path: 'first',
          meta: {index:0},
          name: "First",
          component: First
        }, {
          path: 'second',
          meta: {index:1},
          name: "Second",
          component: Second
        }, {
          path: 'Third',
          meta: {index:2},
          name: "Third",
          component: Third
        }, {
          path: 'fourth',
          meta: {index:3},
          name: "Fourth",
          component: Fourth
        }
      ]
    }
  ]
})
