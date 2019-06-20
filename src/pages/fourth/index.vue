<template>
  <h5-div flex-center height="100vh">
    <h5-div :pad="[0,100,100]">
      <h5-div flex-center>
        <h5-img :src="peach" :width="400" type="fidelity"/>
      </h5-div>
      <h5-div flex-center >
        <h5-div :font-size="88" :color="(star>0 && i <= star )?'#f7a30f':'#d2d2d2'" :pad="[0,10]" @click="star = i"
                v-for="i in 5">★
        </h5-div>
      </h5-div>
      <h5-div color="#f7a30f" t-c :font-size="30">主人请对这桃子进行打分</h5-div>
      <h5-div flex-center>
        <h5-div color="#fff" :pad="[15,30]" :bg="star?'#f7a30f':'#d2d2d2'" :fillet="15" :mar="[30,0]" :font-size="28">提交</h5-div>
      </h5-div>
      <h5-div br="1px dashed green"  :fillet="30" :pad="[30]">
        <h5-div t-c :mar="[10,0]">如您对我有任何意见和建议，请联系我们。</h5-div>
        <h5-div t-c color="green" font-wb :font-size="30">联系电话：123456</h5-div>
        <h5-div flex :mar="[10,0,0]">
          <h5-img :src="qrcode" :font-size="22" :width="150" :height="150"/>
          <h5-div flex-1 flex-y-center :mar="[0,30]">
            <h5-div>
              <h5-div :font-size="22">关注微信公众号</h5-div>
              <h5-div color="green" :mar="[10,0,0]" font-wb :font-size="30">麻阳黄桃</h5-div>
            </h5-div>
          </h5-div>
        </h5-div>
      </h5-div>

    </h5-div>

  </h5-div>

</template>
<script>
  import H5Div from "../../components/public/h5-div";
  import H5Img from "../../components/public/h5-img";

  import peach from '../../assets/images/fourth/peach.png'
  import qrcode from '../../assets/images/fourth/qrcode.png'

  export default {
    components: {H5Img, H5Div},
    data() {
      return {
        peach,
        qrcode,
        star: 0
      }
    },
    computed: {
      getStar() {

      }
    }
  }
</script>
