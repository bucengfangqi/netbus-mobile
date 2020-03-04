<template>
  <div>
    <div class="usertop activityTop">
      <div class="title">
        <i class="fl iconfont icon-jiantou5" @click="onClickLeft"></i>
        {{title}}
        <div class="fr">
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="activityWrap">
      <div class="activityDesc" v-if="activityConfig.message">
        <p class="activTitle">用户须知</p>
        <span class="activDesc">
          {{activityConfig.message}}
        </span>
      </div>
      <!-- 倒计时 -->
      <div class="countDown" v-if="startNow"><img class="countTime" src="@/assets/img/time.png" /><span class="appointmentText">{{startNow}}</span></div>
      <!-- 表单提交 -->
      <div class="formWrap">
        <div class="formItem" v-for="(item,index) in formconfig" :key="index">
          <!-- 是否出现必填*以及表单名称 -->
          <van-row>
            <van-col span="7"><span class="labelText"><i class="mustI" v-if="item.required=='1'">*</i>{{item.name}}</span></van-col>
            <van-col span="16" offset="1">
              <template v-if="item.elementType=='text'">
                <!-- input输入框 -->
                <input :disabled="item.editable==0" class="inputItem" @focus="focusClick(index,form[item.key],item)" @blur="haveValue(index,form[item.key],item)" :class="{'errActive':(tipsDiv[index]&&item.required=='1') } " type="text" :placeholder="'请输入'+item.name" v-model="form[item.key]">
              </template>
              <template v-if="item.elementType=='radio'">
                <!-- 单选框 -->
                <van-radio-group v-model="form[item.key]" :disabled="item.editable==0" class="radioGroup" @change="radioGrop(form[item.key],item,index)">
                  <van-radio class="radio" v-for="(sub,index) in item.selectContent" :key="index" :name="sub.label">{{sub.label}}</van-radio>
                </van-radio-group>
              </template>
              <template v-if="item.elementType=='select'">
                <!-- 下拉菜单 -->
                <input readonly="readonly" onfocus="this.blur()" unselectable='true' name="select" class="inputItem" :class="{'errActive':(tipsDiv[index]&&item.required=='1'&&isSubmit) } " type="text" :placeholder="'请输入'+item.name" v-model="form[item.key]" @click="showtime(form[item.key],item,index)">
                <van-popup v-model="showFlag[item.key]" position="bottom" :overlay="true">
                  <van-picker :ref="item.key" show-toolbar :columns="item.selectContent" value-key="label" :default-index="item.valueIndex||0" @cancel="onCancel(form[item.key],item,index)" @confirm="onConfirm" />
                </van-popup>
              </template>
              <template v-if="item.elementType=='checkbox'">
                <!-- 复选框 -->
                <van-checkbox-group v-model="item.checkboxList" @change="changeCheckbox(item,index)" :disabled="item.editable==0" class="checkboxGroup">
                  <van-checkbox class="checkbox" shape="square" v-for="(sub,index) in item.selectContent" :key="index" :name="sub.label">{{sub.label}}</van-checkbox>
                </van-checkbox-group>
              </template>
            </van-col>
          </van-row>
          <div class="tipsDiv" v-if="tipsDiv[index]&&item.required=='1'&&isSubmit">{{item.name}}{{item.errortext}}</div>
        </div>
        <div class="formItem btn">
          <van-button :class="{ disableBtn: checkBtn,activeBtn:!checkBtn}" :disabled=" checkBtn" type="info" @click="sumbit()">立即预约</van-button>
        </div>
        <div class="activietMsg" v-if="message" v-html="message"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.radio >>> .van-radio__icon {
  height: 15px;
  line-height: 15px;
}
.radio >>> .van-radio__label {
  margin-left: 5px;
  display: inline;
}
.checkbox >>> .van-checkbox__icon {
  height: 15px;
  line-height: 15px;
}
.checkbox >>> .van-checkbox__label {
  margin-left: 5px;
  display: inline;
}
.radio >>> .van-radio__icon .van-icon {
  width: 15px;
  height: 15px;
  border: 1px solid #1fadff;
}
.checkbox >>> .van-checkbox__icon .van-icon {
  width: 15px;
  height: 15px;
  border: 1px solid #1fadff;
}
.radio,
.checkbox {
  display: inline-block;
  margin-right: 10px;
  max-width: 100%;
  overflow: hidden;
  table-layout: fixed;
  word-break: break-all;
}
.appointmentText {
  font-size: 0.875rem;
  color: #19abff;
  vertical-align: middle;
  text-shadow: 0px 0px #19abff;
}
.countTime {
  width: 1.1rem;
  margin-right: 5px;
}
.countDown {
  background: #edf8ff;
  border-radius: 3px;
  line-height: 1.867rem;
  width: 96%;
  margin: 1rem auto;
  text-align: center;
  height: 1.867rem;
}
.activietMsg,
.activietMsg1 {
  width: 88%;
  margin: 0 auto;
  font-size: 0.8rem;
  color: #666666;
  text-align: center;
  line-height: 1.4rem;
  margin-bottom: 2rem;
}
.activietMsg1 {
  margin-bottom: 0;
}
.activityWrap {
  width: 98%;
  margin: 0 auto;
  padding-top: 7.8rem;
  padding-bottom: 5%;
}
.activityDesc {
  width: 96%;
  padding: 2%;
  margin: 0 auto;
  background: #f3f7fb;
}
.activTitle {
  font-size: 0.875rem;
  color: #00a2ff;
  height: 2rem;
  line-height: 2rem;
  font-weight: 600;
}
.activDesc {
  line-height: 1.3rem;
  display: inline-block;
  font-size: 0.75rem;
}

