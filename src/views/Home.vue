<style scoped>
.guage {
  top: 27%;
  width: 45%;
  height: 45%;
  position: absolute;
  right: 5%;
}
.guageText {
  width: 100%;
  position: relative;
  height: 100%;
  font-size: 0.87rem;
}
.guageWrap {
  background: url(/assets/img/dial.png) top center no-repeat;
  width: 61%;
  position: relative;
  background-size: 100%;
  height: 100%;
  margin: 0 auto;
}
.hand {
  position: absolute;
  top: 47%;
  left: 8%;
  -webkit-transform-origin: right center;
  transform-origin: right center;
  transform: rotate(-46deg);
  -ms-transform: rotate(-46deg); /* IE 9 */
  -webkit-transform: rotate(-46deg); /* Safari and Chrome */
  -o-transform: rotate(-46deg); /* Opera */
  -moz-transform: rotate(-46deg); /* Firefox */
}
.handimg {
  width: 42%;
  height: 5%;
}
.g-li {
  position: absolute;
  text-align: center;
}
.g-li.first {
  top: 43%;
  left: -8%;
}
.g-li.second {
  top: -48%;
  left: 50%;
  margin-left: -18px;
}
.g-li.Third {
  top: 43%;
  right: -5%;
}
.g-li span {
  font-size: 14px;
  font-size: 0.75rem;
  line-height: 25px;
  color: #fff;
}
.g-li p {
  font-size: 0.87rem;
  color: #0affff;
}
.beforewrap {
  width: 100%;
  padding-left: 17%;
  padding-top: 3%;
  text-align: left;
  font-size: 0.87rem;
  color: #fff;
  line-height: 1.56rem;
}
.t-Color {
  font-style: normal;
  color: #eeff7c;
  font-weight: 500;
}
.personInfo {
  width: 55%;
  position: absolute;
  top: 4%;
  padding: 2% 5% 0 3%;
  font-size: 16px;
  bottom: 2%;
  overflow: hidden;
}
.personInfo ul {
  width: 100%;
  height: initial;
}
.personInfo ul li {
  color: #fff;
  padding-bottom: 6%;
  font-weight: 400;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 0.87rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.personInfo ul li.Household {
  overflow: inherit;
}
.personInfo ul li span {
  display: inline-block;
  padding-right: 4%;
  padding-left: 1%;
}
.personMoney {
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  width: 50%;
  margin-left: 1.3rem;
  margin-top: 1rem;
}
.personInfo ul li.falsify {
  height: 3.8rem;
  line-height: 1.8rem;
  width: 74%;
  position: relative;
  margin-top: 0.6rem;
}
.personInfo ul li.Household {
  overflow: inherit;
}
.personInfo ul li span.HouseholdText {
  display: inline;
  max-width: 64%;
  padding: 0;
  color: #fff;
  font-weight: 400;
  font-size: 0.87rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.falsifTips {
  font-style: normal;
  display: block;
  text-align: center;
}
.clear {
  clear: both;
}
.itemWrap {
  width: 100%;
  float: left;
  padding: 10% 0;
  padding-top: 0;
  margin-bottom: 4%;
  background: #fff;
}

.userInfo {
  top: 19%;
  width: 45%;
  height: 45%;
  position: absolute;
  right: 6%;
}
.userWrap {
  width: 100%;
  position: relative;
}
.userWrapText {
  position: absolute;
  top: 15%;
  left: 10%;
}
.userText {
  font-size: 0.87rem;
  color: #fff;
  line-height: 1.7rem;
}
.mint-radio-label {
  font-size: 0.875rem;
}

/* 用户协议 */
.userRadios {
  min-height: 48px;
  position: absolute;
  width: 100%;
  bottom: 4rem;
  overflow: hidden;
}
.userRadios >>> .mint-checklist-label {
  text-align: left;
  padding: 0;
}
.userRadios >>> .mint-cell-wrapper {
  padding: 0;
  display: inline-block;
}
.userRadios >>> .mint-checklist-title {
  margin: 5px;
}
.userTitle {
  text-align: center;
  line-height: 3.5rem;
  color: #333;
  font-size: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 0 3%;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 3rem;
}
.btnRange {
  width: 100%;
  position: absolute;
  bottom: 1rem;
}
.btnRange >>> .mint-button--normal {
  width: 39%;
  height: 3rem;
  border-radius: 2px;
}
.disagree {
  margin-right: 15%;
  border: 1px solid #dcdcdc;
  color: #595857;
}
.userClick {
  width: 9%;
  display: inline-block;
}
.userClick >>> .mint-cell-wrapper {
  background-image: none;
}
.userClick >>> .mint-cell:last-child {
  background-image: none;
}
.userDiv {
  width: 80%;
  display: inline-block;
  vertical-align: top;
  text-align: left;
  height: 35px;
  line-height: 35px;
}
.underline {
  font-style: normal;
  color: #1187df;
  word-break: break-word;
}
</style>
<style>
.mint-toast {
  z-index: 9999 !important;
}
.mint-msgbox-message {
  word-break: break-all;
}
.itemsText {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95%;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
}
</style>
<template>
  <div :class="{'my-bg':top == 'wj'?true:false, 'bg': isScorl }">
    <template v-if="top == 'wj'">
      <van-swipe :autoplay="10000" @change="onChangeIndex" duration="200">
        <van-swipe-item v-for="item in bgimgsArray" :key="item">
          <img style="width: 100%;" :src="require('@/assets/img/'+item.value)" @click="imgLocation(item)" />
          <template v-if="currentIndex==0">
            <a style="margin-left: 60%;position:absolute; z-index:4;top: 3%;right: 3%;font-size:1.4rem" @click="addhuhao()" :class="jiahao"></a>
            <div class="personInfo">
              <ul>
                <li class="Household">
                  <span>
                    <i class="iconfont icon-zhanghu"></i>
                  </span>户号：
                  <span class="HouseholdText">
                    <template v-if="binder && binder.hh">{{binder.hh}}</template>
                  </span>
                  <a style="margin-left: 5px;" @click="pull" :class="jiantou"></a>
                </li>
                <li v-if="address == 1">
                  <!-- 水司有些不显示户名 -->
                  <span>
                    <i class="iconfont icon-renyuanguanli"></i>
                  </span>户名：
                  <template v-if="binder && binder.bzmc">{{binder.bzmc}}</template>
                </li>
                <li class="Per-address">
                  <span>
                    <i class="iconfont icon-dizhi"></i>
                  </span>地址：
                  <template v-if="binder && binder.yhdz">{{binder.yhdz}}</template>
                </li>
                <li class="falsify">
                  <span>
                    <i class="iconfont icon-jiuyuanjiage"></i>
                  </span>当前欠费金额
                  <i class="falsifTips">(含违约金)</i>
                </li>
              </ul>
              <p class="personMoney">
                <template v-if="binder && binder.qfje != null">
                  <i class="t-Color">{{binder.qfje}}</i>
                </template>
                <template v-else>
                  <i class="t-Color">0</i>
                </template>元
              </p>
            </div>
            <template v-if="binder && binder.isjt==1">
              <!-- 是阶梯用户显示仪表盘 -->
              <div class="guage">
                <div class="guageText">
                  <div class="g-li first">
                    <p>一阶</p>
                    <span v-if="binder && binder.jt1dj">{{binder.jt1dj}}元</span>
                  </div>
                  <div class="g-li second">
                    <p>二阶</p>
                    <span v-if="binder && binder.jt2dj">{{binder.jt2dj}}元</span>
                  </div>
                  <div class="g-li Third">
                    <p>三阶</p>
                    <span v-if="binder && binder.jt3dj">{{binder.jt3dj}}元</span>
                  </div>
                  <div class="guageWrap">
                    <img class="hand handimg" v-bind:style="{'transform':'rotate('+deg + 'deg)'}" src="@/assets/img/pointer.png" />
                  </div>
                </div>
                <div class="beforewrap">
                  <div class="beforText">
                    当前行至：
                    <i class="t-Color" v-if="binder && binder.dqxz">{{binder.dqxz}}</i>
                    <!-- 字段暂时没有 -->
                  </div>
                  <div class="beforText">
                    本期水量：
                    <template v-if="binder&&binder.isjt == 1">
                      <i class="t-Color">{{binder.bqsl}}</i> 吨
                    </template>
                    <template v-else>
                      <i class="t-Color">0</i>吨
                    </template>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <!-- 否则显示文字 -->
              <div class="userInfo">
                <div class="userWrap">
                  <img src="@/assets/img/topUser_bg.png" />
                  <div class="userWrapText">
                    <p class="userText">
                      水费单价：
                      <i class="t-Color" v-if="binder && binder.sfdj">{{binder.sfdj}}</i>元
                    </p>
                    <p class="userText">
                      当前行至：
                      <i class="t-Color" v-if="binder && binder.dqxz">{{binder.dqxz}}</i>
                    </p>
                    <p class="userText">
                      本期水量：
                      <i class="t-Color" v-if="binder && binder.bqsl">{{binder.bqsl}}</i> 吨
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </van-swipe-item>
      </van-swipe>
    </template>
    <template v-else>
      <!--春节风格，最外层div加上class="floorDiv"-->
      <div class="blue">
        <!-- <div class="title">
		首页
        </div>-->
        <a style="position:absolute; z-index:4;margin-top: 6%; margin-left: 87%;font-size:1.3rem" @click="addhuhao()" :class="jiahao"></a>
        <ul class="tipsbox" style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;width: 100%;">
          <li class="Household">
            <span>
              <i class="iconfont icon-zhanghu"></i>
            </span>户号：
            <span class="HouseholdText">
              <template v-if="binder && binder.hh">{{binder.hh}}</template>
            </span>
            <a style="margin-left: 5px;" @click="pull" :class="jiantou"></a>
          </li>
          <template v-if="address == 1">
            <li style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;">
              <i class="iconfont icon-dizhi"></i>
              户名：
              <template v-if="binder && binder.bzmc">{{binder.bzmc}}</template>
            </li>
          </template>
          <li style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;">
            <i class="iconfont icon-renyuanguanli"></i>
            地址：
            <template v-if="binder && binder.yhdz">{{binder.yhdz}}</template>
          </li>
          <li>
            <i>
              <img src="@/assets/img/qianfei.png" alt />
            </i>
            当前欠费金额(含违约金)：
            <h2>
              <template v-if="binder && binder.qfje != null">{{binder.qfje}}</template>
              <template v-else>0</template>元
            </h2>
          </li>
        </ul>
        <template v-if="binder && binder.isjt && binder.isjt == 1">
          <div class="line" style="text-align: -webkit-center;">
            <div style="line-height:1em;width: 80%;margin-top: 5px;">
              <div ref="downpng" :style="downpng">
                <img src="@/assets/img/down.png" />
              </div>
              <div style="width:100%;clear:both">
                <div class="back">
                  <div style="position: absolute;margin-left:27%;border-left: 1px solid white;height: 10px;"></div>
                  <div style="position: absolute;margin-left: 54%;border-left: 1px solid white;height: 10px;"></div>
                </div>
                <div style="font-size: 10px;">{{sign}}</div>
                <!--春节风格，显示阶梯信息的div，style属性加上color: #080000;"-->
                <span>&nbsp;</span>
              </div>
            </div>
          </div>
        </template>
        <!-- <a @click="tip" v-html="mymessage"></a> -->

      </div>
      <div class="total">
        <div class="bl" @click="tip()">
          <p>
            <template v-if="binder && binder.qfbs">{{binder.qfbs}}</template>
            <template v-else>0</template>
            <b>欠费笔数</b>
          </p>
        </div>
        <div class="orange" @click="tip()">
          <p>
            <template v-if="binder && binder.znj">{{binder.znj}}</template>
            <template v-else>0</template>元
            <b>违约金</b>
          </p>
        </div>
        <div class="green" @click="imgLocation(item)">
          <p>
            <template v-if="binder && binder.yskye">{{binder.yskye}}</template>
            <template v-else>0</template>元
            <b>预存金额</b>
          </p>
        </div>
      </div>
    </template>
    <mt-popup v-model="popupVisible2" :closeOnClickModal="false" class="mint-popup" popup-transition="popup-fade">
      <div class="modeltitle">绑定手机号</div>
      <div class="modelBox">
        <!--手机号-->
        <div class="modelItem">
          <span class="modelText">手机号：</span>
          <div class="modelIput">
            <van-field v-model="phone" center clearable type="number" placeholder="请输入手机号" style="border: 0px solid black; width: 100%; font-size: 12px; padding-left: 0;"></van-field>
          </div>
        </div>
        <!-- <hr style="height: 1px;"/> -->
        <!--验证码-->
        <div class="codeItem">
          <div class="codeInput">
            <span class="modelText">验证码：</span>
            <van-field v-model="code" center placeholder="请输入验证码" style="font-size:12px;width:43%;display: inline-table;padding:10px 0;"></van-field>
            <div class="codeButton">
              <mt-button size="small" :disabled="btnabble" plain type="primary" style="border:none" @click="sendSmsCode">{{btntext}}</mt-button>
            </div>
          </div>
        </div>

        <!-- <hr style="height: 1px;"/> -->
        <!--按钮-->
        <div class="suClick">
          <button @click="commit2">确 定</button>
        </div>
      </div>
    </mt-popup>
    <!-- 手机绑定弹出框 end -->
    <mt-popup v-model="popupVisible3" :closeOnClickModal="true" class="mint-popup" popup-transition="popup-fade" style="width:95%;min-height:25%;border-radius:2px;overflow: scroll;">
      <dl class="userlist" style="padding-bottom: 1em;margin-top:0;">
        <mt-radio title="户号列表" v-model="checkBinder" :v-html="label" :options="items" @change="commit3"></mt-radio>
      </dl>
      <!-- <span
        class="mint-datetime-action mint-datetime-confirm"
        style="right: 0;bottom: 0;"
        @click="commit3"
      >确定</span>-->
    </mt-popup>
    <div class="clear"></div>
    <div class="activityWrap" v-if="activityArray&&activityArray.length>0">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
        <van-swipe-item v-for="(item,index) in activityArray" :key="index" @click="activity(item)">
          <img class="logoBox" :src="item.logo" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="itemWrap">
      <ul class="itemslist">
        <template v-for="m in menus">
          <li @click="serviceType(m)" :key="m.id" v-if="m.pno == null && m.menuclass != 'HIDE'">
            <img :src="require('@/assets/images/'+m.icon+'.png')" alt />
            <p class="itemsText">{{m.menuname}}</p>
          </li>
        </template>
      </ul>
      <div class="help">
        <template v-if="this.$store.state.setting&&this.$store.state.setting.value == 1">
          <a @click="setting">
            <i class="iconfont icon-iconfontwenhao1"></i>设置
          </a>
        </template>
        <template v-if="mymessage != ''">
          <div style="text-align: center;font-size:0.75rem;color:#989898">
            {{mymessage}}
            <b>
              <a :href="telhref">{{tel}}</a>
            </b>
          </div>
        </template>
      </div>
    </div>
    <div class="clear"></div>
    <mt-popup v-model="popupVisible4" :closeOnClickModal="false" class="mint-popup" popup-transition="popup-fade" style="width:95%;height:87%;border-radius:2px;overflow: scroll;text-align: -webkit-center;z-index: 30000;top: 45.8%;">
      <div class="modelWrap">
        <div v-if="currentmenu.menuclass!='MRMENU'" class="modelTitleContent" :class="{ 'modelTitleContenthasRadios': currentmenu.treatytitle&&currentmenu.menuclass!='MRMENU' }" v-html="busscontent"></div>
        <template v-if="currentmenu.treatytitle&&currentmenu.menuclass!='MRMENU'">
          <div class="userRadios">
            <div class="userClick">
              <mt-checklist v-model="agreement" @change="disagreement" align="left" :options="['']">
              </mt-checklist>
            </div>
            <div class="userDiv">我已经详细阅读并同意<i class="underline" @click="userDiv">{{currentmenu.treatytitle}}</i></div>
          </div>
        </template>
        <div class="btnRange">
          <mt-button plain class="disagree" type="default" @click="disagree">
            <p class="fontBtn">拒绝</p>
          </mt-button>
          <mt-button type="primary" @click="agreeType()">
            <p class="fontBtn">同意</p>
          </mt-button>
        </div>
      </div>
    </mt-popup>
    <mt-popup v-model="popupVisible6" :closeOnClickModal="false" class="mint-popup" popup-transition="popup-fade" style="width:95%;height:87%;border-radius:2px;overflow: scroll;text-align: -webkit-center;z-index: 30001;top: 45.8%;">
      <div class="userTitle">
        <i class="fl iconfont icon-jiantou5" style="color: #4097f8;" @click="closetreaty()"></i>
        用户协议
        <div class="fr">
        </div>
      </div>
      <span v-html="currentmenu.treaty"></span>
    </mt-popup>
    <mt-popup v-model="popupVisible5" position="right" closeOnClickModal="false" style="width:100%;height:100%;z-index: 300;">
      <div class="usertop">
        <div class="title">
          <i class="fl iconfont icon-jiantou5" @click="onClickLeft2"></i>
          {{currentmenu.title}}
          <div class="fr"></div>
        </div>
      </div>
      <!-- <div v-html="artcontent"  id="show-iframe" scrolling=auto style="padding-bottom: 170px;"></div> -->
      <div id="iframe-out" class="outframin">
        <iframe :src="url" id="show-iframe" name="showHere" frameborder="0" style="height: 580px;" class="iniframe"></iframe>
      </div>
    </mt-popup>
    <div class="clear"></div>
  </div>
</template>
<style scoped>
.logoBox {
  max-width: 100% !important;
  vertical-align: top;
  max-height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.activityWrap {
  margin: 0.5rem auto;
  width: 97%;
  height: 5.4rem;
  overflow: hidden;
}
.back {
  height: 10px;
  width: 100%;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7fff00),
    to(red)
  );
}
.outframin {
  padding-bottom: 55px;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: static;
  background: #ffffff;
}

.iniframe {
  width: 100%;
  padding-bottom: 10px;
  min-height: calc(100% + 1px);
}
/* myphone */
.modeltitle {
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: #26a2ff;
  padding: 10px 0 0 0;
  height: 48px;
  line-height: 48px;
  font-weight: 500;
}
.mint-popup {
  width: 90%;
  border-radius: 10px;
}
.modelBox {
  margin-top: 5%;
  margin-bottom: 5%;
}
.modelItem,
.codeItem {
  margin: 0 auto;
  border: 1px solid #26a2ff;
  border-radius: 4px;
  width: 85%;
  font-size: 0;
}
.modelText {
  font-size: 12px;
  display: inline-table;
  width: 21%;
  text-align: right;
}
.modelIput {
  display: inline-block;
  width: 75%;
}
.codeItem {
  margin-top: 5%;
  display: table;
}
.codeInput {
  width: 100%;
  display: inline-table;
  border-radius: 5px;
}
.codeButton {
  width: 35%;
  display: inline-table;
  text-align: right;
}
.suClick {
  text-align: center;
  width: 100%;
}
.suClick button {
  width: 84%;
  border: none;
  margin: 20px auto;
  background: #26a2ff;
  color: #fff;
  height: 44px;
  font-size: 12px;
  line-height: 44px;
  border-radius: 4px;
}
.suClick button:hover {
  cursor: pointer;
  background: #1187df;
}
.codeImport {
  padding-left: 11px;
}
.mint-button--small {
  font-size: 12px;
}
.mint-button--small {
  padding: 0;
}
</style>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import {
  Indicator,
  MessageBox,
  Popup,
  Button,
  Toast,
  Radio,
  Checklist
} from 'mint-ui'
import {
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  Field
} from 'vant'

Vue.component(Checklist.name, Checklist)
Vue.use(Cell).use(CellGroup)
Vue.use(Tabbar).use(TabbarItem)
Vue.component(Radio.name, Radio)
Vue.use(Vuex)
Vue.component(Popup.name, Popup)
Vue.component(Button.name, Button)
Vue.use(Field)
Vue.use(Swipe).use(SwipeItem)

export default {
  components: {},
  data() {
    return {
      isScorl: false, //用户协议出现的时候，禁止后面页面滚动，false没出现，true 出现
      agreement: false,
      top: '',
      Waterquantity: 0,
      deg: '',
      bgimgsArray: [], //轮播图数组
      RotationAngle: -46,
      mymessage: '', //热线message
      menus: [],
      binder: {}, //当前户号
      binders: [], //户号列表
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      popupVisible5: false,
      popupVisible6: false,
      checkBinder: '',
      bindkey: '',
      phone: '',
      cstUserChannel: {},
      source: '',
      fromuserid: '',
      items: [],
      code: '',
      btntext: '获取验证码',
      btnabble: false,
      jiantou: 'iconfont icon-jiantouyou',
      jiahao: 'iconfont icon-jiahao01',
      HhInfo: [],
      map: '', //配置参数
      telhref: '',
      protocol: '',
      busscontent: '',
      currentmenu: '',
      downpng: '',
      sign: '',
      address: '',
      tel: '',
      needPhone: '',
      bindType: '',
      title: '',
      url: '',
      defaultBind: '',
      currentTitle: '',
      count: 0,
      currentIndex: 0,
      isPhoneObj: {},
      urlHh: '', //二维码扫描户号
      fDataJson: {}, //全局配置
      activityArray: [], //活动数组
      busHandleBeforeRemind: {}, //控制先弹出空户须知还是绑定用户以及欠费检查
      label:null
    }
  },
  computed: {
    mapItems() {
      return this.$store.state.mapItems
    }
  },
  mounted() {
    this.$store.commit('setinterceptor', 1)
    this.$store.commit('setshow', 1)
    Vue.nextTick(() => {
      Indicator.close()
      if (this.mapItems != null && Object.keys(this.mapItems).length > 1) {
        this.init()
      }
    })
    this.init()
    this.isPhoneObj = this.$store.state.isPhone
    let tokenValue = sessionStorage.getItem('token')
    if (this.isPhoneObj.needPhone && !tokenValue) {
      this.popupVisible2 = true
    }
    if (this.$store.state.binder != null || this.$store.state.binder != '') {
      //假如当前选择户号不为空的时候
      this.binder = this.$store.state.binder
      this.checkBinder = this.$store.state.binder
    } else {
      if (
        this.$store.state.binders &&
        this.$store.state.binders.length > 1 &&
        this.$store.state.defaultkey != null
      ) {
        this.$store.state.binders.forEach(element => {
          if (this.$store.state.defaultkey == element.hh) {
            this.binder = element
            this.checkBinder = this.binder
            this.$store.commit('setBinder', this.binder)
          }
          if (!this.binder) {
            //默认户号不存在
            this.binder = this.$store.state.binders[0]
          }
        })
      } else {
        this.binder = this.$store.state.binders[0]
      }
    }
    //---------菜单跳转处理-----------
    this.querymenuid = this.$route.query.menuid

    if (this.querymenuid && this.querymenuid != '') {
      if (this.querymenuid == 'bindlist') {
        this.$router.push('/binderlist')
      } else if (this.querymenuid == 'index') {
        this.$router.push('/')
      }
      let param = {
        menuid: this.querymenuid,
        timestamp: new Date().getTime()
      }
      this.$http
        .post('/mobile/menu/getMenuByid', null, { params: param })
        .then(function(response) {
          if (response.body.status == 1) {
            this.service(response.body.content)
          }
        })
    }
  },
  methods: {
    activity(data) {
      if (data.pagetype == 'MENU') {
        let param = {
          menuid: data.pageaddress,
          timestamp: new Date().getTime()
        }
        this.$http
          .post('/activity/config?menuid=' + data.pageaddress)
          .then(response => {
            if (response.body.status == 1) {
              this.$http
                .post('/mobile/menu/getMenuByid', null, { params: param })
                .then(function(response) {
                  if (response.body.status == 1) {
                    this.serviceType(response.body.content)
                  }
                })
            } else {
              MessageBox.alert(response.body.message)
                .then(action => {})
                .catch(err => {})
            }
          })
      } else {
        location.href = data.pageaddress
      }
    },
    disagreement() {
      //   if (this.agreement) {
      //     this.popupVisible6 = true
      //   }
    },
    userDiv() {
      var url = this.currentmenu.treaty || ''
      if (url && url.indexOf('http') == -1) {
        this.popupVisible6 = true
      } else {
        window.open(url)
      }
    },
    closetreaty() {
      this.popupVisible6 = false
    },
    closeModel(event) {
      //   console.log('event', event)
    },
    onChangeIndex(index) {
      this.currentIndex = index
    },
    imgLocation(item) {
      if (this.count >= 10) {
        if (this.count % 2 == 0) {
          //   eruda.init()
        } else {
          return
        }
      }
      this.count++
      if (!item || !item.text) {
        return
      }
      let ds = item.text
      if (item.text[0] == 'http') {
        this.url = item.text[1]
        this.currentTitle = item.text[2]
        this.popupVisible5 = true
      }
      if (item.text[0] == 'menuid') {
        this.$store.commit('setmenuidp', item.text[1]) //传递父级菜单id
        this.$store.commit('setcurrentMeutitle', item.text[2]) //传递菜单name
        this.$router.push('/middle')
      }
      if (item.text[0] == 'articles') {
        this.$store.commit('setcurrentMenuId', item.text[1]) //传递菜单id
        this.$router.push('/articleMiddle')
      }
      if (item.text[0] == 'form') {
        this.$store.commit('setbussData', null) //修改数据
        this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
        this.$router.push('/form')
      }
      if (item.text[0] == 'url') {
        this.url = '/netbus/notice/showHtml?fileId=' + item.text[1]
        this.currentTitle = item.text[2]
        this.popupVisible5 = true
      }
    },
    onClickLeft2() {
      this.$store.commit('setshow', 1)
      this.popupVisible5 = false
      Vue.nextTick(() => Indicator.close())
    },
    pushBinders() {
      this.items = []
      if (this.binders != null) {
        for (let i = 0; i < this.binders.length; i++) {
          var bin = {
            label:
              '户号：' +
              this.binders[i].hh +
              '\n' +
              '户名：' +
              this.binders[i].bzmc,
            value: this.binders[i]
          }
          this.items.push(bin)
        }
      }
    },
    getbinder() {
      Indicator.close()
      this.$http.post('/mobile/info').then(function(response) {
        if (response.body.status == 1) {
          this.map = response.body.mapItems.map //系统默认参数
          if (response.body.mapItems.user != null) {
            this.$store.commit(
              'setdefaultkey',
              response.body.mapItems.user.defaultkey
            )
          }
          this.address = this.fDataJson.address
          this.tel = this.fDataJson.tel //手机号码
          this.bindType = this.map.bindType.value
          this.mymessage = this.fDataJson.pagename
          this.telhref = 'tel:' + this.tel
          this.top = this.fDataJson.top

          this.binders = response.body.mapItems.binders
          this.pushBinders()
          this.source = response.body.mapItems.source
          this.cstUserChannel = response.body.mapItems.cstUserChannel
          this.fromuserid = response.body.mapItems.fromuserid

          if (response.body.mapItems.cstUserChannel) {
            this.$store.commit('setCustid', this.cstUserChannel.custid)
            this.$store.commit('setBinders', response.body.mapItems.binders)
            this.$store.commit(
              'setcstUserChannel',
              response.body.mapItems.cstUserChannel
            )
          }

          if (
            this.$store.state.binders &&
            this.$store.state.binders.length > 0
          ) {
            //多条
            if (
              this.$store.state.binders.length > 1 &&
              this.$store.state.defaultkey != null
            ) {
              this.$store.state.binders.forEach(element => {
                if (this.$store.state.defaultkey == element.hh) {
                  this.binder = element
                } else {
                  this.binder = this.$store.state.binders[0]
                }
              })
            } else {
              this.binder = this.$store.state.binders[0]
            }
            this.checkBinder = this.binder
            this.$store.commit('setBinder', this.binder)
            this.getHhInfo(this.$store.state.binder.hh)
            this.changesign()
            this.TopRotate()
          } else {
            if (
              !this.$store.state.cstUserChannel &&
              !this.$store.state.cstUserChannel.custid &&
              this.needPhone == 1
            ) {
              MessageBox.confirm('请输入手机号进行关联!', {
                showCancelButton: false,
                closeOnClickModal: false
              }).then(action => {
                this.popupVisible2 = true
              })
            } else {
              // 余杭
              // if( this.$store.state.showMessage == 1 ){
              // MessageBox.confirm('亲，走我们去绑定户号？',{
              // 	confirmButtonText:'好的，走',
              //     cancelButtonText:'哼！不去。。'
              // }).then(action => {
              // this.addHH( this.bindType);
              // }).catch(err => {
              // 	this.$store.commit('setshowMessage',0);
              // 	this.message == 'false';
              // })
              // }
            }
          }
        }
      })
    },
    TopRotate() {
      let degInit = -46
      this.Waterquantity =
        (this.binder.jt1sl + this.binder.jt2sl + this.binder.jt3sl) * 1
      if (this.binder.jt1sl > 0 && this.binder.jt2sl == 0) {
        //第一阶段
        this.deg = degInit + this.binder.jt1sl / this.binder.jt1 * 44
      } else if (
        this.binder.jt1sl > 0 &&
        this.binder.jt2sl > 0 &&
        this.binder.jt3sl == 0
      ) {
        //第二阶段
        let num1 =
          (this.binder.jt1sl + this.binder.jt2sl) /
            (this.binder.jt1 + this.binder.jt2) *
          134
        this.deg = degInit + num1
      } else if (this.binder.jt3sl > 0) {
        if (this.binder.jt3sl > 9999) {
          //大于9999，就指向最后的224度
          let num3 = 224
          this.deg = num3
        } else {
          let num2 = this.binder.jt3sl / 9999 * 90
          this.deg = 140 + num2
        }
        //第三阶段
      }
    },
    changesign() {
      if (this.binder.jt1sl > 0) {
        this.downpng =
          'width:10px;height:10px;float: left;margin-bottom: 3px;margin-left:' +
          (this.binder.jt1sl / this.binder.jt1 * 27 +
            this.binder.jt2sl / this.binder.jt2 * 27) +
          '%'
      } else {
        this.downpng =
          'width:10px;height:10px;float: left;margin-bottom: 3px;margin-left:0'
      }
      if (
        (this.binder.jt1sl + this.binder.jt2sl) /
          (this.binder.jt1 + this.binder.jt2) >
          this.binder.jt1sl / (this.binder.jt1 + this.binder.jt2) &&
        this.binder.jt3sl == 0
      ) {
        this.sign =
          '现处第二阶梯,本年阶梯为:一阶:' +
          this.binder.jt1sl +
          '/' +
          this.binder.jt1 +
          ',' +
          '二阶:' +
          this.binder.jt2sl +
          '/' +
          this.binder.jt2 +
          ',' +
          '三阶:' +
          this.binder.jt3sl
      }
      if (this.binder.jt2sl == 0 && this.binder.jt3sl == 0) {
        this.sign =
          '现处第一阶梯,本年阶梯为:一阶:' +
          this.binder.jt1sl +
          '/' +
          this.binder.jt1 +
          ',' +
          '二阶:' +
          this.binder.jt2sl +
          '/' +
          this.binder.jt2 +
          ',' +
          '三阶:' +
          this.binder.jt3sl
      }
      if (this.binder.jt3sl > 0) {
        this.sign =
          '现处第三阶梯,本年阶梯为:一阶:' +
          this.binder.jt1sl +
          '/' +
          this.binder.jt1 +
          ',' +
          '二阶:' +
          this.binder.jt2sl +
          '/' +
          this.binder.jt2 +
          ',' +
          '三阶:' +
          this.binder.jt3sl
      }
    },
    tip() {
      if (this.binder != null && this.binder.qfje > 0) {
        MessageBox.confirm('不好意思，你的户号已欠费请前去缴费!', {
          confirmButtonText: '缴费',
          cancelButtonText: '等会儿再去'
        })
          .then(action => {
            this.$router.push('/pay')
          })
          .catch(err => {})
      }
    },
    getHhInfo(key) {
      if (key != null) {
        this.HhInfo = []
        let param = {
          hh: key
        }
        this.mymessage = this.$store.state.mymessage
      }
    },
    checkBinderSize() {
      if (
        this.$store.state.binders != null &&
        this.$store.state.binders.length > 0
      ) {
        MessageBox.confirm('请选择户号!')
          .then(action => {
            this.pushBinders()
            this.popupVisible3 = true
          })
          .catch(err => {
            Vue.nextTick(() => Indicator.close())
          })
      } else {
        MessageBox.confirm('请先绑定户号!')
          .then(action => {
            if (this.bindType == 'BIND') {
              this.addHH(this.currentmenu.menuclass)
            }
            if (this.bindType == 'IBIND') {
              this.$router.push('/binderlist')
            }
          })
          .catch(err => {
            Vue.nextTick(() => Indicator.close())
          })
      }
    },
    agreeType() {
      if (this.busHandleBeforeRemind) {
        if (this.busHandleBeforeRemind.value == 'bind') {
          this.agree()
        } else if (this.busHandleBeforeRemind.value == 'notice') {
          this.nextTip()
        } else {
          this.agree()
        }
      } else {
        this.agree()
      }
    },
    serviceType(menu) {
      if (this.busHandleBeforeRemind) {
        if (this.busHandleBeforeRemind.value == 'bind') {
          this.service(menu)
        } else if (this.busHandleBeforeRemind.value == 'notice') {
          this.notice(menu)
        } else {
          this.service(menu)
        }
      } else {
        this.service(menu)
      }
    },
    service(menu) {
      //用户是否绑定--业务检查--用户协议
      this.currentmenu = menu
      if (this.currentmenu.needbind == '1') {
        if (this.$store.state.binder != null) {
          if (
            this.currentmenu.needcheck != null &&
            this.currentmenu.needcheck != '0'
          ) {
            //是否允许业务检查，1是，0否，
            let param = {
              hh: this.$store.state.binder.hh,
              menuid: this.currentmenu.id
            }
            this.$http
              .post('/mobile/cust/checkHhArrearage', null, { params: param })
              .then(response => {
                if (response.body.status == 1) {
                  //console.log('欠费配置：', response.body.content)
                  let arrearageConfig = response.body.content
                  if (arrearageConfig.code == 0) {
                    if (arrearageConfig.handlecode == '0') {
                      //console.log('欠费控制：0 都可以办理')
                      //0 都可以办理
                      this.busscontent = menu.busscontent
                      if (
                        this.busscontent != null &&
                        this.currentmenu.menuclass != 'MRMENU' //并且不是自抄表菜单
                      ) {
                        this.popupVisible4 = true
                      } else {
                        this.agree()
                      }
                    } else if (arrearageConfig.handlecode == '1') {
                      //console.log('欠费控制：1 必须交费才可以办理')
                      //1 必须交费才可以办理
                      var msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      }).then(action => {
                        Vue.nextTick(() => Indicator.close())
                        this.$router.push('/pay')
                      })
                    } else if (arrearageConfig.handlecode == '2') {
                      //console.log('欠费控制：2 提醒但是可以继续')
                      //2 提醒但是可以继续
                      var msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      })
                        .then(action => {
                          Vue.nextTick(() => Indicator.close())
                          this.$router.push('/pay')
                        })
                        .catch(reason => {
                          this.busscontent = menu.busscontent
                          if (
                            this.busscontent != null &&
                            this.currentmenu.menuclass != 'MRMENU'
                          ) {
                            this.isScorl = true
                            this.popupVisible4 = true
                          } else {
                            this.agree()
                          }
                        })
                      //首先弹出缴费页面，用户点击缴费去缴费页，点击稍后再去，再唤起弹出框
                      this.busscontent = menu.busscontent
                      //   if (this.busscontent != null) {
                      //     this.popupVisible4 = true
                      //   } else {
                      //     this.agree()
                      //   }
                    } else {
                      //未配置：缴费控制参数mobile.ui.arrearage.control
                      var msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      }).then(action => {
                        Vue.nextTick(() => Indicator.close())
                        this.$router.push('/pay')
                      })
                    }
                  } else if (arrearageConfig.code == 1) {
                    //该户号无欠费
                    this.busscontent = menu.busscontent
                    if (
                      this.busscontent != null &&
                      this.currentmenu.menuclass != 'MRMENU'
                    ) {
                      this.isScorl = true
                      this.popupVisible4 = true
                    } else {
                      this.agree()
                    }
                  }
                } else {
                  MessageBox('提示', response.body.message)
                }
              })
          } else {
            this.busscontent = menu.busscontent
            if (
              this.busscontent != null &&
              this.currentmenu.menuclass != 'MRMENU'
            ) {
              this.isScorl = true
              this.popupVisible4 = true
            } else {
              this.agree()
            }
          }
        } else {
          this.checkBinderSize()
        }
      } else {
        this.busscontent = menu.busscontent
        if (
          this.busscontent != null &&
          this.currentmenu.menuclass != 'MRMENU'
        ) {
          this.isScorl = true
          this.popupVisible4 = true
        } else {
          this.agree()
        }
      }
    },
    notice(menu) {
      //菜单点击--用户须知--用户绑定--业务检查--进入菜单
      this.currentmenu = menu
      this.busscontent = menu.busscontent
      if (this.busscontent != null && this.currentmenu.menuclass != 'MRMENU') {
        this.isScorl = true
        this.popupVisible4 = true
      } else {
        this.nextTip()
      }
    },
    nextTip() {
      //类型为notice 的用户协议 同意按钮
      if (
        this.currentmenu &&
        this.currentmenu.treaty &&
        this.agreement != true &&
        this.currentmenu.menuclass != 'MRMENU'
      ) {
        Toast({
          message: '请先同意用户须知~',
          className: 'userKnow',
          duration: 1000
        })
        return
      }
      this.popupVisible4 = false
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      if (this.currentmenu.needbind == '1') {
        //需要户号
        if (this.$store.state.binder != null) {
          if (
            this.currentmenu.needcheck != null &&
            this.currentmenu.needcheck != '0'
          ) {
            //是否允许业务检查，1是，0否，
            let param = {
              hh: this.$store.state.binder.hh,
              menuid: this.currentmenu.id
            }
            this.$http
              .post('/mobile/cust/checkHhArrearage', null, { params: param })
              .then(response => {
                if (response.body.status == 1) {
                  //console.log('欠费配置：', response.body.content)
                  let arrearageConfig = response.body.content
                  if (arrearageConfig.code == 0) {
                    if (arrearageConfig.handlecode == '0') {
                      //console.log('欠费控制：0 都可以办理')
                      //0 都可以办理
                      this.enterMenu()
                    } else if (arrearageConfig.handlecode == '1') {
                      //console.log('欠费控制：1 必须交费才可以办理')
                      //1 必须交费才可以办理
                      var msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      }).then(action => {
                        Vue.nextTick(() => Indicator.close())
                        this.$router.push('/pay')
                      })
                    } else if (arrearageConfig.handlecode == '2') {
                      //console.log('欠费控制：2 提醒但是可以继续')
                      //2 提醒但是可以继续
                      let msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      })
                        .then(action => {
                          Vue.nextTick(() => Indicator.close())
                          this.$router.push('/pay')
                        })
                        .catch(reason => {
                          this.enterMenu()
                        })
                      //首先弹出缴费页面，用户点击缴费去缴费页，点击稍后再去，再唤起弹出框
                      this.busscontent = this.currentmenu.busscontent
                    } else {
                      //未配置：缴费控制参数mobile.ui.arrearage.control
                      let msgstr = response.body.content.message
                      MessageBox.confirm(msgstr, {
                        confirmButtonText: '缴费',
                        cancelButtonText: '等会儿再去'
                      }).then(action => {
                        Vue.nextTick(() => Indicator.close())
                        this.$router.push('/pay')
                      })
                    }
                  } else if (arrearageConfig.code == 1) {
                    //该户号无欠费
                    this.enterMenu()
                  }
                } else {
                  MessageBox('提示', response.body.message)
                }
              })
          } else {
            this.enterMenu()
          }
        } else {
          //用户绑定弹出框
          this.checkBinderSize()
        }
      } else {
        this.enterMenu()
      }
    },
    agree() {
      //bind/默认类型：用户须知--用户协议--进入对应的菜单
      if (
        this.currentmenu &&
        this.currentmenu.treaty &&
        this.agreement != true &&
        this.currentmenu.menuclass != 'MRMENU'
      ) {
        Toast({
          message: '请先同意用户须知~',
          className: 'userKnow',
          duration: 1000
        })
        return
      }
      this.popupVisible4 = false
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.enterMenu()
    },
    enterMenu() {
      //菜单跳转处理
      if (this.currentmenu.needbind == '1') {
        //需要户号
        if (this.$store.state.binder != null) {
          if (this.$store.state.binder.hh != null) {
            // 模板类型菜单
            if (this.currentmenu.menuclass == 'TPL') {
              this.$store.commit('setbussData', null) //修改数据
              this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
              this.$router.push('/form')
            }
            // 连接类型菜单
            if (this.currentmenu.menuclass == 'URL') {
              if (this.currentmenu.menuname == '营业网点') {
                this.$router.push('/bussOutlets')
                this.$store.commit('setmenuidp', this.currentmenu.id) //传递父级菜单id
                this.$store.commit(
                  'setcurrentMeutitle',
                  this.currentmenu.menuname
                ) //传递菜单name
              } else {
                // this.url = '',
                // this.$store.commit('setshow',0)
                // this.popupVisible5 = true
                // this.url = this.currentmenu.arg
                this.$store.commit('setshow', 0)
                this.$store.commit('setmenuidp', this.currentmenu.id)
                this.$router.push('/url')
              }
            }
            // 户号绑定列表
            if (this.currentmenu.menuclass == 'SMS') {
              this.$router.push('/binderlist')
            }
            // 文章列表类型文章
            if (this.currentmenu.menuclass == 'ARTICLES') {
              this.url =
                '/netbus/notice/showHtml?fileId=' + this.currentmenu.arg
              this.popupVisible5 = true
            }
            // 单页文章类型文章
            if (this.currentmenu.menuclass == 'ARTICLE') {
              this.url =
                '/netbus/notice/showHtml?fileId=' + this.currentmenu.arg
              this.popupVisible5 = true
            }
            // 列表类型菜单
            if (this.currentmenu.menuclass == 'LIST') {
              this.$store.commit('setListData', this.currentmenu)
              this.$router.push('/list')
            }
            // 电子发票类型菜单
            if (this.currentmenu.menuclass == 'DZFP') {
              this.$router.push('/electronic')
            }
            //mis电子发票
            if (this.currentmenu.menuclass == 'MISDZFP') {
              this.$router.push('/miselectronic')
            }
            // 水费账单类型菜单
            if (this.currentmenu.menuclass == 'BILL') {
              this.$store.commit('setListData', this.currentmenu)
              this.$router.push('/waterBill')
            }
            // 不可用类型菜单
            if (this.currentmenu.menuclass == 'DISABLE') {
              MessageBox.confirm(this.currentmenu.arg)
                .then(action => {
                  Vue.nextTick(() => Indicator.close())
                })
                .catch(err => {
                  Vue.nextTick(() => Indicator.close())
                })
            }
            // 支付
            if (this.currentmenu.menuclass == 'PAY') {
              this.$router.push('/pay')
            }
            // 二级菜单
            if (this.currentmenu.menuclass == 'MENU') {
              this.$store.commit('setmenuidp', this.currentmenu.id) //传递父级菜单id
              this.$store.commit(
                'setcurrentMeutitle',
                this.currentmenu.menuname
              ) //传递菜单name
              this.$router.push('/middle')
            }
          } else {
            this.checkBinderSize()
          }
        } else {
          this.checkBinderSize()
        }

        //水量分析
        if (this.currentmenu.menuclass == 'WATER') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/trendLine')
        }
        //自抄表
        if (this.currentmenu.menuclass == 'MRMENU') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/selfReading') //跳转
        }
        //拆换记录
        if (this.currentmenu.menuclass == 'REPLACEMENTRECORD') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/replacementRecord') //跳转
        }
        //水流信息
        if (this.currentmenu.menuclass == 'WATERFLOWINFO') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/waterflowinfo') //跳转
        }
        //活动菜单
        if (this.currentmenu.menuclass == 'ACTIVITYMENU') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$store.commit('setcurrentMeutitle', this.currentmenu.menuname)
          this.$router.push('/activity') //跳转
        }
      }
      //第三方连接
      if (this.currentmenu.needbind == '0') {
        if (this.currentmenu.menuclass == 'THIRDPARTURL') {
          Vue.nextTick(() => Indicator.close())
          location.href = this.currentmenu.arg
        }

        // 模板类型菜单
        if (this.currentmenu.menuclass == 'TPL') {
          this.$store.commit('setbussData', null) //修改数据
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/form')
        }
        // 连接类型菜单
        if (this.currentmenu.menuclass == 'URL') {
          if (this.currentmenu.menuname == '营业网点') {
            this.$router.push('/bussOutlets')
            this.$store.commit('setmenuidp', this.currentmenu.id) //传递父级菜单id
            this.$store.commit('setcurrentMeutitle', this.currentmenu.menuname) //传递菜单name
          } else {
            // this.url = '',
            // this.$store.commit('setshow',0)
            // this.popupVisible5 = true
            // this.url = this.currentmenu.arg
            this.$store.commit('setshow', 0)
            this.$store.commit('setmenuidp', this.currentmenu.id)
            this.$router.push('/url')
          }
        }
        //缴费二维码展示EIGHTCODES
        if (this.currentmenu.menuclass == 'EIGHTCODES') {
          this.$router.push('/QRcode')
          //   this.$store.commit('setmenuidp', this.currentmenu.id) //传递父级菜单id
          //   this.$store.commit('setcurrentMeutitle', this.currentmenu.menuname) //传递菜单name
        }
        //支付
        if (this.currentmenu.menuclass == 'PAY') {
          // location.href="/getUrl?channel="+this.cstUserChannel.source+"&userid="+this.cstUserChannel.userid+"&billkey="+this.binder.hh;
          this.$router.push('/pay')
        }
        // 文章列表类型菜单
        if (this.currentmenu.menuclass == 'ARTICLES') {
          this.$store.commit('setcurrentMenuId', this.currentmenu.id) //传递菜单id
          this.$router.push('/articleMiddle')
        }
        // 单页文章类型菜单
        if (this.currentmenu.menuclass == 'ARTICLE') {
          this.url = '/netbus/notice/showHtml?fileId=' + this.currentmenu.arg
          this.popupVisible5 = true
        }
        //不可用菜单
        if (this.currentmenu.menuclass == 'DISABLE') {
          MessageBox.confirm(this.currentmenu.arg)
            .then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            .catch(err => {
              Vue.nextTick(() => Indicator.close())
            })
        }
        //二级菜单
        if (this.currentmenu.menuclass == 'MENU') {
          this.$store.commit('setmenuidp', this.currentmenu.id) //传递父级菜单id
          this.$store.commit('setcurrentMeutitle', this.currentmenu.menuname) //传递菜单name
          this.$router.push('/middle')
        }
        //停水通知
        if (this.currentmenu.menuclass == 'NOTICE') {
          this.$router.push('/notice')
        }
        //电子合同
        if (this.currentmenu.menuclass == 'DZHT') {
          this.$router.push('/dzht')
        }
        //工程款缴费
        if (this.currentmenu.menuclass == 'GCKPAY') {
          this.$router.push('/projectPayment')
        }
        //银联支付
        if (this.currentmenu.menuclass == 'UNIONPAYMENT') {
          this.$store.commit('setListData', this.currentmenu)
          this.$store.commit('setcurrentMeutitle', this.currentmenu.menuname)
          this.$router.push('/engineeringPay')
        }
        //c进度查询
        if (this.currentmenu.menuclass == 'GCBZJD') {
          this.$store.commit('setListData', this.currentmenu)
          this.$router.push('/projectPayQuery')
        }
        //工程报装查询
        if (this.currentmenu.menuclass == 'PROJECTRECORD') {
          this.$store.commit('setListData', this.currentmenu)
          this.$router.push('/projectRecord')
        }
      }

      if (
        this.currentmenu.menuclass == 'BIND' ||
        this.currentmenu.menuclass == 'IBIND'
      ) {
        this.addHH(this.currentmenu.menuclass)
      }
    },
    disagree() {
      this.isScorl = false
      this.popupVisible4 = false
      this.agreement = false
    },
    pull() {
      this.checkBinder = this.$store.state.binder
      //   this.$store.commit('setBinder', this.binder)  //当前户号
      if (
        this.$store.state.binders != null &&
        this.$store.state.binders.length > 0
      ) {
        this.jiantou = 'iconfont icon-jiantouxia'
        this.binders = this.$store.state.binders
        this.pushBinders()
        this.popupVisible3 = true
      } else {
        MessageBox.confirm('亲，你未绑定任何户号，需要去绑定户号吗？', {
          confirmButtonText: '好的，走',
          cancelButtonText: '哼！不去。。'
        })
          .then(action => {
            this.addHH(this.bindType)
          })
          .catch(err => {})
      }
    },
    commit() {
      if (this.bindkey != '') {
        this.$http
          .post('/mobile/cust/bind', {
            phone: this.phone,
            custno: this.bindkey
          })
          .then(function(response) {
            if (response.body.status == 1) {
              this.binder = response.body.content
              this.$store.commit('setBinder', response.body.content)
              //this.$store.state.binder = response.body.content.misbinder;
              MessageBox.confirm('绑定成功！').then(action => {})
            } else {
              if (response.body.status == '00110') {
                MessageBox.confirm('手机号与注册手机号不符！').then(action => {
                  this.phone = ''
                })
              }
              if (response.body.status == '00112') {
                MessageBox.confirm('该户号已注销或不存在！').then(action => {
                  this.bindkey = ''
                })
              }
            }
          })
      } else {
        MessageBox.confirm('手机号和户号不能为空！').then(action => {})
      }
    },
    commit2() {
      if (this.phone != '' && this.code != '') {
        this.$http
          .post('/bindByPhone', {
            phone: this.phone,
            code: this.code,
            userappid: this.isPhoneObj.userid,
            source: this.isPhoneObj.source
          })
          .then(function(response) {
            if (response.body.status == 1) {
              Toast({
                message: '关联成功！',
                position: 'middle',
                duration: 2000
              })
              sessionStorage.setItem('token', response.body.content)
              this.flushData()
              this.popupVisible2 = false
              this.getbinder()
            } else {
              if (response.body.status == '00109') {
                MessageBox.confirm(
                  '该手机号已在平台注册,请重新输入手机号！'
                ).then(action => {
                  this.phone = ''
                })
              }
              if (response.body.status == '00110') {
                MessageBox.confirm('手机号与注册手机号不符！').then(action => {
                  this.phone = ''
                })
              }
              if (response.body.status == '00211') {
                MessageBox.confirm(response.body.message).then(action => {
                  this.code = ''
                })
              }
            }
          })
      }
    },
    commit3() {
      this.$store.commit('setBinder', this.checkBinder)
      this.popupVisible3 = false
      this.binder = this.checkBinder
      this.getHhInfo(this.checkBinder.hh)
      this.changesign()
      this.TopRotate()
      this.jiantou = 'iconfont icon-jiantouyou'
    },
    addhuhao() {
      if (this.$store.state.bindType == 'BIND') {
        let param = {
          userid: this.cstUserChannel.userid,
          source: this.cstUserChannel.source,
          menuClass: 'BIND'
        }
        this.$http
          .post('/mobile/menu/platform', null, { params: param })
          .then(r => {
            Indicator.close()
            if (r.body.status == '1' && r.body.content != '') {
              location.href = r.body.content
            } else {
              Toast(r.body.message)
            }
          })
      }
      if (this.$store.state.bindType == 'IBIND') {
        this.$router.push('/binderlist')
      }
    },
    addHH(bindType) {
      if (bindType == 'BIND') {
        let param = {
          userid: this.cstUserChannel.userid,
          source: this.cstUserChannel.source,
          menuClass: 'BIND'
        }

        this.$http
          .post('/mobile/menu/platform', null, { params: param })
          .then(r => {
            Indicator.close()
            if (r.body.status == '1' && r.body.content != '') {
              location.href = r.body.content
            } else {
              Toast(r.body.message)
            }
          })
      }
      if (bindType == 'IBIND') {
        this.$router.push('/binderlist')
      }
    },
    setting() {
      this.$router.push('/setting')
    },
    sendSmsCode() {
      if (this.phone != '') {
        if (!/^1(3|4|5|7|8|9)\d{9}$/.test(this.phone)) {
          MessageBox.confirm('请输入正确的手机号!')
        } else {
          var url = '/buss/sendSmsCode'
          const self = this
          self.btnabble = true
          var num = 60
          var timer = setInterval(function() {
            num--
            self.btntext = num + '秒后重新获取'
            //self.$refs.mycode.style.color = ' #ccc'
            self.btnabble = true
            if (num === 0) {
              self.btnabble = false
              //self.$refs.mycode.style.color = ' #ffa600'
              self.btntext = '获取验证码'
              clearInterval(timer)
            }
          }, 1000)
          this.$http
            .get(url, { params: { phone: this.phone } })
            .then(function(res) {
              if (res.body.status == 1) {
              }
            })
        }
      } else {
        MessageBox.confirm('手机号不能为空！').then(action => {})
      }
    },
    flushData() {
      this.$http.post('/mobile/info').then(function(response) {
        if (response.body.status == 1) {
          this.$store.commit('setatcRecords', response.body.mapItems.atcRecords)

          this.map = response.body.mapItems.map
          this.$store.commit('setMapItems', response.body.mapItems)

          if (response.body.mapItems.user != null) {
            this.$store.commit(
              'setdefaultkey',
              response.body.mapItems.user.defaultkey
            )
          }
          this.$store.commit('setaddress', this.fDataJson.address)
          this.$store.commit('setbindType', this.map.bindType.value)
          this.$store.commit('setSetting', this.map.push)
          this.$store.commit('setSms', this.map.smslink)
          this.$store.commit('setcompanyCode', this.fDataJson.companyCode)

          if (response.body.mapItems.cstUserChannel != null) {
            this.$store.commit(
              'setCustid',
              response.body.mapItems.cstUserChannel.custid
            )
            this.$store.commit('setBinders', response.body.mapItems.binders)
            this.$store.commit(
              'setcstUserChannel',
              response.body.mapItems.cstUserChannel
            )
            this.$store.commit('setPhone', response.body.mapItems.user.phone)
          }
          var bgimgsArrays = []
          let imgs = this.fDataJson.bgName.split(',')
          let text = this.fDataJson.bgConfig.split(',')
          for (let i = 0; i < imgs.length; i++) {
            var img = {
              value: '',
              text: []
            }
            img.value = imgs[i]
            if (text[i]) {
              img.text = text[i].split('|')
            }
            bgimgsArrays.push(img)
          }
          this.$store.commit('setbgimgsArray', bgimgsArrays)
          this.$store.commit('setParams', response.body.mapItems.map)

          if (response.body.mapItems.binders != null) {
            if (!this.$store.state.binder) {
              //当前选择户号
              if (
                response.body.mapItems.binders.length > 1 &&
                this.$store.state.defaultkey != null
              ) {
                response.body.mapItems.binders.forEach(element => {
                  if (this.$store.state.defaultkey == element.hh) {
                    this.binder = element
                  }
                  if (!this.binder) {
                    //默认户号不存在
                    this.binder = response.body.mapItems.binders[0]
                  }
                })
              } else {
                this.binder = response.body.mapItems.binders[0]
              }
              this.$store.commit('setBinder', this.binder)
            }
          } else {
            this.$store.state.binder = {}
          }
          let source = sessionStorage.getItem('source', source)
          if (!this.$store.state.menus || this.$store.state.menus.length == 0) {
            if (source) {
              this.$http
                .get('/mobile/menu/getMenu?source=' + source)
                .then(function(response) {
                  if (response.body.status == 1) {
                    this.menus = response.body.mapItems.busMenus
                    this.$store.commit(
                      'setmenus',
                      response.body.mapItems.busMenus
                    )
                  }
                })
            }
          } else {
            this.menus = this.$store.state.menus
          }
        }
      })
    },
    init() {
      this.fDataJson = this.$store.state.globalSet
      this.urlHh = this.$route.query.hh
      this.binders = this.$store.state.binders
      this.mymessage = this.fDataJson.pagename
      this.top = this.fDataJson.top
      this.bgimgsArray = this.$store.state.bgimgsArray
      this.activityArray = this.$store.state.activitys //活动数组
      //初始化数据
      if (
        Object.keys(this.$store.state.mapItems.map) &&
        Object.keys(this.$store.state.mapItems.map).length > 0
      ) {
        this.map = this.$store.state.mapItems.map
        this.busHandleBeforeRemind = this.map.busHandleBeforeRemind
        this.needPhone = this.map.needPhone.value
        this.bindType = this.map.bindType.value
      }
      this.address = this.fDataJson.address
      this.leftname = this.fDataJson.leftname
      this.rightname = this.fDataJson.rightname
      this.source = this.$store.state.mapItems.source
      this.cstUserChannel = this.$store.state.mapItems.cstUserChannel
      this.fromuserid = this.$store.state.mapItems.fromuserid

      this.tel = this.fDataJson.tel
      this.telhref = 'tel:' + this.tel //
      // 一码一户二维码扫描，如果连接获取到的户号，在用户绑定的户号里面存在，则存到vuex，否则，就跳转到绑定户号页面
      if (this.urlHh) {
        var falg = true
        this.binders.map((ele, index) => {
          if (ele.hh == this.urlHh) {
            this.$store.commit('setBinder', ele)
            falg = false
          }
        })
        if (falg) {
          this.$router.push({ path: '/bind', query: { hh: this.urlHh } })
        }
      }
      this.pushBinders()
      this.binder = this.$store.state.binder
      this.checkBinder = this.binder
      let source = sessionStorage.getItem('source', source)
      if (!this.$store.state.menus || this.$store.state.menus.length == 0) {
        if (source) {
          this.$http
            .get('/mobile/menu/getMenu?source=' + source)
            .then(function(response) {
              if (response.body.status == 1) {
                this.menus = response.body.mapItems.busMenus
                this.$store.commit('setmenus', response.body.mapItems.busMenus)
              }
            })
        }
      } else {
        this.menus = this.$store.state.menus
      }

      //阶梯
      if (this.binder != null) {
        this.changesign()
        this.TopRotate()
      }
      if (
        !this.$store.state.cstUserChannel &&
        !this.$store.state.cstUserChannel.custid &&
        this.needPhone == 1
      ) {
        MessageBox.confirm('请输入手机号进行关联!', {
          showCancelButton: false,
          closeOnClickModal: false
        }).then(action => {
          this.popupVisible2 = true
        })
      }
    }
  },
  watch: {
    mapItems(newValue, oldValue) {
      if (newValue != null && Object.keys(newValue).length > 1) this.init()
    },
    popupVisible3(n, o) {
      if (n == false) {
        this.jiantou = 'iconfont icon-jiantouyou'
      }
    }
  }
}
</script>
