<style>
div {
  display: block;
}
.footer {
  position: fixed;
  height: 6%;
  left: 0;
  right: 0;
  bottom: 15px;
  text-align: center;
  width: 100%;
}
.cards {
  /* main绝对定位，进行内部滚动 */
  width: 100%;
  top: 120px;
  bottom: 85px;
  position: absolute;
  /* 使之可以滚动 */
  overflow-y: scroll;
  display: -webkit-box;
  -webkit-box-orient: vertical; /*垂直*/
}
input {
  border: 1px solid #ccc;
  border-radius: 3px;
  padding-left: 10px;
  width: 80%;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.flieBox {
  width: 50%;
  margin: 0 auto;
}
.timeDate {
  font-size: 0.75rem;
  color: #f31771;
  display: inline-block;
  width: 38%;
  text-align: right;
}
.nameTitle {
  font-size: 0.875rem;
}
.imgIcom {
  width: 65%;
}
.statusText {
  font-size: 0.75rem;
  display: block;
  margin-top: 2%;
  color: #969799;
}
.task-list {
  margin-top: 0;
  margin-bottom: 3%;
}
.nameBox {
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}
</style>
<template>
  <div class="bgf3">
    <div class="my-bg">
      <div class="title">我的业务</div>
      <div class="myself">
        <div class="fl" style="width: 60%;">
          <h1>
            <img src="@/assets/img/smile.png" alt />您好
          </h1>
          <p>
            户号：
            <template v-if="binder != null">{{binder.hh}}</template>
          </p>
          <p style="overflow: hidden; text-overflow: ellipsis;white-space: nowrap;">
            户名：
            <template v-if="binder != null">{{binder.bzmc}}</template>
          </p>
        </div>
        <div class="tx"></div>
      </div>

      <div class="clear"></div>
      <div class="my-list">
        <van-collapse v-model="activeNames" accordion>
          <van-collapse-item title="全部业务" name="1">
            <div class="task-list">
              <ul>
                <li v-for="buss in allbuss" :key="buss.id">
                  <template>
                    <div class="wrap1">
                      <div class="child1" style="display: flex;justify-content:center;align-items: center;width: 20%;text-align: center;">
                        <div style="line-height: 2;">
                          <img class="imgIcom" :src="require('@/assets/images/'+buss.icon+'.png')" />
                        </div>
                      </div>
                      <div class="child2">
                        <div class="wrap2">
                          <div class="child1">
                            <div class="wrap2">
                              <div class="child1">
                                <label class="nameTitle">
                                  <span class="nameBox">{{buss.busname}}
                                    <div class="child1">
                                      <span class="statusText">{{buss.statusname}}</span>
                                    </div>
                                  </span>
                                  <span class="timeDate">提交时间<br />{{buss.iossubmitTime}}</span>
                                </label>
                              </div>
                              <!-- <div class="child1"><span>{{buss.clr}}</span></div> -->
                              <!-- <div class="child1">
                                <span class="statusText">{{buss.statusname}}</span>
                              </div> -->
                              <!-- <div class="child1"><span>{{buss.message}}</span></div> -->
                            </div>
                          </div>
                          <div slot="footer" style="display: -webkit-box;-webkit-box-align: end;-webkit-box-orient: vertical;margin-right: 10px;">
                            <template v-if="buss.status == 3">
                              <van-button type="default" plain size="mini" @click="update(buss)">修改</van-button>
                            </template>
                            <template v-if="buss.status == 1">
                              <van-button type="default" plain size="mini" @click="revokeBefore(buss,allbuss)">撤回</van-button>
                            </template>
                            <!--<template v-if="buss.status == 1"><van-button type="warning" plain size="mini" @click="kill(buss,allbuss)">取消</van-button></template>-->
                            <!--工程款缴费; 只处理报装业务，需要匹配报装业务编号-->
                            <template v-if="buss.status == 8 ">
                              <template v-if="projectData.bzGR && projectData.bzDW && projectData.projectIdFieldName && projectData.skipUrl && projectData.callbackUrl">
                                <template v-if="buss.menuid==projectData.bzGR || buss.menuid==projectData.bzDW">
                                  <van-button style="width: 65px;" type="warning" plain size="mini" @click="skipSmallPrograme(buss[projectData.projectIdFieldName], buss.id)">工程款缴费</van-button>
                                </template>
                              </template>
                            </template>
                            <van-button type="primary" plain size="mini" @click="detail(buss)">详情</van-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>

        <van-collapse v-model="activeNames1" accordion>
          <van-collapse-item title="待处理业务" name="1">
            <div class="task-list">
              <ul>
                <li v-for="buss in treatedbuss" :key="buss.id" style="padding-left:5%;">
                  <template>
                    <div class="wrap1">
                      <div class="child1" style="display: flex;justify-content:center;align-items: center;width: 20%;text-align: center;">
                        <div style="line-height: 2;">
                          <img class="imgIcom" :src="require('@/assets/images/'+buss.icon+'.png')" />
                        </div>
                      </div>
                      <div class="child2">
                        <div class="wrap2">
                          <div class="child">
                            <div class="wrap2">
                              <div class="child1">
                                <label class="nameTitle">
                                  <span class="nameBox">{{buss.busname}}
                                    <div class="child3">
                                      <span class="statusText">{{buss.statusname}}</span>
                                    </div>
                                  </span>
                                  <span class="timeDate">提交时间<br />{{buss.iossubmitTime}}</span>
                                </label>
                              </div>
                              <!-- <div class="child1"><span>{{buss.clr}}</span></div> -->
                              <!-- <div class="child3">
                                <span class="statusText">{{buss.statusname}}</span>
                              </div> -->
                              <!--<div class="child1"><span>{{buss.message}}</span></div>-->
                            </div>
                          </div>
                          <div slot="footer" style="display: -webkit-box;-webkit-box-align: end;-webkit-box-orient: vertical;margin-right: 10px;">
                            <template v-if="buss.status == 3">
                              <van-button type="default" plain size="mini" @click="update(buss)">修改</van-button>
                            </template>
                            <template v-if="buss.status == 1">
                              <van-button type="default" plain size="mini" @click="revokeBefore(buss,treatedbuss)">撤回</van-button>
                            </template>
                            <!--<template v-if="buss.status == 1"><van-button type="warning" plain size="mini" @click="kill(buss,treatedbuss)">取消</van-button></template>-->
                            <van-button type="primary" plain size="mini" @click="detail(buss)">详情</van-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>

        <van-collapse v-model="activeNames2" accordion>
          <van-collapse-item title="退回业务" name="1">
            <div class="task-list">
              <ul>
                <li v-for="buss in backbuss" :key="buss.id" style="padding-left:5%;">
                  <template>
                    <div class="wrap1">
                      <div class="child1" style="display: flex;justify-content:center;align-items: center;width: 20%;text-align: center;">
                        <div style="line-height: 2;">
                          <img class="imgIcom" :src="require('@/assets/images/'+buss.icon+'.png')" />
                        </div>
                      </div>
                      <div class="child2">
                        <div class="wrap2">
                          <div class="child1">
                            <div class="wrap2">
                              <div class="child1">
                                <label class="nameTitle">
                                  <span class="nameBox">{{buss.busname}}
                                    <div class="child1">
                                      <span class="statusText">{{buss.statusname}}</span>
                                    </div>
                                  </span>
                                  <span class="timeDate">提交时间<br />{{buss.iossubmitTime}}</span>
                                </label>
                              </div>
                              <!-- <div class="child1"><span>{{buss.clr}}</span></div> -->
                              <!-- <div class="child1">
                                <span class="statusText">{{buss.statusname}}</span>
                              </div> -->
                              <!--<div class="child1"><span>{{buss.message}}</span></div>-->
                            </div>
                          </div>
                          <div slot="footer" style="display: -webkit-box;-webkit-box-align: end;-webkit-box-orient: vertical;margin-right: 10px;">
                            <template v-if="buss.status == 3">
                              <van-button type="default" plain size="mini" @click="update(buss)">修改</van-button>
                            </template>
                            <template v-if="buss.status == 1">
                              <van-button type="default" plain size="mini" @click="revokeBefore(buss,backbuss)">撤回</van-button>
                            </template>
                            <!--<template v-if="buss.status == 1"><van-button type="warning" plain size="mini" @click="kill(buss,backbuss)">取消</van-button></template>-->
                            <van-button type="primary" plain size="mini" @click="detail(buss)">详情</van-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>

        <van-collapse v-model="activeNames3" accordion>
          <van-collapse-item title="已完成业务" name="1">
            <div class="task-list">
              <ul>
                <li v-for="buss in completedbuss" :key="buss.id" style="padding-left:5%;">
                  <template>
                    <div class="wrap1">
                      <div class="child1" style="display: flex;justify-content:center;align-items: center;width: 20%;text-align: center;">
                        <div style="line-height: 2;">
                          <img class="imgIcom" :src="require('@/assets/images/'+buss.icon+'.png')" />
                        </div>
                      </div>
                      <div class="child2">
                        <div class="wrap2">
                          <div class="child1">
                            <div class="wrap2">
                              <div class="child1">
                                <label class="nameTitle">
                                  <span class="nameBox">{{buss.busname}}
                                    <div class="child1">
                                      <span class="statusText">{{buss.statusname}}</span>
                                    </div>
                                  </span>
                                  <span class="timeDate">提交时间<br />{{buss.iossubmitTime}}</span>
                                </label>
                              </div>
                              <!-- <div class="child1"><span>{{buss.clr}}</span></div> -->
                              <!-- <div class="child1">
                                <span class="statusText">{{buss.statusname}}</span>
                              </div> -->
                              <!--<div class="child1"><span>{{buss.message}}</span></div>-->
                            </div>
                          </div>
                          <div slot="footer" style="display: -webkit-box;-webkit-box-align: end;-webkit-box-orient: vertical;margin-right: 10px;">
                            <template v-if="buss.status == 3">
                              <van-button type="default" plain size="mini" @click="update(buss)">修改</van-button>
                            </template>
                            <template v-if="buss.status == 1">
                              <van-button type="default" plain size="mini" @click="revokeBefore(buss,completedbuss)">撤回</van-button>
                            </template>
                            <!--<template v-if="buss.status == 1"><van-button type="warning" plain size="mini" @click="kill(buss,completedbuss)">取消</van-button></template>-->
                            <van-button type="primary" plain size="mini" @click="detail(buss)">详情</van-button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>

        <mt-popup v-model="popupVisible" :ref="currentMenu.id" position="right" closeOnClickModal="false" style="width:100%;height:100%;z-index: 300;">
          <div class="usertop">
            <div class="title">
              <i class="fl iconfont icon-jiantou5" @click="onClickLeft2"></i>
              {{currentItem.busname}}
              <div class="fr"></div>
            </div>
          </div>

          <div class="cards">
            <div style="border-radius:8px;background-color:#f3f3f3;margin:10px" class="wrap1">
              <div class="child1">
                <!-- 大标题 -->
                <div style="margin-left:12px;margin-top:5px;color:#164061;font-weight:bold;font-size:2.6vh;line-height:2.5em;">我提交的信息</div>

                <!-- 提交信息 -->
                <van-cell-group v-for="field in fields" :key="field" style="background-color:rgba(255, 255, 255, 0.1)">
                  <div style="margin-left: 2%;margin-right: 2%;">
                    <!-- 文字类信息 -->
                    <van-cell v-if="field.type !='FILE'&& field.content && field.type !='SWITCH' " :title="field.name" :value="field.content" style="background-color:rgba(255, 255, 255, 0.1)" />
                    <van-cell v-if="field.type =='SWITCH' && field.content=='true' " :title="field.name" value="是" style="background-color:rgba(255, 255, 255, 0.1)" />
                    <van-cell v-if="field.type =='SWITCH' && field.content=='false' " :title="field.name" value="否" style="background-color:rgba(255, 255, 255, 0.1)" />
                    <!-- 文件类信息 -->
                    <template v-if="field.type =='FILE'">
                      <dt style="margin-left: 4%;line-height:1.5rem">{{field.name}}:</dt>
                      <dd style="width: 90%;line-height: 2em;display: -webkit-inline-box;margin-left: 5%;">
                        <label class="file" v-if="img.field == field.fieldname" v-for="img in uploadList">
                          <div class="flieBox">
                            <img :src="FilePath(img.id)" alt @click="previewOldImg(img,index)" />
                          </div>
                          <mt-popup :modal="false" v-model="popupVisible2" :ref="img.filename" class="mint-popup" style="width:100%;">
                            <img alt :src="preview" style="width:100%;height:100%;" @click="cancelPreview(img.filename)" />
                          </mt-popup>
                        </label>
                      </dd>
                    </template>
                  </div>
                </van-cell-group>

                <!-- 提交时间 -->
                <div style="margin-left:12px;margin-top:5px;color:#164061;font-weight:bold;font-size:2.6vh;line-height:2.5em;">提交时间：{{submittime}}</div>

                <!-- 更新时间 -->
                <div style="margin-left:12px;margin-top:5px;color:#164061;font-weight:bold;font-size:2.6vh;line-height:2.5em;">受理时间：{{updatetime}}</div>

                <!-- 更新时间 -->
                <div style="margin-left:12px;margin-top:5px;color:#164061;font-weight:bold;font-size:2.6vh;line-height:2.5em;">受理工号：{{handler}}</div>
              </div>
            </div>

            <div style="border-radius:8px;background-color:#f3f3f3;margin:10px" class="wrap1">
              <div class="child1">
                <!-- 大标题 -->
                <div style="margin-left:12px;margin-top:5px;color:#164061;font-weight:bold;font-size:2.6vh;line-height:2.5em;">留言板</div>

                <div v-for="data in talkdata" style="margin: 2% 5%;">
                  <p>{{data.createtime}}</p>
                  <p>{{data.username}}：{{data.TEXT}}</p>
                </div>
              </div>
            </div>

            <div class="footer">
              <input type="text" style="height: 100%;" placeholder="请输入留言" v-model="textarea1" />
              <van-button type="default" @click="reply();">留言</van-button>
            </div>
          </div>
        </mt-popup>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import { Collapse, CollapseItem } from 'vant'
import { formatDate } from '@/assets/js/date.js'
import { DatetimePicker } from 'mint-ui'
import { Card } from 'vant'
import { Button } from 'vant'
import { MessageBox } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Header } from 'mint-ui'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell).use(CellGroup)
Vue.component(Header.name, Header)
Vue.use(Button)
Vue.use(Card)
Vue.component(Popup.name, Popup)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.use(Collapse).use(CollapseItem)

