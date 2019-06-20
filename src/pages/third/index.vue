<template>
  <h5-div :pad="[0,30]">
    <h5-div>
      <h5-img :src="logo" :width="62" :height="75"/>
    </h5-div>
    <h5-div flex-center>
      <h5-div>
        <h5-img :src="banner" :width="580" type="fidelity"/>
      </h5-div>
    </h5-div>
    <h5-div :pad="[30,0]" :mar="[0,60]" flex-x-center :br="{bottom:`1px solid #eee`}">
      <h5-img :src="pinfo" />
    </h5-div>
    <h5-div :pad="[30,0]" flex-x-center>
      <h5-img :src="title" :width="200" type="fidelity"/>
    </h5-div>
    <h5-div flex-x-center>
      <h5-img :src="mark" :width="260" type="fidelity"/>

    </h5-div>
  </h5-div>

</template>
<script>
  import H5Div from "../../components/public/h5-div";

  import logo from "../../assets/images/second/logo.png"
  import banner from "../../assets/images/third/banner.png"
  import pinfo from "../../assets/images/third/pinfo.png"
  import title from "../../assets/images/third/title.png"
  import mark from "../../assets/images/third/mark.png"
  import H5Img from "../../components/public/h5-img";

  export default {
    components: {H5Img, H5Div},
    data() {
      return {
        logo, banner, pinfo,title,mark
      }
    }
  }
</script>
