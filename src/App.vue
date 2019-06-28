<template>
  <h5-div id="app" over-h w100>
    <router-view/>
    <Footer :config="footer.footerConfig" v-model="footer.index" @change="footerChange"></Footer>
  </h5-div>
</template>

<script>
  import Footer from "./components/public/footer";

  import {Icon} from "./config/iconfont"
  import H5Div from "./components/public/h5-div";

  export default {
    name: 'App',
    components: {H5Div, Footer},
    data() {
      return {
        footer: {
          index: 0,
          footerConfig: [
            {name: '溯源信息', icon: Icon.source, path: '/first'},
            {name: '追溯流程', icon: Icon.process, path: '/second'},
            {name: '立即购买', icon: Icon.store, path: '/third'},
            {name: '联系我们', icon: Icon.contact, path: '/fourth'}
          ]
        }
      }
    },
    methods: {
      footerChange(item) {
        this.goPointPage(item.path)
      }
    },
    created() {
      this.goPointPage("/first")

      this.setMainColor('green')
    }
  }
</script>

<style lang="scss">
  @import "assets/public.scss";

  #app {
    font-family: "Microsoft YaHei";
    font-size: 24px;
    color: #333;
  }

</style>
