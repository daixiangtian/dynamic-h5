import Vue from 'vue'
import Vuex from 'vuex'
import {requestByGet} from "../plugin/request";


Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {},
  actions: {
    async getfemaleName({commit}, params) {
      const result = await requestByGet("https://www.apiopen.top/femaleNameApi?page=1", params);
      return result;
    }
  }
})
