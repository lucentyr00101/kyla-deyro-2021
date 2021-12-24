export default {
  state: () => ({
    loggedIn: true
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