/* 表单 */
.formWrap {
  width: 98%;
  margin: 1.2rem auto;
  padding: 2%;
}
.formItem {
  min-height: 2.2rem;
  width: 100%;
  line-height: 2.2rem;
  margin-bottom: 0.875rem;
}
.btn {
  text-align: center;
  margin: 2rem auto;
}
.disableBtn {
  width: 88%;
  background: #d0d0d0;
  border: 1px solid #d0d0d0;
  height: 46px;
  margin: 0 auto;
  border-radius: 7px;
}
.activeBtn {
  width: 88%;
  background: #19abff;
  margin: 0 auto;
  height: 46px;
  border: 1px solid #19abff;
  border-radius: 7px;
}
/* .formItem >>> .van-button--info {
} */
.labelText {
  line-height: 2rem;
  display: inline-block;
  /* min-width: 21%; */
  width: 100%;
  text-align: right;
  color: #666;
  box-shadow: 0px 0px 0px 0px #666;
  font-size: 0.8rem;
  table-layout: fixed;
  word-break: break-all;
  overflow: hidden;
}
.inputItem {
  border: 0.0625rem solid #d0d0d0;
  border-radius: 3px;
  width: 87%;
  /* margin-left: 2%; */
  padding-left: 2%;
  position: relative;
  font-size: 0.75rem;
}
.formItem >>> input {
  box-shadow: none; /*去除阴影*/
  outline: none; /*聚焦input的蓝色边框*/
  resize: none; /*textarea 禁止拖拽*/
  /*去除边框*/
  -webkit-appearance: none; /*常用于IOS下移除原生样式*/
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*点击高亮的颜色*/
}
.formItem >>> input::placeholder {
  color: #d0d0d0;
  font-size: 0.75rem;
}
input::-webkit-input-placeholder {
  color: #d0d0d0;
  font-size: 0.75rem;
}
.formItem >>> input::-webkit-input-placeholder {
  color: #d0d0d0;
  font-size: 0.75rem;
}
.formItem >>> input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #d0d0d0;
  font-size: 0.75rem;
}
.formItem >>> input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #d0d0d0;
  font-size: 0.75rem;
}
.formItem >>> input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #d0d0d0;
  font-size: 0.75rem;
}
.formItem >>> input:disabled,
input[disabled] {
  background: #f9f9f9;
  color: #bababa !important;
}
.errActive {
  border: 1px solid red;
}
.mustI {
  color: red;
  display: inline-block;
  font-style: normal;
  margin-right: 0.4rem;
}
.tipsDiv {
  font-size: 0.75rem;
  color: red;
  text-align: right;
  height: 1rem;
  line-height: 1rem;
  margin: 0 auto;
  margin-top: 0.3rem;
  width: 88%;
}
</style>
<script>
import Vue from 'vue'
import {
  dateFormat,
  formaTime,
  formaTimeDay,
  activityTimeDay
} from '@/assets/js/date.js'
import { RadioGroup, Radio } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { Indicator, MessageBox } from 'mint-ui'
import { Button } from 'vant'
import { Picker } from 'vant'
import { Popup } from 'vant'
import { Row, Col } from 'vant'

