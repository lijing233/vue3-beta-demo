import Vuex from 'vuex'

export default Vuex.createStore({
  state: {
    stateInfo: 'init info'
  },
  mutations: {
    changeStateInfo(state, value) {
      state.stateInfo = value
    }
  },
  actions: {
  },
  modules: {
  }
});
