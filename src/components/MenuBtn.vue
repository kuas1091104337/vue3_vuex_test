<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore(),
          menuOpen = computed(() => store.getters.open),
          menuHandle = () => {
            // dispatch 打事件在 actions
            store.dispatch('handleMenuToMuta');
            // store.commit('handMenuToState',true);
          };
    return { menuHandle, menuOpen };
  },
};
</script>
<template>
  <a :class="['menuBtn',{open:menuOpen}]" @click="menuHandle">
    <i class="menuBtn_bar"/>
  </a>
</template>
<style lang="scss">
.menuBtn {
  width: 44px;
  height: 44px;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 1;
  &_bar{
    width: 42px;
    height: 7px;
    background-color: #fff;
    border-radius: 10px;
    margin:auto;
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    &:before, &:after{
      content:"";
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 10px;
      position:absolute;
      top:0;
      left:0;
      transition: background-color .4s, transform .4s;
    }
    &:before{transform:translate3d(0,-14px,0);}
    &:after{transform:translate3d(0,14px,0);}
  }
}
.open > .menuBtn_bar{
  &:before, &:after{background-color: #000;}
  &:before{transform:translate3d(0,0,0) rotate(45deg);}
  &:after{transform:translate3d(0,0,0) rotate(-45deg);}
}
</style>
