<template>
  <h5-div posi-f t0 b0 l0 r0 over-a ref="box">
    <h5-div mi-h="100vh" posi-r ref="firstPage">
      <img :src="bgs[0]" w100 h100 posi-a t0 l0 :class="show?'d-n trn-1':'flicker'"/>
      <h5-div flex-center posi-r t-c :pad="[200,0,0]">
        <img :src="peach" class="trn-1" :class="[show&&'scale-x-y-8']" :width="250"/>
        <img :src="peach1" posi-a l0 t0 class=" trn-1 h-320" :class="[!show&&'mar-t-0320']"/>
        <img :src="peach2" posi-a r0 t0 class=" trn-1 h-300 mar-r-30" :class="[!show&&'mar-t-0320']"/>
        <img :src="peach3" posi-a l0 t40 class="w-160 trn-1" :class="[!show&&'mar-l-0160']"/>
        <img :src="peach5" posi-a r0 t40 class="w-160 trn-1" :class="[!show&&'mar-r-0160']"/>
      </h5-div>
      <div posi-r class="trn-1" :class="[show&&'desc-n']" v-if="showInfo">
        <h5-div :fontSize="48" class="col-main" t-c fon-wb>麻阳高山“锦绣”黄桃</h5-div>
        <h5-div color="#fff" :fontSize="22" class="bg-main" :mar="[16,100]" :h="40" flex-center t-c>
          颜色红颜・肉质饱满・果汁浓甜・纯香绕口
        </h5-div>
        <h5-div class="col-main" :fontSize="33" :mar="[50,0,30]" t-c>种植在平均海拔500米以上的山坡</h5-div>
        <h5-div fon-wb :fontSize="37" flex-center class="col-main">富硒小分子团水滋养的优质好果</h5-div>
        <h5-div flex-center>
          <h5-div :bg="`url(${knowDetails})no-repeat 0 0/100% 100%`" class="up-dwon" :h="120" :w="400"/>
        </h5-div>
      </div>
      <h5-div class=" trn-1" :class="showInfo?'op-0':'op-1'">
        <h5-div :w="500" :mar="[0,'auto']" flex-x-center color="#fff" :h="50" :pad="[40,0,0]"
                :bg="`url(${query})no-repeat 0 0/100% 100%`">
          您当前查询的是麻阳高山“锦绣”黄桃信息
        </h5-div>
        <h5-div :fontSize="28" font-weight="bold" t-c :mar="[60,0,20]">
          源自中国最美养生栖据地、中国长寿之乡
        </h5-div>
        <h5-div font-size="18" :line-height="36" :w="500" :mar="[0,'auto']">
          没立方厘米负氧离子7000个以上，天然氧吧地
          磁强度平均6.48高斯，天然磁化场！独特地理
          小气候孕育出卓而不凡的优秀品质
        </h5-div>
      </h5-div>
      <h5-img :src="peach6"
              posi-a b0 l0
              type="fill"
              :height="264"
              :width="159"
              class="trn-1"
              :class="!show&&'peach6'"
      />
      <h5-div posi-a b0 l0 r0 flex-x-center>
        <h5-img :src="peach7"
                type="fill"
                :height="264"
                :width="264"
                class="trn-1"
                :class="!show&&'peach7'"
        />

      </h5-div>

      <h5-img
        :src="peach8"
        posi-a b0 r0
        type="fill"
        :height="264"
        :width="159"
        class="trn-1"
        :class="!show&&'peach8'"
      />
    </h5-div>
    <div v-if="show">
      <h5-div h="100vh">
        <h5-div flex-center :pad="[100,0,0]">
          <h5-img :width="117" type="fill" :height="125" :src="face"/>
          <h5-div t-c :mar="[0,30]">
            <h5-div fontSize="28" :mar="[0,0,20]" flex-center>来自农户
              <h5-div fontSize="28" class="col-main">腾明学</h5-div>
              果园
            </h5-div>
            <h5-div fontSize="28" col-main>湖南省怀化市麻阳县兰里镇横喇基地</h5-div>
          </h5-div>
        </h5-div>
        <h5-div flex-x-center :mar="[50,0]" posi-r>
          <h5-img :src="map" type="fidelity" :width="680"/>
          <h5-div posi-a b0 color="#fff" :mar="[0,0,140,100]" font-size="28" t-c flex-column flex-y-center>
            <h5-img :src="location" type="fidelity" class="up-dwon"/>
            湖南麻阳
          </h5-div>
        </h5-div>
      </h5-div>


      <h5-div h="100vh">
        <h5-div flex :pad="[200,120,0]">
          <h5-img :width="117" type="fill" :height="125" :src="face"/>
          <h5-div t-c :mar="[-125,30,0]" :w="450">
            <h5-div fontSize="30" class="col-main" :mar="[0,0,20]" flex-center>
              麻阳基地介绍
            </h5-div>
            <h5-div fontSize="30" font-weight="bold" col-main>2019年气候追溯</h5-div>
          </h5-div>
        </h5-div>

        <h5-div :pad="[30,0,0]" posi-r :h="264">
          <div v-if="pageConfig.showSunAndMoon">
            <h5-div posi-a l0 class="sun parabola">
              <h5-img :src="sun" type="fidelity"
                      :width="264"></h5-img>
            </h5-div>
            <h5-div posi-a r0 class="moon parabola" :mar="[0,50,0]">
              <h5-img :src="moon" type="fidelity"
                      :width="200"></h5-img>
            </h5-div>
          </div>
        </h5-div>

        <h5-div flex-center>
          <h5-img :src="forest" type="fidelity" :width="680"/>
        </h5-div>

        <h5-div flex flex-center>
          <h5-div flex>
            <h5-div :w="150" flex-center flex :h="150" :fillet="200"
                    v-for="(item,key) in pageConfig.tabConfig" :key="key"
                    @click="pageConfig.index = key"
                    :br="pageConfig.index == key?`1px solid green`:'1px solid #999'" :mar="[0,30]">
              <h5-div t-c>
                <h5-div>
                  <h5-div :font-size="56" :mar="[0,0,10]" class="iconfont"
                          :class="[pageConfig.index == key?'col-main':'col-9',item.icon]"></h5-div>
                </h5-div>
                <h5-div :class="pageConfig.index == key?'col-main':'col-9'">{{item.name}}</h5-div>
              </h5-div>
            </h5-div>

          </h5-div>

        </h5-div>

      </h5-div>
    </div>
  </h5-div>
