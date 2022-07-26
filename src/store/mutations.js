export default {
  handMenuToState(state, bool){
    state.isOpen = !bool;
  },
  setLoginState(state, bool) {
    state.isLogin = bool;
  },
  setMenuState(state, bool) {
    state.isMenuOpen = bool;
  },
}