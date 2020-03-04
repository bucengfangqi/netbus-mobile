import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import {
    MessageBox
} from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'vant/lib/index.css'

import '../icon/iconfont.css'
import '../lib/style.css'
// import './rem'
import './alipayjsapi.inc.min'
import './hzbsApp-JSSdk-1.0.6' //杭州办事APP内 JSSdk
// 引入子路由
//const entry= () => import(/* webpackChunkName: 'entry' */'../page/entry.vue');
const entry = r =>
    require.ensure([], () => r(require('../page/entry.vue')), 'index')
    // 引入子页面
const index = r =>
    require.ensure([], () => r(require('../page/index.vue')), 'index')
    //引入子模块
const form = r =>
    require.ensure([], () => r(require('../page/form.vue')), 'from')
const my = r => require.ensure([], () => r(require('../page/my.vue')), 'index')
    // const search = r =>
    //     require.ensure([], () => r(require('../page/search.vue')), 'search')
    // const myinfo = r =>
    //     require.ensure([], () => r(require('../page/myinfo.vue')), 'myinfo')
const record = r =>
    require.ensure([], () => r(require('../page/record.vue')), 'record')
const setting = r =>
    require.ensure([], () => r(require('../page/setting.vue')), 'setting')
const middle = r =>
    require.ensure([], () => r(require('../page/middle.vue')), 'middle')
const bind = r =>
    require.ensure([], () => r(require('../page/bind.vue')), 'bind')
const binderlist = r =>
    require.ensure([], () => r(require('../page/binderlist.vue')), 'binderlist')
const listPage = r =>
    require.ensure([], () => r(require('../page/listTpl.vue')), 'listTpl')
const node = r =>
    require.ensure([], () => r(require('../page/node.vue')), 'node')
const trendLine = r =>
    require.ensure([], () => r(require('../page/trendLine.vue')), 'trendLine')
const waterBill = r =>
    require.ensure([], () => r(require('../page/waterBill.vue')), 'waterBill')
const notice = r =>
    require.ensure([], () => r(require('../page/notice.vue')), 'notice')
const noticeDetail = r =>
    require.ensure(
        [],
        () => r(require('../page/noticedetai.vue')),
        'noticeDetail'
    )
const dzht = r =>
    require.ensure([], () => r(require('../page/dzht.vue')), 'dzht')
const electronic = r =>
    require.ensure([], () => r(require('../page/electronic.vue')), 'electronic')
const url = r => require.ensure([], () => r(require('../page/url.vue')), 'url')
const pay = r => require.ensure([], () => r(require('../page/pay.vue')), 'pay')
const payInfo = r =>
    require.ensure([], () => r(require('../page/payInfo.vue')), 'payInfo')
const bussOutlets = r =>
    require.ensure([], () => r(require('../page/bussOutlets.vue')), 'bussOutlets')
const articleMiddle = r =>
    require.ensure(
        [],
        () => r(require('../page/articleMiddle.vue')),
        'articleMiddle'
    )
    // const projectPayment = r =>
    //     require.ensure(
    //         [],
    //         () => r(require('../page/projectPayment.vue')),
    //         'projectPayment'
    //     )
const projectPayQuery = r =>
    require.ensure(
        [],
        () => r(require('../page/projectPayQuery.vue')),
        'projectPayQuery'
    )
const taskDetail = r =>
    require.ensure([], () => r(require('../page/taskDetail.vue')), 'taskDetail')
const selfReading = r =>
    require.ensure([], () => r(require('../page/selfReading.vue')), 'selfReading')
const historicalRead = r =>
    require.ensure(
        [],
        () => r(require('../page/historicalRead.vue')),
        'historicalRead'
    )
const meterRead = r =>
    require.ensure([], () => r(require('../page/meterRead.vue')), 'meterRead')
const wftWeixinPay = r =>
    require.ensure(
        [],
        () => r(require('../page/wftWeixinPay.vue')),
        'wftWeixinPay'
    )
const hzbsAppEntry = r =>
    require.ensure(
        [],
        () => r(require('../page/hzbsAppEntry.vue')),
        'hzbsAppEntry'
    )
    // const payMoney = r =>
    //     require.ensure([], () => r(require('../page/payMoney.vue')), 'payMoney')

const QRcode = r =>
    require.ensure([], () => r(require('../page/QRcode.vue')), 'QRcode')
const engineeringPay = r =>
    require.ensure([], () => r(require('../page/engineeringPay.vue')), 'engineeringPay')

const replacementRecord = r =>
    require.ensure([], () => r(require('../page/replacementRecord.vue')), 'replacementRecord')
const waterflowinfo = r =>
    require.ensure([], () => r(require('../page/waterflowinfo.vue')), 'waterflowinfo')
