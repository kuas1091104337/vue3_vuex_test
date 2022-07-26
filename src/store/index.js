// import { createStore } from 'vuex';
// import state from './state.js';
// import actions from './actions.js';
// import mutations from './mutations.js';
// import getters from './getters.js';
// import Auth from './Auth';
import { reactive, readonly } from 'vue';
const state = reactive({count:0})
export default {
  state: readonly(state)
}
// export default createStore({
//   state,
//   // state: { isOpen: false, },
//   // 觸發 mutations 是透過 actions 來觸發
//   actions,
//   // actions: {
//   //   handleMenuToMuta(context){
//   //     // console.log(context);
//   //     const bool = !context.state.isOpen;
//   //     // commit 會發送1個事件到 mutations 來
//   //     context.commit('handMenuToState', bool)
//   //   }
//   // },
//   // mutations 才可以改 state 的資料
//   mutations,
//   // mutations: {
//   //   handMenuToState(state, bool){
//   //     // s-1
//   //     // state.isOpen = bool;
//   //     state.isOpen = !bool;
//   //     // state.isOpen = !state.isOpen;
//   //   }
//   // },
//   // 把處理資料的邏輯留在 vuex 裡面，component 純粹去取資料就好
//   // 要透過 getters 來取得state (getters 類似 computed)
//   getters,
//   // getters: {
//   //   open(state){ // 也可以做陣列的操作，或物件的處理
//   //     return state.isOpen;
//   //   }
//   // },
//   modules: {
//     Auth,
//   },
// })
