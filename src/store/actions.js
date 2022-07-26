export default {
  // s-1
  // handleMenuToMuta(context){
  //   console.log(context);
  //   const bool = !context.state.isOpen;
  //   // 透過 commit 發送事件到 mutations 來
  //   context.commit('handMenuToState', bool);
  // s-2
  //   context.commit('handMenuToState', context.state.isOpen);
  // }

  // s-3
  handleMenuToMuta({ commit, state }){
    console.log(commit);
    console.log(state);
    commit('handMenuToState', state.isOpen);
  }
  // handleLoginState({ commit }, bool) {
  //   commit('setLoginState', bool);
  // },
  // handleMenuState({ commit }, bool) {
  //   commit('setMenuState', bool);
  // },
}