const projectRecord = r =>
    require.ensure([], () => r(require('../page/projectRecord.vue')), 'projectRecord')
const payQRcode = r =>
    require.ensure([], () => r(require('../page/payQRcode.vue')), 'payQRcode')
const evaluate = r =>
    require.ensure([], () => r(require('../page/evaluate.vue')), 'evaluate')
const miselectronic = r =>
    require.ensure([], () => r(require('../page/miselectronic.vue')), 'miselectronic')
const activity = r =>
    require.ensure([], () => r(require('../page/activity.vue')), 'activity')
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.http.interceptors.push((request, next) => {
    request.url = '/netbus' + request.url
})
const routes = [{
        path: '/',
        component: index
    },
    {
        path: '/form',
        component: form
    },
    {
        path: '/taskDetail',
        component: taskDetail
    },
    {
        path: '/my',
        component: my
    },
    // {
    //     path: '/myinfo.',
    //     component: myinfo
    // },
    // {
    //     path: '/search',
    //     component: search
    // },
    {
        path: '/record',
        component: record
    },
    {
        path: '/setting',
        component: setting
    },
    {
        path: '/middle',
        component: middle
    },
    {
        path: '/bind',
        component: bind
    },
    {
        path: '/binderlist',
        component: binderlist
    },
    {
        path: '/list',
        component: listPage
    },
    {
        path: '/node',
        component: node
    },
    {
        path: '/trendLine',
        component: trendLine
    },
    {
        path: '/waterBill',
        component: waterBill
    },
    {
        path: '/notice',
        component: notice
    },
    {
        path: '/noticedetail',
        component: noticeDetail
    },
    {
        path: '/dzht',
        component: dzht
    },
    {
        path: '/electronic',
        component: electronic
    },
    {
        path: '/miselectronic',
        component: miselectronic
    },
    {
        path: '/url',
        component: url
    },
    {
        path: '/pay',
        component: pay
    },
    {
        path: '/payInfo',
        component: payInfo
    },
    {
        path: '/bussOutlets',
        component: bussOutlets
    },
    {
        path: '/articleMiddle',
        component: articleMiddle
    },
    // {
    //     path: '/projectPayment',
    //     component: projectPayment
    // },
    {
        path: '/projectPayQuery',
        component: projectPayQuery
    },
    {
        path: '/selfReading', //自抄表签约
        component: selfReading
    },
    {
        path: '/historicalRead', //自抄表历史抄表记录
        component: historicalRead
    },
    {
        path: '/meterRead', //自抄表提交
        component: meterRead
    },
    {
        path: '/wftWeixinPay',
        component: wftWeixinPay
    },
    {
        path: '/engineeringPay', //银联支付
        component: engineeringPay
    },
    {
        path: '/hzbsAppEntry',
        component: hzbsAppEntry
    },
    // {
    //     path: '/payMoney',
    //     component: payMoney
    // },
    {
        path: '/QRcode',
        component: QRcode
    },
    {
        //拆换记录
        path: '/replacementRecord',
        component: replacementRecord
    },
    {
        //水流信息
        path: '/waterflowinfo',
        component: waterflowinfo
    },
    {
        //余杭工程报装查询
        path: '/projectRecord',
        component: projectRecord
    },
    {
        //支付缴费二维码
        path: '/payQRcode',
        component: payQRcode
    },

    {
        //评价
        path: '/evaluate',
        component: evaluate
    },
    {
        //活动页面
        path: '/activity',
        component: activity
    },

]
let path = location.pathname.split('/')[1]
let locationPath = ''
if (path == '' || path == 'app') {
    locationPath = ''
} else {
    locationPath = '/' + path
}
const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.path == '/bind' || to.path == '/waterBill' ||
            to.path == '/waterflowinfo') {
            if (savedPosition && to.meta.keepAlive) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
    },
    mode: 'history',
    base: locationPath + '/app'
})
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})
const store = new Vuex.Store({
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

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(entry)
})

/* 路由拦截 */
router.beforeEach((to, from, next) => {
    if (from.path === '/meterRead' && to.path === '/selfReading') {
        next({
            path: '/'
        })
    }
    if (
        from.path === '/form' &&
        (to.path === '/' || to.path === '/my') &&
        store.state.interceptor == 1
    ) {
        MessageBox.confirm('您确认放弃吗？', {
                confirmButtonText: '是的',
                cancelButtonText: '不是'
            })
            .then(action => {
                store.commit('setinterceptor', 0)
                next()
            })
            .catch(err => {})
    } else {
        next()
    }
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    /* 请求头设置 */

Vue.http.interceptors.push(function(request, next) {
    let tokenValue = sessionStorage.getItem('token')
    request.headers.set('AccessToken', tokenValue)
        // ...
        // 请求发送前的处理逻辑
        // ...
    next(function(response) {
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})