<template>
  <h5-div posi-f t0 l0 r0 b0 ref="box">
    <h5-div class="trn-05">
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
          <h5-div color="#fff" :fontSize="22" class="bg-main" :mar="[16,100]" :height="40" flex-center t-c>
            颜色红颜・肉质饱满・果汁浓甜・纯香绕口
          </h5-div>
          <h5-div class="col-main" :fontSize="33" :mar="[50,0,30]" t-c>种植在平均海拔500米以上的山坡</h5-div>
          <h5-div fon-wb :fontSize="37" flex-center class="col-main">富硒小分子团水滋养的优质好果</h5-div>
          <h5-div flex-center>
            <h5-div :bg="`url(${knowDetails})no-repeat 0 0/100% 100%`" class="up-dwon" :height="120" :width="400"/>
          </h5-div>
        </div>
        <h5-div class=" trn-1" :class="showInfo?'op-0':'op-1'">
          <h5-div :width="500" :mar="[0,'auto']" flex-x-center color="#fff" :height="50" :pad="[40,0,0]"
                  :bg="`url(${query})no-repeat 0 0/100% 100%`" :font-size="18">
            您当前查询的是麻阳高山“锦绣”黄桃信息
          </h5-div>
          <h5-div :fontSize="28" font-weight="bold" t-c :mar="[60,0,20]">
            源自中国最美养生栖据地、中国长寿之乡
          </h5-div>
          <h5-div font-size="18" :line-height="36" :width="500" :mar="[0,'auto']">
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
        <h5-div height="100vh">
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
            <h5-div posi-a b0 color="#fff" :mar="[0,0,140,100]" font-size="20" t-c flex-column flex-y-center>
              <h5-img :src="location" type="fidelity" :width="48" class="up-dwon"/>
              湖南麻阳
            </h5-div>
          </h5-div>
        </h5-div>


        <h5-div height="100vh">
          <h5-div flex :pad="[100,120,0]">
            <h5-img :width="117" type="fill" :height="125" :src="face"/>
            <h5-div t-c :mar="[-75,30,0]" :width="450">
              <h5-div fontSize="30" class="col-main" :mar="[0,0,20]" flex-center>
                麻阳基地介绍
              </h5-div>
              <h5-div fontSize="30" font-weight="bold" col-main>2019年气候追溯</h5-div>
            </h5-div>
          </h5-div>
          <h5-div :pad="[10,0,0]" posi-r z5 :height="200">
            <div v-if="pageConfig.index == 2">


              <h5-div posi-a l0 class="sun parabola">
                <h5-img :src="sun" type="fidelity"
                        :width="264"></h5-img>
              </h5-div>
              <!--            <h5-div posi-a r0 class="moon parabola" :mar="[0,50,0]">-->
              <!--              <h5-img :src="moon" type="fidelity"-->
              <!--                      :width="220"></h5-img>-->
              <!--            </h5-div>-->

              <h5-div flex flex-center>
                <h5-div posi-a :mar="[100,0,0,50]" :bg="`url(${comment1})no-repeat 0 0 / 100% 100%`" :width="200"
                        :height="120">
                  <h5-div t-c :mar="[0,0,20]">年平均降雨量</h5-div>
                  <h5-div t-c col-main font-weight :font-size="32">1445mm
                  </h5-div>
                </h5-div>
              </h5-div>

              <h5-div posi-a flex-center flex :mar="[260,0,0,50]" class="up-dwon" :op="0.8"
                      :bg="`url(${comment1})no-repeat 0 0 / 100% 100%`" :width="240" :height="160">
                <h5-div>
                  <h5-div t-c :mar="[0,0,10]">年平均日照长度</h5-div>
                  <h5-div t-c col-main font-weight :font-size="32">1608hr
                  </h5-div>
                </h5-div>

              </h5-div>


              <h5-div class="cloud" posi-a r0 :mar="[80,0,0,-50]">
                <h5-div :bg="`url(${cloud})no-repeat 0 0 / 100% 100%`" :width="300"
                        :height="115"/>
                <h5-div :bg="`url(${rains[rainIndex]})no-repeat 0 0/ 100% 100%`" :width="283" :height="182"/>
              </h5-div>
            </div>
          </h5-div>


          <h5-div flex flex-center posi-r z5 :mar="[0,0,-170]">
            <h5-div flex flex-bt :width="600" class="trn-2 op-0" :class="pageConfig.index == 0 &&'op-1'">
              <h5-div class="up-dwon" :bg="`url(${orchard2})no-repeat 0 0 / 100% 100%`" :width="150" :height="180"
                      :mar="[-40,0,0]"/>
              <h5-div class="up-dwon" :bg="`url(${orchard3})no-repeat 0 0 / 100% 100%`" :width="160" :height="180"
                      :mar="[-80,0,0]"/>
              <h5-div class="up-dwon" :bg="`url(${orchard1})no-repeat 0 0 / 100% 100%`" :width="150" :height="180"/>

              <h5-div posi-a flex-y-center :bg="`url(${comment2})no-repeat 0 0 / 100% 100%`" :width="200"
                      :mar="[150,0,0]" :op="0.8" :pad="[10,0,10,30]" :height="150">
                <h5-div>
                  <h5-div>总株数</h5-div>
                  <h5-div>挂果树株数</h5-div>
                  <h5-div col-main :font-size="32">190,000</h5-div>
                </h5-div>
              </h5-div>

            </h5-div>
          </h5-div>


          <h5-div flex-center posi-r :height="445">
            <h5-img :src="forest" type="fidelity" :width="680"/>
            <h5-div posi-a flex flex-center :width="680" :height="445 ">
              <h5-div :width="pageConfig.index == 1?338:0.001" class="trn-3" over-h :height="445 " posi-a r0>
                <h5-img posi-a r0 :src="dayAndNight" type="fidelity" posi-a :width="680"/>
              </h5-div>

            </h5-div>

          </h5-div>

          <h5-div flex flex-bt flex-y-center>
            <h5-div
              ref="tabOne"
              @click="changeTab()"
              :width="63" flex flex-center trn-rotate-y-180 :height="143"
              :bg="`url(${butbg})no-repeat 0 0 / 100% 100%`">
              <h5-div :bg="`url(${arrow})no-repeat 0 0 / 100% 100%`" :width="23" :height="42"/>
            </h5-div>
            <h5-div>
              <h5-div flex flex-center posi-r class="trn-1" :class="pageConfig.index == 1?'op-1':'op-0'">
                <h5-div posi-a :mar="[-500,0,0]" :width="680">
                  <h5-div flex posi-a flex-bt :mar="[-180,0,0]" width="100%">
                    <h5-div posi-a l0 class="sun " :class="pageConfig.index == 1?'parabola':''">
                      <h5-img :src="sun" type="fidelity"
                              :width="264"></h5-img>
                    </h5-div>
                    <h5-div posi-a r0 class="moon" :class="pageConfig.index == 1?'parabola':''" :mar="[0,50,0]">
                      <h5-img :src="moon" type="fidelity"
                              :width="220"></h5-img>
                    </h5-div>
                  </h5-div>
                  <h5-div :width="200" class="up-dwon" :mar="[0,'auto']" :height="126" flex-x-end flex flex-y-center
                          :bg="`url(${comment1})no-repeat 0 0 / 100% 100%`">
                    <h5-div t-c width="100%">
                      <h5-div color="#434343" :pad="[0,30,0,0]" t-r>昼夜最大温差</h5-div>
                      <h5-div t-r color="#79bc1f" :pad="[0,30,0,0]" :font-size="30">21℃</h5-div>
                    </h5-div>
                  </h5-div>
                </h5-div>

                <h5-div :width="180" :height="126" flex-x-end :mar="[0,30,0,0]" flex flex-y-center
                        :bg="`url(${comment2})no-repeat 0 0 / 100% 100%`">
                  <h5-div t-r width="100%">
                    <h5-div color="#434343" :pad="[0,30,0,0]" t-r>年平均气温</h5-div>
                    <h5-div color="#79bc1f" :pad="[0,30,0,0]" :font-size="30">19℃</h5-div>
                  </h5-div>
                </h5-div>
                <h5-div :bg="`url(${thermometerAsh})no-repeat 0 0 / 100% 100%`" flex flex-y-center :width="329"
                        :height="18">
                  <h5-div class="trn-2" over-h :width="pageConfig.index == 1?329:10" :height="15">
                    <h5-div :bg="`url(${thermometerRed})no-repeat 0 0 / 100% 100% `" :width="221" :height="15"/>
                  </h5-div>

                </h5-div>
              </h5-div>
            </h5-div>

            <h5-div
              ref="tabTwo"
              @click="changeTab(true)"
              :width="63" flex flex-center :height="143" :bg="`url(${butbg})no-repeat 0 0 / 100% 100%`">
              <h5-div :bg="`url(${arrow})no-repeat 0 0 / 100% 100%`" :width="23" :height="42"/>
            </h5-div>
          </h5-div>


          <h5-div flex flex-center>
            <h5-div flex>
              <h5-div :width="150" flex-center flex :height="150" :fillet="200"
                      v-for="(item,key) in pageConfig.tabConfig" :key="key"
                      :ref="`tab${key}`"
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
  import cloud from "../../assets/images/first/cloud.png"
  import rain1 from "../../assets/images/first/rain1.png"
  import rain2 from "../../assets/images/first/rain2.png"
  import rain3 from "../../assets/images/first/rain3.png"
  import rain4 from "../../assets/images/first/rain4.png"
  import rain5 from "../../assets/images/first/rain5.png"
  import rain6 from "../../assets/images/first/rain6.png"
  import thermometerAsh from "../../assets/images/first/thermometer-ash.png"
  import thermometerRed from "../../assets/images/first/thermometer-red.png"
  import butbg from "../../assets/images/first/butbg.png"
  import arrow from "../../assets/images/first/arrow.png"
  import orchard1 from "../../assets/images/first/orchard1.png"
  import orchard2 from "../../assets/images/first/orchard2.png"
  import orchard3 from "../../assets/images/first/orchard3.png"
  import comment1 from "../../assets/images/first/comment1.png"
  import comment2 from "../../assets/images/first/comment2.png"
  import comment3 from "../../assets/images/first/comment3.png"
  import dayAndNight from "../../assets/images/first/day-and-night.png"

  import knowDetails from "../../assets/images/first/know-details.png"
  import H5Img from "../../components/public/h5-img";


  export default {
    components: {H5Img, H5Div},
    data() {
      return {
        Wheight: window.screen.height,
        show: false,
        showInfo: true,
        bgs: [
          bgOne,
          more,
          forest
        ],
        rains: [rain1, rain2, rain3, rain4, rain5, rain6],
        rainIndex: 0,
        orchard1,
        orchard2,
        orchard3,
        comment1,
        comment2,
        comment3,
        dayAndNight,
        face, map, location, peach, knowDetails, cloud, thermometerAsh, thermometerRed, butbg, arrow,
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
        index: 0,
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
                  that.touchHandle()
                }, 1000)
              }
            }
          });
        } else {
          window.requestAnimationFrame(this.bindTouch)
        }
      },
      changeTab(type) {
        console.log("type", type);
        if (type) {
          if (this.pageConfig.index < 2)
            this.pageConfig.index++
        } else {
          if (this.pageConfig.index > 0)
            this.pageConfig.index--
        }

      },
      touchHandle() {
        const box = this.$refs.box.$el,
          dom = box.firstChild,
          self = this;
        let Y = 0;
        this.touch({
          dom: self.$refs.tabOne.$el,
          end() {
            if (self.pageConfig.index > 0)
              self.pageConfig.index--
          }
        })
        this.touch({
          dom: self.$refs.tabTwo.$el,
          end() {
            if (self.pageConfig.index < 2)
              self.pageConfig.index++
          }
        })
        this.touch({
          dom: self.$refs.tab0[0].$el,
          end() {
            self.pageConfig.index = 0
          }
        })
        this.touch({
          dom: self.$refs.tab1[0].$el,
          end() {
            self.pageConfig.index = 1
          }
        })
        this.touch({
          dom: self.$refs.tab2[0].$el,
          end() {
            if (self.pageConfig.index < 2)
              self.pageConfig.index = 2
          }
        })


        this.touch({
          dom: box,
          start({y}) {
            console.log("document.documentElement.style", document.documentElement.style)
            Y = (dom.style.transform ? parseFloat(dom.style.transform.split("(")[1]) : 0) * parseFloat(document.documentElement.style.fontSize);

            console.log("y===>", Y)
            dom.style.transition = '0ms'
          },
          move({dy}) {
            dom.style.transform = `translateY(${(dy + Y) / parseFloat(document.documentElement.style.fontSize)}rem)`
          },
          change({direction}) {
            dom.style.transition = '500ms'
            switch (direction) {
              case 'up':
                self.index--;
                if (self.index <= -2) {
                  if (!self.pageConfig.showSunAndMoon) {

                    function runRain() {
                      self.rainTimeout = setTimeout(() => {
                        self.rainIndex++
                        self.rainIndex = self.rainIndex % self.rains.length;
                        runRain()
                      }, 180)
                    }

                    runRain();

                  }
                  self.pageConfig.showSunAndMoon = true
                  self.index = -2
                }
                break;
              case 'down':
                self.index++;
                if (self.index >= 0) {
                  self.index = 0
                }
                break;
            }
            dom.style.transform = `translateY(${(self.index) * box.clientHeight / parseFloat(document.documentElement.style.fontSize)}rem)`
          }
        })


      }
      // scrollHandel(e) {
      //   let top = this.$refs.box.$el.scrollTop;
      //   if (top > (2 - 1) * window.screen.height) {
      //     this.pageConfig.showSunAndMoon = true
      //   }
      // }
    },
    created() {
      this.bindTouch()
    },
    destroyed() {
      clearTimeout(this.rainTimeout)
    }
  }
</script>