Vue.use(Row).use(Col)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Button)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(RadioGroup)
Vue.use(Radio)
export default {
  data() {
    return {
      title: '',
      form: {},
      tips: '',
      tipsDiv: [],
      activityConfig: '', //活动配置
      formconfig: '', //活动表单配置
      binder: {}, //当前户号
      checkBtn: false, //按钮是否禁用
      falg: false,
      startTime: '', //活动开始时间
      endTime: '', //活动结束时间
      message: '', //提示文案
      startNow: '', //预约时间时分秒
      day: 0, //天
      hr: 0, //时
      min: 0, //分
      sec: 0, //秒
      showFlag: {}, //下拉选择
      currentItem: [],
      checkboxList: [], //复选框
      currentValue: '',
      pickerData: '',
      pickerItem: '',
      pickerIndex: '',
      isSubmit: true //因为radio 和check 双向绑定，用了change事件，一旦绑定数组发现改变，就会触发验证，但是用户提交的时候 是要重置表单的，所以增加一个变量来控制
    }
  },
  methods: {
    radioGrop(data, item, index) {
      if (item.required == 1) {
        if (!data) {
          item.errortext = '不能为空！'
          this.$set(this.tipsDiv, index, true)
        } else {
          this.$set(this.tipsDiv, index, false)
        }
      }
    },
    changeCheckbox(item, index) {
      //checkbox
      if (item.required == 1) {
        if (item.checkboxList && item.checkboxList.length > 0) {
          this.$set(this.tipsDiv, index, false)
        } else {
          item.errortext = '不能为空！'
          this.$set(this.tipsDiv, index, true)
        }
      }
      this.form[item.key] = item.checkboxList.toString()
    },
    showtime(data, picker, index) {
      // 打开下拉框
      this.pickerData = data
      this.pickerItem = picker
      this.pickerIndex = index
      var thisKey = picker.key
      this.showFlag = { [thisKey]: true }
      this.currentItem = picker.key
    },
    onConfirm(value, index) {
      //下拉确定
      Vue.set(this.form, this.currentItem, value.label)
      if (this.pickerItem.required == 1) {
        if (!this.form[this.currentItem]) {
          this.$set(
            this.formconfig[this.pickerIndex],
            'errortext',
            '不能为空！'
          )
          this.$set(this.tipsDiv, this.pickerIndex, true)
        } else {
          this.$set(this.tipsDiv, this.pickerIndex, false)
        }
      } else {
        this.$set(this.tipsDiv, this.pickerIndex, false)
      }
      this.showFlag = {}
    },
    onCancel(data, item, index) {
      //下拉取消
      Vue.set(this.form, item.key, '')
      this.showFlag = {}
      if (item.required == 1) {
        if (!this.form[item.key]) {
          item.errortext = '不能为空！'
          this.$set(this.tipsDiv, index, true)
        } else {
          this.$set(this.tipsDiv, index, false)
        }
      } else {
        this.$set(this.tipsDiv, index, false)
      }
    },
    haveValue(n, data, item) {
      if (item.required == 1) {
        if (!data) {
          item.errortext = '不能为空！'
          this.$set(this.tipsDiv, n, true)
          return false
        } else if (data) {
          this.$set(this.tipsDiv, n, false)
          if (item.type == 'mobile') {
            var reg = /^1[3456789]\d{9}$/
            if (!reg.test(data)) {
              this.$set(this.tipsDiv, n, true)
              item.errortext = '格式错误！'
              return false
            }
          } else if (item.type == 'idcard') {
            var city = {
              11: '北京',
              12: '天津',
              13: '河北',
              14: '山西',
              15: '内蒙古',
              21: '辽宁',
              22: '吉林',
              23: '黑龙江 ',
              31: '上海',
              32: '江苏',
              33: '浙江',
              34: '安徽',
              35: '福建',
              36: '江西',
              37: '山东',
              41: '河南',
              42: '湖北 ',
              43: '湖南',
              44: '广东',
              45: '广西',
              46: '海南',
              50: '重庆',
              51: '四川',
              52: '贵州',
              53: '云南',
              54: '西藏 ',
              61: '陕西',
              62: '甘肃',
              63: '青海',
              64: '宁夏',
              65: '新疆',
              71: '台湾',
              81: '香港',
              82: '澳门',
              91: '国外 '
            }
            var patt1 = new RegExp(
              '(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9X]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$)'
            )
            if (!data || !patt1.test(data)) {
              this.$set(this.tipsDiv, n, true)
              item.errortext = '格式错误！'
              return false
            }
          }
          return true
        }
      }
      return true
    },
    focusClick(n, data, item) {},
    onClickLeft() {
      this.$router.push('/')
    },
    sumbit() {
      let flagTips = true
      for (let index in this.formconfig) {
        this.falg = this.haveValue(
          index,
          this.form[this.formconfig[index].key],
          this.formconfig[index]
        )
        if (!this.falg) {
          flagTips = false
        }
      }
      if (!flagTips) {
        return
      }
      // 活动提交
      if (flagTips) {
        this.checkBtn = true
        this.form.activitycode = this.activityConfig.activitycode
        this.$http.post('/activity/submit', this.form).then(response => {
          if (response.body.status == 1) {
            this.isSubmit = false
            MessageBox.alert(response.body.message)
              .then(action => {
                this.checkBtn = true

                clearInterval(window._interval)
                this.formconfig.map((ele, index) => {
                  if (ele.default) {
                    this.form[ele.key] = this.binder[ele.default]
                  } else {
                    this.form[ele.key] = ''
                  }
                  ele.checkboxList = []
                  this.$set(this.tipsDiv, index, false)
                })
                this.checkActivity(
                  this.binder.hh,
                  this.activityConfig.activitycode
                )
              })
              .catch(err => {})
          } else if (response.body.status == '55555') {
            this.checkBtn = true
            this.message = response.body.message
          } else {
            this.message = response.body.message
          }
        })
      }
    },

    checkActivity(hh, code) {
      // 活动检查
      this.$http
        .post('/activity/check?hh=' + hh + '&activityCode=' + code)
        .then(response => {
          if (response.body.status == 1) {
            this.countdown()
          } else if (response.body.status == 2) {
            this.countdown()
            this.message = `<p class='activietMsg1'>${response.body.message}</p>
              <pclass='activietMsg1'>开始时间：${this.startTime}</pclass='activietMsg1'>
             <p class='activietMsg1'>结束时间：${this.endTime}</p`
          } else {
            this.startNow = ''
            this.message = response.body.message
            this.checkBtn = true
          }
        })
    },
    getConfig(id) {
      //获取活动配置
      this.$http.post('/activity/config?menuid=' + id).then(response => {
        if (response.body.status == 1) {
          this.activityConfig = response.body.content
          this.title = this.activityConfig.title
          this.startTime = this.activityConfig.starttime
          this.endTime = this.activityConfig.endtime
          this.formconfig = JSON.parse(this.activityConfig.formconfig)
          this.formconfig.map((ele, index) => {
            this.$set(ele, 'errortext', '')
            this.$set(ele, 'checkboxList', [])
            if (ele.default) {
              this.form[ele.key] = this.binder[ele.default]
            } else {
              this.form[ele.key] = ''
            }
            this.tipsDiv[index] = false
          })
          this.checkActivity(this.binder.hh, this.activityConfig.activitycode)
        }
      })
    },
    getCountDown(msec) {
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day > 9 ? day : '0' + day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      return this.day + '天' + this.hr + ':' + this.min + ':' + this.sec
    },
    countdown() {
      //活动计算
      const startTime = new Date(this.startTime.replace(/-/g, '/')).getTime()
      const endTime = new Date(this.endTime.replace(/-/g, '/')).getTime()
      const now = new Date().getTime()
      if (now - startTime < 0) {
        let cut = startTime - now
        let timeSum = this.getCountDown(cut)
        this.startNow = '预约开始倒计时：' + timeSum
        //活动未开始
        this.checkBtn = true //禁用按钮
      } else if (now - startTime >= 0 && now - endTime < 0) {
        let cut = endTime - now
        let timeSum = this.getCountDown(cut)
        this.startNow = '预约结束倒计时：' + timeSum
        // 活动中
        this.checkBtn = false //开启按钮
        this.message = ''
      } else if (now - startTime > 0 && now - endTime >= 0) {
        //活动已过期
        this.startNow = ''
        this.checkBtn = true //禁止按钮
      }
      const that = this
      window._interval = setTimeout(function() {
        that.countdown()
      }, 1000)
    }
  },
  beforeCreate: function() {
    Vue.nextTick(() => Indicator.close())
  },
  beforeDestroy() {
    clearInterval(window._interval)
  },
  mounted() {
    this.$store.commit('setshow', 1)
    this.title = this.$store.state.currentMeutitle
    this.binder = this.$store.state.binder //当前户号
    this.menuid = this.$store.state.currentMenuId
    if (this.menuid) {
      this.getConfig(this.menuid)
    }
  }
}
</script>