export default {
  name: 'my',
  data() {
    return {
      qrCode: '',
      cfgTplOptions: [],
      cfgTemplate: {},
      active: 'tab-container1',
      binder: {},
      activeNames: ['1'],
      activeNames1: ['1'],
      activeNames2: ['1'],
      activeNames3: ['1'],
      tasks: [],
      status: null,
      item1: [], //业务数据
      item2: [], //菜单
      item3: [], //菜单模板
      item4: [], //业务意见描述
      taskTitle: '',
      allbuss: [], //全部业务
      treatedbuss: [], //待处理业务
      backbuss: [], //退回业务
      completedbuss: [], //已完成业务
      popupVisible: false,
      popupVisible2: false,
      currentItem: [],
      currentId: '', //业务id
      talkdata: [], //会话
      items4: [],
      fields: [],
      submittime: '',
      updatetime: '',
      textarea1: '',
      handler: '',
      binder: {},
      uploadList: [], //图片集合
      currentMenu: '',
      projectData: {
        bzDW: null,
        bzGR: null,
        projectIdFieldName: null,
        skipUrl: null,
        callbackUrl: null
      }, //工程款缴费配置
      custid: '' //用户id
    }
  },
//   computed: {
//     mapItems() {
//       return this.$store.state.binder
//     }
//   },
  mounted: function() {
    Vue.nextTick(() => Indicator.close())
    this.$store.commit('setshow', 1)
    this.initBinder()
  },
  methods: {
    init() {
      this.binder = this.$store.state.binder
      this.custid = this.$store.state.custid
      this.$http
        .post('/mobile/cust/mytask', {
          status: 0,
          userid: this.custid
        })
        .then(response => {
          if (response.body.status == 1) {
            this.item1 = response.body.content.busDatas //我的任务
            this.item2 = response.body.content.busMenus //菜单
            this.item4 = response.body.content.busSubmits //业务意见描述
            //this.item3 = response.body.content.cfgTemplates;  //菜单模板
            for (var i = 0; i < this.item1.length; i++) {
              for (var a = 0; a < this.item2.length; a++) {
                if (this.item1[i].menuid == this.item2[a].id) {
                  this.$set(this.item1[i], 'busname', this.item2[a].menuname)
                  this.$set(this.item1[i], 'icon', this.item2[a].icon)
                  if (this.item1[i].status == 1) {
                    this.$set(this.item1[i], 'statusname', '状态：已提交')
                  }
                  if (this.item1[i].status == 2) {
                    this.$set(
                      this.item1[i],
                      'statusname',
                      '状态：已提交业务处理'
                    )
                  }
                  if (this.item1[i].status == 3) {
                    this.$set(this.item1[i], 'statusname', '状态：退回重改')
                    this.$set(
                      this.item1[i],
                      'clr',
                      '处理人编号：' + this.item1[i].handler
                    )
                  }
                  if (this.item1[i].status == 4) {
                    this.$set(this.item1[i], 'statusname', '状态：处理完成')
                    this.$set(
                      this.item1[i],
                      'clr',
                      '处理人编号：' + this.item1[i].handler
                    )
                  }
                  if (this.item1[i].status == 5) {
                    this.$set(this.item1[i], 'statusname', '状态：用户删除 ')
                  }
                  if (this.item1[i].status == 6) {
                    this.$set(this.item1[i], 'statusname', '状态：初审通过')
                  }
                  if (this.item1[i].status == 7) {
                    this.$set(this.item1[i], 'statusname', '状态：人工结束')
                  }
                }
              }
              if (this.item4 && this.item4.length > 0) {
                for (var b = 0; b < this.item4.length; b++) {
                  if (this.item1[i].id == this.item4[b].busid) {
                    this.$set(
                      this.item1[i],
                      'message',
                      '原因描述：' + this.item4[b].message
                    )
                  }
                }
              }
              //this.$set(this.item1[i],'iossubmitTime',this.formatDate(this.item1[i].submittime));
              this.allbuss.push(this.item1[i])
              if (this.item1[i].status == 1 || this.item1[i].status == 2) {
                this.treatedbuss.push(this.item1[i])
              }
              if (this.item1[i].status == 3) {
                this.backbuss.push(this.item1[i])
              }
              if (this.item1[i].status == 4) {
                this.completedbuss.push(this.item1[i])
              }
            }
          }
        })

      let param = {
        item: 'mobile.ui.showProjectPay'
      }
      this.$http
        .post('/sysparam/getSysParamByItem', null, { params: param })
        .then(function(response) {
          if (response.body.status == 1) {
            this.projectData = response.body.content
          } else {
          }
        })
    },
    revokeBefore(buss, bussList) {
      //业务撤回
      MessageBox.confirm('确定撤回该业务吗？').then(action => {
        this.revoke(buss, bussList)
      })
    },
    revoke(buss, bussList) {
      this.$http.post('/mobile/buss/revoke', buss).then(response => {
        if (response.body.status == 1) {
          var index = bussList.map(item => item.id).indexOf(buss.id)
          bussList[index].status = 3
        }
      })
    },
    skipSmallPrograme(projectid, bussid) {
      //跳转到工程款缴费小程序。参数1：工程编号，参数2: 业务id
      if (!this.projectData || this.projectData.length == 0) {
        MessageBox.alert('链接异常')
      }
      var skipUrl =
        this.projectData.skipUrl +
        encodeURIComponent(
          this.projectData.callbackUrl +
            'mobile=' +
            '&projectid=' +
            projectid +
            '&bussid=' +
            bussid +
            '&companyname=nanning' +
            '&' +
            new Date().getTime() +
            '=' +
            new Date().getTime()
        ) +
        '&' +
        new Date().getTime() +
        '=' +
        new Date().getTime()
      window.open(skipUrl)
    },
    home() {
      this.$router.push('/')
    },
    my() {
      this.$router.push('/my')
    },
    // myinfo() {
    //   this.$router.push('/myinfo')
    // },
    onClickLeft2() {
      this.$store.commit('setshow', 1)
      this.popupVisible = false
    },
    detail(buss) {
      this.currentMenu = buss
      this.$store.commit('setshow', 0)
      this.$store.commit('setbuss', buss)
      sessionStorage.removeItem('buss')
      sessionStorage.setItem('buss', JSON.stringify(buss)) //用于处理刷新后数据丢失
      this.$router.push('/taskDetail')
    },
    talkdatainit() {
      for (let b = 0; b < this.talkdata.length; b++) {
        this.talkdata[b].createtime = this.talkdata[b].CREATETIME
        if (this.talkdata[b].TYPE == 1) {
          this.$set(this.talkdata[b], 'username', '您留言给客服')
          this.$set(this.talkdata[b], 'color', 'red')
        }
        if (this.talkdata[b].TYPE == 0) {
          this.$set(
            this.talkdata[b],
            'username',
            '客服' + this.talkdata[b].LOGINID + '回复您'
          )
          this.$set(this.talkdata[b], 'color', 'blue')
        }
        if (this.talkdata[b].TYPE == 2) {
          this.$set(this.talkdata[b], 'username', '系统回复您')
          this.$set(this.talkdata[b], 'color', 'green')
        }
      }
    },
    formatDate(time) {
      var d = new Date(time)
      var times
      if (time != null) {
        times =
          d.getFullYear() +
          '-' +
          (d.getMonth() + 1) +
          '-' +
          d.getDate() +
          ' ' +
          d.getHours() +
          ':' +
          d.getMinutes() +
          ':' +
          d.getSeconds()
      } else {
        times = ''
      }
      return times
    },
    kill(buss, bussList) {
      MessageBox.confirm('确定删除该业务吗？').then(action => {
        this.delete(buss, bussList)
      })
    },
    message() {
      MessageBox.prompt('请输入你的留言').then(({ value, action }) => {})
    },
    FilePath(id) {
      return '/netbus/buss/photo?id=' + id
    },
    previewOldImg(key, index) {
      this.popupVisible2 = true
      this.preview = '/netbus/buss/photo?id=' + key.id
    },
    cancelPreview(key) {
      this.popupVisible2 = false
      this.popupVisible = true
    },
    reply() {
      this.$http
        .post('/mobile/cust/reply', {
          busid: this.currentId,
          text: this.textarea1,
          talker: 1,
          type: 1
        })
        .then(function(response) {
          if (response.body.status == 1) {
            var date = this.formatDate(new Date())
            var talk = {
              BUSID: this.currentId,
              CREATETIME: date,
              LOGINID: '',
              TALKER: this.$store.state.custid,
              TEXT: this.textarea1,
              TYPE: 1,
              username: '您留言给客服',
              createtime: date
            }
            this.talkdata.push(talk)
            this.textarea1 = ''
          } else {
            if (response.body.status == '10101') {
              this.$store.commit('logout', this)
              this.$store.commit('clearOpenedSubmenu')
              this.$router.push({
                name: 'login'
              })
              if (response.body.status == '10102') {
                this.$router.push({
                  name: 'error-403'
                })
              }
            }
          }
        })
    },
    update(buss) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      this.$store.commit('setcurrentMenuId', buss.menuid) //传递菜单id
      this.$store.commit('setbussData', JSON.stringify(buss)) //传递修改数据
      this.$router.push('/form')
    },
    delete(buss, bussList) {
      this.$http
        .post('/mobile/cust/delete', {
          id: buss.id
        })
        .then(function(response) {
          if (response.body.status == 1) {
            var index = bussList.map(item => item.id).indexOf(buss.id)
            bussList.splice(index, 1)
            MessageBox.confirm('删除成功！').then(action => {})
          } else {
            MessageBox.confirm('删除失败！').then(action => {})
            if (response.body.status == '10101') {
              this.$store.commit('logout', this)
              this.$store.commit('clearOpenedSubmenu')
              this.$router.push({
                name: 'login'
              })
              if (response.body.status == '10102') {
                this.$router.push({
                  name: 'error-403'
                })
              }
            }
          }
        })
    },
    initBinder() {
      this.binder = this.$store.state.binder
      this.init()
    }
  },
}
</script>
