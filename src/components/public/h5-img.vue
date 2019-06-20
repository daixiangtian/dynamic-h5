<template>
  <h5-div over-h flex-center posi-r
          @click.stop="$emit('click')"
          :style="getStyle">
    <img :src="src" d-n ref="ddImg" @load="layer">
    <slot/>
  </h5-div>
</template>

<script>

  import H5Div from "./h5-div";

  export default {
    components: {H5Div},
    props: {
      width: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 0
      },
      src: {
        type: String,
        default: ''
      },
      unit: {
        type: String,
        default: 'rem'
      },
      type: {
        type: String,
        default: 'auto'
      },
      fillet: {
        type: Number,
        default: 0
      },
    },
    data() {
      return {
        multiple: 100
      }
    },
    methods: {
      layer() {


        let item = this.$refs.ddImg,
          parent = item.parentNode,
          pw = parent.clientWidth,
          ph = parent.clientHeight,
          w = item.width,
          h = item.height;

        if (!this.width && !this.height) {
          parent.style.height = 'inherit'
          item.style.width = "100%"
          item.style.display = "block"
          return false
        }


        if (this.type == 'fill') {
          item.style.width = "100%";
          item.style.height = "100%";
          item.style.display = 'block'
          return false;
        } else if (this.type == 'fidelity') {

          if (this.width) {
            parent.style.height = 'inherit'
            item.style.width = this.width / this.multiple + this.unit
          }

          item.style.display = "block"
          return false;

        }


        // 父级是一个正方形
        if (this.width == this.height) {
          if (w == h) {// 图片是正方形
            if (w >= pw) {
              item.style.width = '100%'
            } else {
              item.style.height = '100%'
            }
          } else if (w > h) { //图片是一个横向的矩形
            item.style.height = '100%'
          } else if (w < h) {   //图片是一个纵向的矩形
            item.style.width = '100%'
          } else {
            item.style.height = '100%'
          }
        } else if (this.width > this.height) {
          if (w == h) {// 图片是正方形
            item.style.width = '100%'
          } else if (w > h) { //图片是一个横向的矩形
            if (w > pw) {
              if (pw / w * h > ph) {
                item.style.width = '100%'
              } else {
                item.style.height = '100%'
              }
            } else {
              item.style.height = '100%'
            }
          } else if (w < h) {   //图片是一个纵向的矩形
            if (pw / w * h > ph) {
              item.style.width = '100%'
            } else {
              item.style.height = '100%'
            }
          } else {
            item.style.height = '100%'
          }
        } else if (this.width < this.height) {
          console.log("----------")
          if (w == h) {
            item.style.height = "100%"
          } else if (w > h) {
            if (w > pw) {
              if (pw / w * h > ph) {
                item.style.height = "100%"
              } else {
                item.style.width = "100%"
              }
            } else {
              item.style.width = "100%"
            }
          } else if (w < h) {
            item.style.width = "100%"
          }
        }
        item.style.display = 'block'
      }
    },
    computed: {
      getStyle() {

        this.unit != 'rem' && (this.multiple = 1)

        return {
          width: this.width ? this.width / this.multiple + this.unit : '',
          height: this.height ? this.height / this.multiple + this.unit : '',
          minWidth: this.width / this.multiple + this.unit,
          minHeight: this.height / this.multiple + this.unit,
          borderRadius: this.fillet / this.multiple + this.unit,
          display: 'block'
        }
      }
    }

  }
</script>
