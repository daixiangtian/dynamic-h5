<template>
  <div :style="getStyle" ref="div" @click="$emit('click')">
    <slot/>
  </div>
</template>
<script>
  /**
   *  据之前的开发，由于每次的 宽、高、背景,颜色在公共样式里面时有时无的
   *
   *  当公共样式里面没有合适的宽高的时候都要在公共样式里面进行添加
   *  导致该项目，不能够及时的检测出新的Class名，有时候甚至会将项目逼停
   *
   *  有了该组件后，宽、高、背景、颜色等等，都可以进行随意添加，使开发效率更加便捷。
   *  不用再去考虑公共样式，是否有指定的值
   *
   *  根据VUE组件的属性，在组件调用的时候，也可以直接写上Class名或style样式，VUE自动会进行合并
   *
   *  但是这个唯一的缺点就是该组件的样式是行内样式。
   *  在代码美感度上的话，有着折扣，有时会在浏览器上面进行调试，不是那么的如意
   *
   *  例：
   *    <dd-layout-div :width="5" :height="5" class="flex" style="background:red">
   *        这里是组件的内容部分
   *    </dd-layout-div>
   *
   *  --- 戴向天 注
   * */
  export default {
    props: {
      width: {  //宽
        type: Number,
        default: null,
      },
      miW: {
        default: null
      },
      miH: {
        default: null
      },
      height: {  //高
        default: null,
      },
      bg: { //背景
        type: String,
        default: null,
      },

      br: {
        default: null
      },
      fillet: {
        type: Number,
        default: null,
      },
      pad: {
        type: Array,
        default: () => []
      },
      mar: {
        type: Array,
        default: () => []
      },
      color: {  //颜色
        type: String,
        default: null,
      },
      op: { //透明度
        type: Number,
        default: null,
      },
      fontSize: { //字体大小
        default: null
      },
      fontWeight:{  //字体的粗细
        default:null
      },
      lineHeight:{    //上下间距
        default:null,
      },
      unit: { //单位
        type: String,
        default: 'rem'
      }
    },
    data() {
      return {
        style: {},      //如果是在实时计算方法里面创建变量的话，每次执行函数的时候都会创建一个变量，在这里创建一个变量是不想有内存有过多的浪费
        multiple: 100,
        dom: null,
      }
    },
    methods: {
      divAttrHandle() {  //div的属性处理
        window.requestAnimationFrame(() => {
          if (this.$refs.div) {
            const dom = this.dom = this.$refs.div;
          } else {
            this.divAttrHandle()
          }
        })
      }
    },
    computed: {
      getStyle() {


        this.unit != 'rem' && (this.multiple = 1)

        this.width && (this.style.width = this.getType(this.width, 'number') ? this.width / this.multiple + this.unit : this.width)
        this.height && (this.style.height = this.getType(this.height, 'number') ? this.height / this.multiple + this.unit : this.height)

        this.bg && (this.style.background = this.bg)
        this.op && (this.style.opacity = this.op);
        this.color && (this.style.color = this.color);
        this.fontWeight && (this.style.fontWeight = this.fontWeight);
        this.fillet && (this.style.borderRadius = this.fillet / this.multiple + this.unit);
        this.lineHeight && (this.style.lineHeight = this.lineHeight / this.multiple + this.unit);
        let padStr = '', marStr = ''
        this.pad.forEach(item => padStr += item / this.multiple + this.unit + ' ')
        this.style.padding = padStr
        this.mar.forEach(item => {
          marStr += this.getType(item) == 'number' ? item / this.multiple + this.unit + ' ' : item + ' ';
        })
        this.style.margin = marStr
        this.fontSize && (this.style.fontSize = this.fontSize / this.multiple + this.unit)
        if (this.br) {
          if (this.getType(this.br) == 'string') this.style.border = this.br
          else if (this.getType(this.br) == 'json') for (let k in this.br) this.style['border-' + k] = this.br[k]
        }


        if (this.miW) {
          if (this.getType(this.miW) == 'string') this.style.minWidth = this.miW
          else if (this.getType(this.miW) == 'number') this.style.minWidth = this.miW / this.multiple + this.unit
        }
        if (this.miH) {
          if (this.getType(this.miH) == 'string') this.style.minHeight = this.miH
          else if (this.getType(this.miH) == 'number') this.style.minHeight = this.miH / this.multiple + this.unit
        }

        return this.style
      }
    },
    created() {
      this.divAttrHandle()

    }
  }
</script>
