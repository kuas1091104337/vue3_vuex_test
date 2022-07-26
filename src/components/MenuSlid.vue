<script>
// import { computed } from 'vue';
// import { useStore } from 'vuex';
export default {
  setup() {
    // const store = useStore(),
    //       menuOpen = computed(() => store.getters.open),
    //       slideMenuHandle = () => {
    //         console.log(store);
    //         // console.log(store.state.isOpen);
    //         // console.log(store.getters.isOpen);
    //         console.log(menuOpen);
    //         store.dispatch('handleMenuToMuta');
    //       };
    return {
      // slideMenuHandle, menuOpen
    };
  },
};
</script>
<template>
  <!-- <div :class="['menu', {open:store.getters.isOpen}]"> -->
  <div class="menu">
  <!-- <div :class="['menu', {open:menuOpen}]"> -->
    <!-- <a class="menu_btn" @click="slideMenuHandle">
      <i class="menu_btn_icon"></i>
    </a> -->
    <ul class="menu_nav">
      <li><a>abous</a></li>
      <li><a>content</a></li>
      <li><a>user</a></li>
      <li><a>address</a></li>
    </ul>
  </div>
</template>
<style lang="scss">
.open + .menu {transform: translate3d(0,0,0);}
.menu {
  width: 350px;
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  // z-index: 1;
  transform: translate3d(100%,0,0);
  transition: transform .3s;
  &_nav {
    // width: 100%;
    height: 300px;
    padding: 0;
    margin-top: -150px;
    position: absolute;
    top: 50%;
    > li {
      // width: 100%;
      height: 25%;
    }
    a {
      font-size: 22px;
      line-height: 3;
      width: 100%;
      height: 100%;
      cursor: pointer;
      display: block;
      padding-left: 50px;
    }
  }
  // &.open {transform: translate3d(0,0,0);}
  // &_btn {
  //   width: 44px;
  //   height: 44px;
  //   cursor: pointer;
  //   position: absolute;
  //   right: 50px;
  //   top: 50px;
  //   &_icon{
  //     width: 42px;
  //     height: 7px;
  //     background-color: #000;
  //     border-radius: 10px;
  //     margin:auto;
  //     position:absolute;
  //     top:0;
  //     right:0;
  //     left:0;
  //     bottom:0;
  //     transform: rotate(45deg);
  //     &:after{
  //       content: "";
  //       width: 100%;
  //       height: 100%;
  //       background-color: #000;
  //       border-radius: 10px;
  //       position:absolute;
  //       top:0;
  //       left:0;
  //       transform: rotate(90deg);
  //     }
  //   }
  // }
}
</style>
