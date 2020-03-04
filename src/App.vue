<template>
  <div id="main">
    <router-view style="padding-bottom:5%;" v-if="isEntry"></router-view>
    <template v-if="this.$store.state.show == 1&&isshow">
      <nav class="foot" id="foot" :style="{top: topHeight}" v-if="fDataJson">
        <ul style="width: 100%;">
          <template v-if="fDataJson.rightname && fDataJson.rightname != ' '&&fDataJson.leftname && fDataJson.leftname != ' '">
            <li @click="main()" class="twoLi">
              <img :src="require('@/assets/img/'+clickMainImg+'.png')" alt />
              {{fDataJson.leftname}}
            </li>
            <span class="lineRight"></span>
            <li @click="my()" class="twoLi">
              <img :src="require('@/assets/img/'+clickMyImg+'.png')" alt />
              {{fDataJson.rightname}}
            </li>
          </template>
          <template v-else>
            <template v-if="fDataJson.leftname && fDataJson.leftname != ' '">
              <li @click="main()">
                <img :src="require('@/assets/img/'+clickMainImg+'.png')" alt />
                {{fDataJson.leftname}}
              </li>
            </template>
            <template v-if="fDataJson.rightname && fDataJson.rightname != ' '">
              <span class="lineRight"></span>
              <li @click="my()">
                <img :src="require('@/assets/img/'+clickMyImg+'.png')" alt />
                {{fDataJson.rightname}}
              </li>
            </template>
          </template>
        </ul>
      </nav>
    </template>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
