<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore(),
          menuOpenState = computed(() => store.getters.menuOpen),
          loginState = computed(() => store.getters.login),
          handleMenu = () => {
            store.dispatch('handleMenuState', !menuOpenState.value);
          },
          handleLogin = () => {
            store.dispatch('handleLoginState', !loginState.value);
          };
    return { handleMenu, handleLogin };
  },
};
</script>

<template>
  <header class="head">
    <nav class="head_nav">
      <a class="head_item" @click="handleMenu">Menu</a>
      <a class="head_item" @click="handleLogin">Login</a>
    </nav>
  </header>
</template>

<style lang="scss">
  .head{
    width: 100%;
    height: 36px;
    background-color: #4eb883;
    padding-left: 30px;
    position: absolute;
    top: 0;
    left: 0;
    &_nav{
      display: flex;
      height: 100%;
    }
    &_item{
      color: #fff;
      font-size: 14px;
      text-align: center;
      line-height: 36px;
      width: 50px;
      cursor: pointer;
      margin-right: 10px;
      transition: background-color .3s;
      &:hover {background-color: #35495d;}
    }
  }
</style>