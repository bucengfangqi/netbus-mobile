import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hh: '', //户号
    binder: null, //当前户号
    custid: '', //用户id
    binders: null, //所有绑定户号
    show: 1, //底部导航显示，1：显示，0：隐藏
    menus: [], //所有菜单
    listData: {}, //
    cstUserChannel: '', //用户通道
    notice: {},
    showMessage: 1, //欠费信息
    bindType: '', //户号绑定类型
    arg: '',
    setting: '',
    sms: '',
    phone: '', //顶部手机号显示，1：显示，0：隐藏:'',   //顶部手机号显示，1：显示，0：隐藏
    companyCode: '', //公司code
    interceptor: 1, //表单退出拦截
    address: '',
    mymessage: '',
    params: null, //map
    defaultkey: '', //默认户号
    mapItems: [], //所有参数信息
    menuidp: '', //父级菜单id
    currentMenuId: '', //当前菜单id
    bussData: '', //修改的数据
    currentMeutitle: '', //当前菜单标题
    menuiarg: '', //菜单参数
    currentBind: '', //当前点击的户号
    atcRecords: [], //文章记录
    payHH: '', //缴费户号
    buss: '', //业务详情展示
    records: [], //表单底部文字
    showRecords: '', //是否显示表单底部文字
    isPhone: {
      userid: '',
      source: '',
      needPhone: ''
    }, //是否出现手机提示框,并获取userid 和来源
    globalSet: {}, //通过后端接口获取不同水司的配置
    evaluateData: {},
    activitys: [], //活动配置数组
    // busHandleBeforeRemind: {}, //控制先弹出空户须知还是绑定用户以及欠费检查
  },
  mutations: {
    setactivitys(state, data) {
      state.activitys = data
    },
    setevaluateData(state, data) {
      state.evaluateData = data
    },
    setglobalSet(state, data) {
      state.globalSet = data
    },
    setPhoneBOX(state, data) {
      //
      state.isPhone.userid = data.userid
      state.isPhone.source = data.source
      state.isPhone.needPhone = data.needPhone
    },
    setrecords(state, records) {
      state.records = records
    },
    setshowRecords(state, showRecords) {
      state.showRecords = showRecords
    },
    setbuss(state, buss) {
      state.buss = buss
    },
    setpayHH(state, payHH) {
      state.payHH = payHH
    },
    setatcRecords(state, atcRecords) {
      state.atcRecords = atcRecords
    },
    setcurrentBind(state, currentBind) {
      state.currentBind = currentBind
    },
    setmenuiarg(state, menuiarg) {
      state.menuiarg = menuiarg
    },
    setcurrentMeutitle(state, currentMeutitle) {
      state.currentMeutitle = currentMeutitle
    },
    setbussData(state, bussData) {
      state.bussData = bussData
    },
    setcurrentMenuId(state, currentMenuId) {
      state.currentMenuId = currentMenuId
    },
    setmenuidp(state, menuidp) {
      state.menuidp = menuidp
    },
    setMapItems(state, mapItems) {
      state.mapItems = mapItems
    },
    setParams(state, params) {
      state.params = params
    },
    setdefaultkey(state, defaultkey) {
      state.defaultkey = defaultkey
    },
    sethh(state, hh) {
      state.hh = hh
    },
    setmymessage(state, mymessage) {
      state.mymessage = mymessage
    },
    setaddress(state, address) {
      state.address = address
    },
    // sethh(state, hh) {
    //     state.hh = hh
    // },
    setbindType(state, bindType) {
      state.bindType = bindType
    },
    setshow(state, show) {
      state.show = show
    },
    setCustid(state, custid) {
      state.custid = custid
    },
    setBinder(state, binder) { //当前户号
      state.binder = binder
    },
    setBinders(state, binders) {
      state.binders = binders
    },
    setmenus(state, menus) {
      state.menus = menus
    },
    setListData(state, tp) {
      state.listData = tp
    },
    setcstUserChannel(state, cstUserChannel) {
      state.cstUserChannel = cstUserChannel
    },
    setNotice(state, notice) {
      state.notice = notice
    },
    setshowMessage(state, showMessage) {
      state.showMessage = showMessage
    },
    setArg(state, arg) {
      state.arg = arg
    },
    setSetting(state, setting) {
      state.setting = setting
    },
    setSms(state, sms) {
      state.sms = sms
    },
    setPhone(state, phone) {
      state.phone = phone
    },
    setcompanyCode(state, companyCode) {
      state.companyCode = companyCode
    },
    setinterceptor(state, interceptor) {
      state.interceptor = interceptor
    },
    setbgimgsArray(state, bgimgsArray) {
      state.bgimgsArray = bgimgsArray
    }

  }
})
