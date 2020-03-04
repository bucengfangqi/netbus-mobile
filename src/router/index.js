import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  // 表单页面
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form.vue')
  },
  // // 个人页面
  // {
  //   path: '/my',
  //   name: 'my',
  //   component: () => import('../views/my.vue')
  // },
  // {
  //   path: '/record',
  //   name: 'record',
  //   component: () => import('../views/record.vue')
  // },
  // {
  //   path: '/middle',
  //   name: 'middle',
  //   component: () => import('../views/middle.vue')
  // },
  // {
  //   path: '/bind',
  //   name: 'bind',
  //   component: () => import('../views/bind.vue')
  // },
  // {
  //   path: '/binderlist',
  //   name: 'binderlist',
  //   component: () => import('../views/binderlist.vue')
  // },
  // {
  //   path: '/listPage',
  //   name: 'listPage',
  //   component: () => import('../views/listPage.vue')
  // },
  // {
  //   path: '/node',
  //   name: 'node',
  //   component: () => import('../views/node.vue')
  // },
  // {
  //   path: '/trendLine',
  //   name: 'trendLine',
  //   component: () => import('../views/trendLine.vue')
  // },
  // {
  //   path: '/waterBill',
  //   name: 'waterBill',
  //   component: () => import('../views/waterBill.vue')
  // },
  // {
  //   path: '/notice',
  //   name: 'notice',
  //   component: () => import('../views/notice.vue')
  // },
  // {
  //   path: '/noticeDetail',
  //   name: 'noticeDetail',
  //   component: () => import('../views/noticeDetail.vue')
  // },
  // {
  //   path: '/dzht',
  //   name: 'dzht',
  //   component: () => import('../views/dzht.vue')
  // },
  // {
  //   path: '/electronic',
  //   name: 'electronic',
  //   component: () => import('../views/electronic.vue')
  // },
  // {
  //   path: '/url',
  //   name: 'url',
  //   component: () => import('../views/url.vue')
  // },
  // {
  //   path: '/pay',
  //   name: 'pay',
  //   component: () => import('../views/pay.vue')
  // },
  // {
  //   path: '/payInfo',
  //   name: 'payInfo',
  //   component: () => import('../views/payInfo.vue')
  // },
  // {
  //   path: '/bussOutlets',
  //   name: 'bussOutlets',
  //   component: () => import('../views/bussOutlets.vue')
  // },
  // {
  //   path: '/articleMiddle',
  //   name: 'articleMiddle',
  //   component: () => import('../views/articleMiddle.vue')
  // },
  // {
  //   path: '/projectPayQuery',
  //   name: 'projectPayQuery',
  //   component: () => import('../views/projectPayQuery.vue')
  // },
  // {
  //   path: '/taskDetail',
  //   name: 'taskDetail',
  //   component: () => import('../views/taskDetail.vue')
  // },
  // {
  //   path: '/selfReading',
  //   name: 'selfReading',
  //   component: () => import('../views/selfReading.vue')
  // },
  // {
  //   path: '/historicalRead',
  //   name: 'historicalRead',
  //   component: () => import('../views/historicalRead.vue')
  // },
  // {
  //   path: '/meterRead',
  //   name: 'meterRead',
  //   component: () => import('../views/meterRead.vue')
  // },
  // {
  //   path: '/wftWeixinPay',
  //   name: 'wftWeixinPay',
  //   component: () => import('../views/wftWeixinPay.vue')
  // },
  // {
  //   path: '/hzbsAppEntry',
  //   name: 'hzbsAppEntry',
  //   component: () => import('../views/hzbsAppEntry.vue')
  // },
  // {
  //   path: '/QRcode',
  //   name: 'QRcode',
  //   component: () => import('../views/QRcode.vue')
  // },
  // {
  //   path: '/engineeringPay',
  //   name: 'engineeringPay',
  //   component: () => import('../views/engineeringPay.vue')
  // },
  // {
  //   path: '/replacementRecord',
  //   name: 'replacementRecord',
  //   component: () => import('../views/replacementRecord.vue')
  // },
  // {
  //   path: '/waterflowinfo',
  //   name: 'waterflowinfo',
  //   component: () => import('../views/waterflowinfo.vue')
  // },
  // {
  //   path: '/projectRecord',
  //   name: 'projectRecord',
  //   component: () => import('../views/projectRecord.vue')
  // },
  // {
  //   path: '/payQRcode',
  //   name: 'payQRcode',
  //   component: () => import('../views/payQRcode.vue')
  // },
  // {
  //   path: '/evaluate',
  //   name: 'evaluate',
  //   component: () => import('../views/evaluate.vue')
  // },
  // {
  //   path: '/miselectronic',
  //   name: 'miselectronic',
  //   component: () => import('../views/miselectronic.vue')
  // }, 
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router