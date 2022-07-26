<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore(),
          menuOpenState = computed(() => store.getters.menuOpen),
          closeMenu = () => {
            store.dispatch('handleMenuState',false);
          };
    return { menuOpenState, closeMenu };
  },
};
</script>

<template>
  <div :class="['slidMenu', {active: menuOpenState}]">
    <a class="slidMenu_close" @click="closeMenu"></a>
    <nav class="slidMenu_nav">
      <a class="slidMenu_item">ABOTU</a>
      <a class="slidMenu_item">ADDRESS</a>
      <a class="slidMenu_item">USER</a>
      <a class="slidMenu_item">STRENGTH</a>
      <a class="slidMenu_item">SERVICE</a>
      <a class="slidMenu_item">COMPANY</a>
      <a class="slidMenu_item">RECRUIT</a>
      <a class="slidMenu_item">CONTACT</a>
    </nav>
  </div>
</template>

<style lang="scss">
  .slidMenu{
    width: 300px;
    height: 100%;
    background-color: #fff;
    overflow: auto;
    padding: 100px 0;
    position: fixed;
    top: 0;
    right: 0;
    transform:translate3d(-100%,0,0);
    transition: box-shadow .3s, transform .3s;
    &.active{
      box-shadow: -2px 0 5px #35495d;
      transform:translate3d(0,0,0);
    }
    &_close{
      width: 44px;
      height: 44px;
      position: absolute;
      top: 10px;
      right: 10px;
      &:before, &:after{
        content:"";
        width: 42px;
        height: 8px;
        background-color: #000;
        border-radius: 10px;
        position:absolute;
        top:18px;
        left:1px;
      }
      &:before{transform:rotate(45deg);}
      &:after{transform:rotate(-45deg);}
    }
    &_nav{
      display: flex;
      flex-direction: column;
      justify-content:center;
    }
    &_item{
      color: #35495d;
      line-height: 24px;
      text-align: center;
      margin-bottom: 10px;
      transition: color .3s;
      &:hover {color: #4eb883;}
    }
  }
</style>