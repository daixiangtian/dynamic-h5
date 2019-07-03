<template>
  <h5-div :pad="[0,30]">
    <h5-div>
      <h5-img :src="logo" :width="62" :height="75"/>
    </h5-div>
    <h5-div flex-center :mar="[50,0]">
      <h5-div>
        <h5-img :src="banner" :width="750-60" type="fill" :height="375"/>
      </h5-div>
    </h5-div>
    <h5-div flex flex-wrap>
      <h5-div  width="25%" :mar="[0,0,30,0]" flex flex-center v-for="(item,key) in buttons" :key="key">
        <h5-div :width="120" :height="120" :fillet="120" over-h br="1px solid #eee">
          <h5-div class="trn-1" :mar="[0,0,0,key<=index?0:-120]" >
            <h5-img :src="item.url"  :width="120" :height="120" :fillet="120" :key="key"/>
          </h5-div>
        </h5-div>

      </h5-div>
    </h5-div>
  </h5-div>

</template>
<script>
  import H5Div from "../../components/public/h5-div";
  import H5Img from "../../components/public/h5-img";


  import logo from "../../assets/images/second/logo.png"
  import banner from "../../assets/images/second/banner.png"
  import button1 from "../../assets/images/second/1.png"
  import button2 from "../../assets/images/second/2.png"
  import button3 from "../../assets/images/second/3.png"
  import button4 from "../../assets/images/second/4.png"

  export default {
    components: {H5Img, H5Div},
    data() {
      return {
        logo, banner,
        buttons: [
          {url: button1},
          {url: button2},
          {url: button3},
          {url: button4},
          {url: button1},
          {url: button2},
          {url: button3},
          {url: button4},
          {url: button1},
          {url: button2},
          {url: button3},
          {url: button4},
        ],
        index:-1,
      }
    },
    created() {
     const interval =setInterval(()=>{
       this.index++
       if(this.index>=12){
         window.clearInterval(interval)
       }
     },100)
    }
  }
</script>
