import {getAttrs, getType, touch} from "./index";


const PlugIn = new Object(null)

PlugIn.install = function (Vue, option) {
  Vue.mixin({
    data() {
      return {
        mainColor: ''
      }
    },
    methods: {
      getType,
      getAttrs,
      goPointPage(param) {
        this.$router.push(param)
      },
      setMainColor(color) {
        this.mainColor = color;

        document.documentElement.style.setProperty(`--mainColor`, color);
      },
      touch,
    },
    computed: {
      getMainColor(){
        return this.mainColor
      }
    }
  })
}

export {PlugIn}
