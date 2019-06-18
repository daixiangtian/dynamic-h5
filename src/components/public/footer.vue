<template>
  <h5-div flex-center posi-f b0 l0 r0
          fs="24" :h="100" bg="#eee">
    <h5-div v-for="(item,key) in config" :key="key" flex-1 flex-center @click="change(key)">
      <h5-div t-c>
        <h5-div :mar="[0,0,5]" :h="34">
          <img :src="item.src" v-if="item.src"/>
          <i v-else-if="item.icon" class="iconfont" :class="[item.icon,$route.meta.index==key&&'col-main']"></i>
        </h5-div>
        <span :class="[$route.meta.index==key&&'col-main']">{{item.name}}</span>
      </h5-div>
    </h5-div>
  </h5-div>
</template>
<script>
  import H5Div from "./h5-div";

  export default {
    components: {H5Div},
    props: {
      config: {
        type: Array,
        default: () => []
      },
      value: {
        type: Number,
        default: 0
      }
    },
    methods: {
      change(key) {
        this.$emit('input', key);
        this.$emit('change', this.config[key]);
      }
    }
  }
</script>