import { logService } from './plugins/logservice'
export default {
  data() {
    return {
      topHeight: 'calc(100% - 58px)',
      map: [],
      binder: '',
      clickMyImg: 'icon_user_normat',
      clickMainImg: 'icon_home_selected',
      source: '',
      isEntry: false,
      fDataJson: {}, //全局数据
      docmHeight: document.documentElement.clientHeight, //默认屏幕高度
      showHeight: document.documentElement.clientHeight, //实时屏幕高度
      isshow: true,
      footHeight: 58 //底部导航高度
    }
  },
  methods: {
    focusoutFn() {
      // 软键盘收起的事件处理
      setTimeout(() => {
        window.scrollTo(
          0,
          document.documentElement.scrollTop || document.body.scrollTop
        )
      })
    },
    GetQueryString(name) {
      //截取url
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
      var r = window.location.search.substr(1).match(reg) //search,查询？后面的参数，并匹配正则
      if (r != null) return unescape(r[2])
      return null
    },
    my() {
      this.clickMyImg = 'icon_user_selected'
      this.clickMainImg = 'icon_home_normat'
      this.$router.push('/my')
    },
    main() {
      this.clickMainImg = 'icon_home_selected'
      this.clickMyImg = 'icon_user_normat'
      this.$router.push('/')
    },
    getInfo() {
      //全局配置获取到了，才执行info
      this.$http.post('/mobile/info').then(function(response) {
        if (response.body.status == 1) {
          this.$store.commit('setatcRecords', response.body.mapItems.atcRecords)
          this.source = response.body.mapItems.source
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
          this.$store.commit('setmymessage', this.fDataJson.pagename)
          this.$store.commit('setSetting', this.fDataJson.setting)
          this.$store.commit('setSms', this.map.smslink)
          this.$store.commit('setcompanyCode', this.fDataJson.companyCode)

          if (response.body.mapItems.cstUserChannel != null) {
            this.$store.commit(
              'setCustid',
              response.body.mapItems.cstUserChannel.custid
            )
            this.$store.commit('setactivitys', response.body.mapItems.activitys)
            this.$store.commit('setBinders', response.body.mapItems.binders)
            this.$store.commit('setBinder', null) //清空选中户号
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
          //获取表单页面底部文字配置
          let recordParams = ''
          if (this.fDataJson && this.fDataJson.information) {
            if (
              Object.prototype.toString.call(this.fDataJson.information) ===
              '[object Object]'
            ) {
              for (var i in this.fDataJson.information) {
                if (this.source == i) {
                  recordParams = this.fDataJson.information[i].split('|')
                }
              }
            } else {
              if (this.source) {
                if (this.source == 'hzbsApp') {
                  recordParams = this.fDataJson.information.split('|')
                } else if (
                  this.source == 'zjzw_gr' ||
                  this.source == 'zjzw_fr'
                ) {
                  recordParams = this.fDataJson.information.split('|')
                } else {
                  recordParams = this.fDataJson.information.split('|')
                }
              }
            }
            // let recordParams=window.fDataJson.information.split('|') //表单底部文字
            if (recordParams) {
              var records = []
              for (var a = 1; a < recordParams.length; a++) {
                records.push(recordParams[a])
              }
              this.$store.commit('setrecords', records)
              this.$store.commit('setshowRecords', recordParams[0])
            }
          }
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
        }
        let source = sessionStorage.getItem('source', source)
        if (source) {
          this.$http
            .get('/mobile/menu/getMenu?source=' + source)
            .then(function(response) {
              if (response.body.status == 1) {
                this.menus = response.body.mapItems.busMenus
                this.$store.commit('setmenus', response.body.mapItems.busMenus)
                this.isEntry = true
              }
            })
        }
      })
    },
    setFootTop() {
      this.footHeight = document.getElementById('foot').clientHeight
      this.topHeight = `calc(100% - ${this.footHeight}px)`
      console.log('this.footHeight', this.footHeight)
    },
    setRem() {
      const baseSize = 32
      // 设置 rem 函数
      // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
      const scale = document.documentElement.clientWidth / 750
      // 设置页面根节点字体大小
      document.documentElement.style.fontSize =
        baseSize * Math.min(scale, 2) + 'px'
      this.showHeight = document.body.clientHeight
      console.log('设置字体大小', this.showHeight)
      this.setFootTop()
    }
  },
  created() {
    let element = document.getElementById('root')
    element.style.cssText = 'display:none'
    // 监听页面卸载(刷新前)
    if (window.addEventListener) {
      //其他浏览器支持
      window.addEventListener('beforeunload', () => {
        // 存储store
        sessionStorage.setItem('vuexState', JSON.stringify(this.$store.state))
      })
      window.addEventListener('pagehide', () => {
        // 存储store
        sessionStorage.setItem('vuexState', JSON.stringify(this.$store.state))
      })
    } else if (window.attachEvent) {
      //老ie
      // 主要是为了兼容老的IE
      window.attachEvent('on' + eventName, function() {
        sessionStorage.setItem('vuexState', JSON.stringify(this.$store.state))
      })
    } else {
      window.onbeforeunload = function() {
        sessionStorage.setItem('vuexState', JSON.stringify(this.$store.state))
      }
    }
    // 页面加载获取store
    if (sessionStorage.getItem('vuexState')) {
      let vuexData = sessionStorage.getItem('vuexState')
      vuexData = JSON.parse(vuexData)
      Object.keys(vuexData).map(item => {
        //将session值赋值回store
        this.$store.state[item] = vuexData[item]
      })
      //清空session
      sessionStorage.setItem('vuexState', '')
    }
  },
  watch: {
    showHeight: function() {
      console.log(
        'this.docmHeight > this.showHeight + 50',
        this.docmHeight,
        this.showHeight
      )
      if (this.docmHeight > this.showHeight + 50) {
        this.isshow = false
      } else {
        this.focusoutFn()
        this.isshow = true
      }
    }
  },
  mounted() {
    let that = this
    window.onload = function() {
      // 改变窗口大小时重新设置 rem
      that.setRem() //初始化
      window.onresize = function() {
        console.log('1')
        that.setRem() //重置
      }
    }
    //动态水司全局配置start
    let urlPath = location.pathname
    let companyid = urlPath.split('/')
    if (companyid[1] == 'app') {
      companyid[1] = ''
    }
    //顺序加载
    let queryMenuid = this.GetQueryString('menuid')
    let queryHh = this.GetQueryString('hh')
    if (
      queryMenuid && queryMenuid != '' ||
      queryHh && queryHh != '' ||
      this.fDataJson && this.fDataJson != ''
    ) {
      this.isEntry = true
    } else {
      this.isEntry = false
    }
    this.fDataJson = window.fDataJson
    this.$store.commit('setglobalSet', window.fDataJson)
    this.$http.post('/index/info?path=' + companyid[1]).then(response => {
      if (response.body.status == 1) {
        if (response.body.content) {
          this.$store.commit(
            'setglobalSet',
            JSON.parse(response.body.content.setting)
          )
          sessionStorage.setItem('companyid', response.body.content.companyid)
          sessionStorage.setItem('globalSet', response.body.content.setting)
          this.fDataJson = JSON.parse(sessionStorage.getItem('globalSet'))
          window.fDataJson = this.fDataJson
          document.title = window.fDataJson.title
        }
        this.getInfo()
      } else {
        //不管有没有全局配置，都要执行getinfo
        this.getInfo()
      }
    })
    // 动态水司全局配置end
    logService({ opname: 'entry', type: 'login' })
    let url = escape(location.href.split('#')[0])
    let tokenValue = this.GetQueryString('token')
    let needPhone = this.GetQueryString('needPhone')
    let userid = this.GetQueryString('fromuserid')
    let source = this.GetQueryString('source')
    if (source) {
      sessionStorage.setItem('source', source)
    }
    let data = {
      userid: userid,
      source: source,
      needPhone: needPhone
    }
    if (needPhone && tokenValue == null) {
      this.$store.commit('setPhoneBOX', data)
    } else {
      if (tokenValue) {
        sessionStorage.setItem('token', tokenValue)
      }
    }
    this.$http.post('/weixin/getJsapi?url=' + url).then(res => {
      if (res.body.status != '1') return
      let app = res.body.content
      if (app) {
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: app.appId, // 必填，公众号的唯一标识
          timestamp: app.timestamp, // 必填，生成签名的时间戳
          nonceStr: app.nonceStr, // 必填，生成签名的随机串
          signature: app.signature, // 必填，签名
          jsApiList: ['hideAllNonBaseMenuItem', 'openLocation'] // 必填，需要使用的JS接口列表
        })
        wx.ready(function() {
          //wx.hideAllNonBaseMenuItem();
        })
        wx.error(function(res) {
          console.log(res)
        })
      }
    })
  },
  beforeDestroy() {}
}
</script>


