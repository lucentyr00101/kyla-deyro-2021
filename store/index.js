export default {
  state: () => ({
    loggedIn: false
  }),
  mutations: {
    setAuth (state, payload) {
      state.loggedIn = payload
    }
  },
  getters: {
    loggedIn: state => state.loggedIn
  }
}