</template>
<script>
  import H5Div from "../../components/public/h5-div";

  import more from '../../assets/images/first/more.jpg'
  import bgOne from "../../assets/images/first/bj.png"
  import face from "../../assets/images/first/face.png"
  import map from "../../assets/images/first/map.png"
  import location from "../../assets/images/first/location.png"

  import peach from "../../assets/images/first/peach.png"
  import peach1 from "../../assets/images/first/peach1.png"
  import peach2 from "../../assets/images/first/peach2.png"
  import peach3 from "../../assets/images/first/peach3.png"
  import peach4 from "../../assets/images/first/peach4.png"
  import peach5 from "../../assets/images/first/peach5.png"
  import peach6 from "../../assets/images/first/peach6.png"
  import peach7 from "../../assets/images/first/peach7.png"
  import peach8 from "../../assets/images/first/peach8.png"
  import query from "../../assets/images/first/query.png"
  import forest from "../../assets/images/first/forest.png"
  import sun from "../../assets/images/first/sun.png"
  import moon from "../../assets/images/first/moon.png"


  import knowDetails from "../../assets/images/first/know-details.png"
  import H5Img from "../../components/public/h5-img";


  export default {
    components: {H5Img, H5Div},
    data() {
      return {
        show: false,
        showInfo: true,
        bgs: [
          bgOne,
          more,
          forest
        ],
        face, map, location, peach, knowDetails,
        peach1,
        peach2,
        peach3,
        peach4,
        peach5,
        peach6,
        peach7,
        peach8,
        query,
        forest,
        sun, moon,
        pageConfig: {
          showSunAndMoon: false,
          index: 0,
          tabConfig: [
            {name: '数量', icon: 'icon-shuye'},
            {name: '温度', icon: 'icon-wendu'},
            {name: '气候', icon: 'icon-taiyang-copy'},
          ]
        }
      }
    },
    methods: {
      bindTouch() {
        if (this.$refs.firstPage) {
          const dom = this.$refs.firstPage.$el,
            that = this;

          dom.parentNode.onscroll = this.scrollHandel
          this.touch({
            dom,
            change(e, off) {
              if (e.direction == 'up') {
                console.log("开始执行动画")
                that.show = true;
                off();  //释放元素的touch事件
                setTimeout(() => {
                  that.showInfo = false
                }, 1000)
              }
            }
          });
        } else {
          window.requestAnimationFrame(this.bindTouch)
        }
      },
      scrollHandel(e) {
        let top = this.$refs.box.$el.scrollTop;
        if (top > (2 - 1) * window.screen.height) {
          this.pageConfig.showSunAndMoon = true
        }
      }
    },
    created() {
      setTimeout(this.bindTouch, 100)

    }
  }
</script>
