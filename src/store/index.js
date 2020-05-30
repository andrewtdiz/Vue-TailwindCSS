import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [
    {
      name: 'Appeal',
      route: '/'
    },
    {
      name: 'Pricing',
      route: '/'
    },
    {
      name: 'FAQs',
      route: '/'
    },
    {
      name: 'Blog',
      route: '/'
    }]
  },
  getters: {
    getRoutes(state){
      return state.routes
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
