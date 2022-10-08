<script>
  import { provide } from "vue";
  import store from "@/store";
  // import Home from "@/views/Home.vue";
  // export default {
  //   components: { Home },
  //   setup() {
  //     provide('mapStore',store);
  //   },
  // };
  
  import { onMounted } from 'vue';
  import { useStore } from 'vuex';
  import MenuBtn from "../src/components/MenuBtn.vue";
  import MenuSlid from "../src/components/MenuSlid.vue";
  export default {
    components: { MenuBtn, MenuSlid },
    setup() {
      const store = useStore();
      onMounted(() => {
        // 沒有打 namespaced 時用 export default { namespaced: true,
        // console.log('start : ',store.getters.getToken);
        // store.dispatch('handSetToken','abc')
        // console.log('end : ',store.getters.getToken);
        // 有打 namespaced 時用 export default { namespaced: true,
        console.log('start : ',store.getters['Auth/getToken']);
        store.dispatch('Auth/handSetToken','abc')
        console.log('end : ',store.getters['Auth/getToken']);
      })
      return {};
    },
  };
  </script>
  
  <template>
    <div class="content">
      <img class="content_img" alt="Vue logo" src="./assets/logo.png" />
    </div>
  </template>
  
  <style lang="scss">
  * { box-sizing: border-box; }
  html, body {
    font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
    height: 100%;
  }
  #app {
    height: 100%;
    position: relative;
  }
  .content {
    height: 100%;
    background-image: url("https://source.unsplash.com/WLUHO9A_xik/1600x900");
    background-position: center;
    background-size: cover;
    display: flex;
    &_img {margin: auto;}
  }
</style>