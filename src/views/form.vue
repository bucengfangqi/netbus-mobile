<style>
div {
  display: block;
}
#allmap {
  width: 100%;
  height: 19rem;
}
.delImgClass {
  font-size: 0.75rem;
  background: #26a2ff;
  margin-top: 1px;
  text-align: center;
  color: #fff;
}
.fileWrap {
  margin-left: 5px;
}
#allmap {
  width: 100%;
  height: 19rem;
}
.delImgClass {
  font-size: 0.75rem;
  background: #26a2ff;
  margin-top: 1px;
  text-align: center;
  color: #fff;
}
.fileWrap {
  margin-left: 5px;
}
.people {
  margin-bottom: 0.75rem;
}
.peopleTitle {
  font-size: 0.75rem;
  line-height: 1rem;
  height: 1rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
}
.peopleWrap {
  margin-bottom: 0.75rem;
}
.butAdd {
  font-size: 0.875rem;
}
.bg {
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
<style scoped>
.mint-popup-bottom {
  bottom: 3%;
}
.scroll-wrapper {
  -webkit-overflow-scrolling: touch;
  overflow-y: scroll;
  /* 提示: 请在此处加上需要设置的大小(dimensions)或位置(positioning)信息! */
  width: 100%;
  height: 100%;
}
.disable {
  pointer-events: none;
}
#mapContainer {
  margin-top: 7rem;
  width: 100%;
  height: 15rem;
}

/* 地图图标 */
.amap-icon img {
  width: 1.5rem !important;
}
.amap-marker-content img {
  width: 25px;
  height: 34px;
}

.marker {
  position: absolute;
  top: -20px;
  right: -118px;
  color: #fff;
  padding: 4px 10px;
  box-shadow: 1px 1px 1px rgba(10, 10, 10, 0.2);
  white-space: nowrap;
  font-size: 12px;
  font-family: "";
  background-color: #25a5f7;
  border-radius: 3px;
}

.input-card {
  width: 18rem;
  z-index: 170;
}

.input-card .btn {
  margin-right: 0.8rem;
}

.input-card .btn:last-child {
  margin-right: 0;
}
</style>
<style scoped>
.radioList li {
  margin-top: 1rem;
  font-size: 0.85rem;
  float: left;
  line-height: 2rem;
  min-height: 2rem;
  margin-right: 1rem;
}
.radioList >>> .van-radio__label {
  display: inline;
}
.itemUrl {
  color: #0055e3;
}
.usertop.userform {
  position: relative;
}
.userlist.userlistfrom {
  margin-top: 0;
}
</style>
<template>
  <div class="bgf3">
    <div class="usertop">
      <div class="title">
        <i class="fl iconfont icon-jiantou5" @click="onClickLeft(busMenu)"></i>
        {{busMenu.menuname}}
        <div class="fr">
        </div>
      </div>
    </div>
    <dl class="userlist">
      <div v-for="tpl in cfgTplOptions " :key="tpl.id">
        <!-- 文本类型字段 -->
        <template v-if="tpl.type =='TEXT'&&tpl.hidden">
          <dt style="display: flex;">{{tpl.content}}
            <!-- 必填显示红点 -->
            <template v-if="tpl.nullable == '0'">
              <span style="color:red;">*</span>
            </template>
            <!-- 上方固定提示 -->
            <template v-if="tpl.fixeddisplay != null">
              <!-- 有跳转链接 -->
              <template v-if="tpl.arg != null">
                <a class="itemUrl" @click="onClickPop(tpl.arg,tpl.fixeddisplay)" v-html="tpl.fixeddisplay">
                  <!-- <p class="itemUrl" v-html="tpl.fixeddisplay"></p> -->
                </a>
              </template>
              <!-- 无跳转链接 -->
              <template v-else>
                <a class="itemUrl" v-html="tpl.fixeddisplay"></a>
              </template>
            </template>:
            <!-- 切换按钮，用户自定义 -->
            <template v-if="tpl.nullable == 2">
              <mt-switch v-model="tpl.selectKey"></mt-switch>
            </template>
          </dt>
          <!-- 如果没有行参数或0就显示一行输入框 -->
          <template v-if="tpl.typearg == null || tpl.typearg == '' || tpl.typearg == 0  ">
            <!-- 可编辑字段，必须判断选中状态才渲染-->
            <template v-if="tpl.editable == 1 && tpl.selectKey == true">
              <dd><input type="text" class="input" :placeholder="tpl.hint" v-model="tpl.value" /></dd>
            </template>
            <!-- 不可编辑字段，必须判断选中状态才渲染 -->
            <template v-else-if="tpl.editable == 0 && tpl.selectKey == true">
              <dd><input type="text" class="input" disabled :placeholder="tpl.hint" v-model="tpl.value" /></dd>
            </template>
          </template>
          <!-- 如果有行参数就显示对应参数数量的行数的输入框-->
          <template v-else>
            <!-- 可编辑字段，必须判断选中状态才渲染-->
            <template v-if="tpl.editable == 1 && tpl.selectKey == true">
              <dd>
                <van-field v-model="tpl.value" type="textarea" :rows="tpl.typearg" autosize class="input" style="color: #7f8c8d;" :placeholder="tpl.hint" />
              </dd>
            </template>
            <!-- 不可编辑字段，必须判断选中状态才渲染-->
            <template v-else-if="tpl.editable == 0 && tpl.selectKey == true">
              <dd>
                <van-field v-model="tpl.value" type="textarea" :rows="tpl.typearg" autosize class="input" style="color: #7f8c8d;" :placeholder="tpl.hint" disabled />
              </dd>
            </template>
          </template>
        </template>

        <!-- 数字类型字段 -->
        <template v-if="tpl.type =='NUMBER'&&tpl.hidden">
          <dt style="display: flex;">{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template><template v-if="tpl.beginlimit != null && tpl.beginlimit !=0 ">(最小值：{{tpl.beginlimit}}</template><template v-if="tpl.endlimit != null && tpl.beginlimit !=0">最大值：{{tpl.endlimit}})</template>:&nbsp;&nbsp;&nbsp;
            <template v-if="tpl.nullable == 2">
              <mt-switch v-model="tpl.selectKey"></mt-switch>
            </template>
          </dt>
          <template v-if="tpl.editable == 1 && tpl.selectKey == true">
            <dd><input type="number" class="input" :placeholder="tpl.hint" :min="tpl.beginlimit" :max="tpl.endlimit" v-model="tpl.value" /></dd>
          </template>
          <template v-else-if="tpl.editable == 0 && tpl.selectKey == true">
            <dd><input type="number" class="input" disabled :placeholder="tpl.hint" v-model="tpl.value" /></dd>
          </template>
        </template>

        <!-- SWITCH切换按钮类型字段 -->
        <template v-if="tpl.type =='SWITCH'&&tpl.hidden">
          <dt style="display: flex;">{{tpl.content}}
            <!-- 必填字段 -->
            <template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>
          </dt>
          <!-- 关联字段start -->
          <template v-if="tpl.typearg">
            <ul class="itemslist">
              <li v-for="select in radios[tpl.typearg]" style="overflow: hidden;width: 50%;text-align: left;text-overflow: ellipsis;white-space: nowrap;">
                <mt-switch v-model="select.value">{{select.name}}</mt-switch>
              </li>
            </ul>
          </template>
          <!-- 关联字段end -->
          <!-- 没有关联字段 start-->
          <template v-else>
            <!-- 可编辑字段，必须判断选中状态才渲染 -->
            <template v-if="tpl.editable == 1 && tpl.selectKey == true">
              <mt-switch v-model="tpl.value"></mt-switch>
            </template>
            <!-- 不可编辑字段，必须判断选中状态才渲染 -->
            <template v-else-if="tpl.editable == 0 && tpl.selectKey == true">
              <mt-switch v-model="tpl.value" disabled></mt-switch>
            </template>
          </template>
          <!-- 没有关联字段end -->
        </template>
        <!-- 身份证类型字段 -->
        <template v-if="tpl.type =='IDCARD'&&tpl.hidden">
          <dt style="display: flex;">
            {{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:
            &nbsp;&nbsp;&nbsp;<template v-if="tpl.nullable == 2">
              <mt-switch v-model="tpl.selectKey"></mt-switch>
            </template>
          </dt>
          <!-- 可编辑字段，必须判断选中状态才渲染-->
          <template v-if="tpl.editable == 1 && tpl.selectKey == true ">
            <dd>
              <input type="text" class="input" :placeholder="tpl.hint" v-model="tpl.value">
              <template v-if="companyCode == 'yh' || companyCode == 'cz'">
                <div @click="idcardIdentify()" class="input" size="small" style="width: 14.7%;text-align: center;line-height: 18px;font-size: 16px;background-color: white;color: #26a2ff;position: absolute;right: 0;top: 0;">
                  <van-icon size="1.31rem" name="idcard" style="top: 2px;" />
                </div>
              </template>
            </dd>
          </template>
          <!-- 不可编辑字段，必须判断选中状态才渲染-->
          <template v-else-if="tpl.editable == 0 && tpl.selectKey == true ">
            <dd>
              <input type="text" class="input" disabled :placeholder="tpl.hint" v-model="tpl.value">
              <template v-if="companyCode == 'yh' || companyCode == 'cz'">
                <div @click="idcardIdentify()" class="input" size="small" style="width: 14.7%;text-align: center;line-height: 18px;font-size: 16px;background-color: white;color: #26a2ff;position: absolute;right: 0;top: 0;">
                  <van-icon size="1.31rem" name="idcard" style="top: 2px;" />
                </div>
              </template>
            </dd>
          </template>

          <template>
            <mt-popup v-model="popupVisible5" position="center" closeOnClickModal="true" popup-transition="popup-fade" style="width:100%;height:100%;border-radius:2px;">
              <div class="usertop" style="height: 9rem;">
                <div class="title">
                  <i class="fl iconfont icon-jiantou5" @click="onClickLeft2"></i>
                  身份证识别
                  <div class="fr">
                  </div>
                </div>
              </div>
              <div style="position:absolute;margin-top:20px;margin-left:5%;width:100%;">
                <span>1.拍照请参照样例拍取身份证正面，保持文字清晰，<br>&nbsp;&nbsp;&nbsp;相机四周对准身份证边缘<br></span>
                <span>2.点击下图样例拍照</span>
              </div>
              <div style="position:relative;margin-top:25%;width:100%;text-align:center;">
                <!--<img :src="idcardImg" style="width:70%;height:200px;">-->
                <van-uploader :after-read="onTarget" accept="image/*" capture="camera" :arg="tpl" style="width:90%;height:200px;border: 1px solid #f2f2f2;">
                  <label>
                    <ul>
                      <li v-if="isShowIdcardImg">
                        <img :src="idcardImg" alt="" style="width:90%;height:200px;">
                      </li>
                      <li v-else>
                        <img src="@/assets/img/idcardImg.jpg" alt="选择图片" style="width:90%;height:200px;">
                      </li>
                    </ul>
                  </label>
                </van-uploader>

              </div>

              <div style="position:relative;margin-top:5%;width:100%;text-align:center;">
                <span style="color:red;">{{identifyMessage}}</span>
              </div>

              <div style="position:relative;margin-top:10%;width:100%;text-align:center;">
                <mt-button type="primary" @click="sendIdcardImg" :disabled="isClickSendIdcardImgBtn">识别图片</mt-button>
              </div>
            </mt-popup>
          </template>
        </template>

        <!-- 手机号码类型字段 -->
        <template v-if="tpl.type =='PHONE'&&tpl.hidden">
          <dt style="display: flex;">{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:&nbsp;&nbsp;&nbsp;
            <template v-if="tpl.nullable == 2">
              <mt-switch v-model="tpl.selectKey"></mt-switch>
            </template>
          </dt>
          <template v-if="tpl.editable == 1 && tpl.selectKey == true">
            <dd>
              <input type="number" class="input" style="width: 85%;" ref="phone" :placeholder="tpl.hint" v-model="tpl.value">
              <template>
                <div @click="getphone(tpl)" class="input" size="small" style="width: 14.7%;text-align: center;line-height: 18px;font-size: 16px;background-color: white;color: #26a2ff;position: absolute;right: 0;top: 0;height: 100%;">
                  <van-icon size="1.31rem" name="phone" style="top: 2px;" />
                </div>
              </template>
            </dd>
          </template>
          <template v-else-if="tpl.editable == 0 && tpl.selectKey == true">
            <dd>
              <input type="number" class="input" style="width: 85%;" ref="phone" disabled :placeholder="tpl.hint" v-model="tpl.value">
              <template>
                <div @click="getphone(tpl)" class="input" size="small" style="width: 14.7%;text-align: center;line-height: 18px;font-size: 16px;background-color: white;color: #26a2ff;position: absolute;right: 0;top: 0;height: 100%;">
                  <van-icon size="1.31rem" name="phone" style="top: 2px;" />
                </div>
              </template>
            </dd>
          </template>
        </template>

        <!--日期类型字段  -->
        <template v-if="tpl.type =='DATE'&&tpl.hidden">
          <dt>{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:</dt>
          <template v-if="tpl.editable == 0">
            <dd>
              <input type="text" class="input xiala" disabled :placeholder="tpl.hint" v-model="tpl.value" />
            </dd>
          </template>
          <template v-else>
            <dd @click="openDatePicker(tpl)">
              <input type="text" class="input xiala" disabled :placeholder="tpl.hint" v-model="tpl.value" />
            </dd>
          </template>
          <mt-datetime-picker :ref="tpl.fieldname" type="date" v-model="tpl.pickerValue" :startDate='tpl.begindate' :endDate='tpl.enddate' year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleDatePickerConfirm(tpl)" @cancel="cancelDate()"></mt-datetime-picker>
        </template>
        <!-- 下拉选项类型字段 -->
        <template v-if="tpl.type =='SELECT'&&tpl.hidden">
          <dt>{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:</dt>
          <dd>
            <div @click="showtime(tpl)">
              <input type="text" disabled class="input xiala" v-model="tpl.name" />
            </div>
          </dd>
          <mt-popup v-model="showFlag[tpl._key]" position="bottom" class="mint-popup" style="width:100%">
            <van-picker :ref="tpl._key" show-toolbar :columns="selects" value-key="value" @change="onChange" :default-index="tpl.valueIndex||0" @cancel="onCancel(tpl)" @confirm="onConfirm" />
          </mt-popup>
        </template>
        <!-- 单选类型字段 -->
        <template v-if="tpl.type =='RADIO'&&tpl.hidden">
          <div class="clear"></div>
          <dt style="display: flex;">{{tpl.content}}
            <template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>
            <!-- 上方固定提示 -->
            <template v-if="tpl.fixeddisplay != null">
              <!-- 有跳转链接 -->
              <template v-if="tpl.arg != null">
                <a class="itemUrl" @click="onClickPop(tpl.arg,tpl.fixeddisplay)" v-html="tpl.fixeddisplay">
                  <!-- <p class="itemUrl" v-html="tpl.fixeddisplay"></p> -->
                </a>
              </template>
              <!-- 无跳转链接 -->
              <template v-else>
                <a class="itemUrl" v-html="tpl.fixeddisplay"></a>
              </template>
            </template>:</dt>
          <dd>
            <div>
              <ul class="radioList">
                <van-radio-group v-model="tpl.value" :disabled="tpl.disabled" :ref="tpl.fieldname">
                  <li v-for="select in radios[tpl.typearg]" style="text-align: left;" @click="cancelop(tpl)">
                    <van-radio :name="select.name" style="line-height: 1em;margin-bottom: 5px;">{{select.value}}</van-radio>
                  </li>
                </van-radio-group>
              </ul>
            </div>
            <div class="clear"></div>
          </dd>
        </template>
        <!-- 图片上传类型字段 -->
        <template v-if="tpl.type =='FILE'&&tpl.hidden">
          <dt style="display: flex;">{{tpl.content}}
            <template v-if="tpl.nullable == '0'">
              <span style="color:red;">*</span>
            </template>
            <!-- 上方固定提示 -->
            <template v-if="tpl.fixeddisplay != null">
              <!-- 有跳转链接 -->
              <template v-if="tpl.arg != null">
                <a class="itemUrl" @click="onClickPop(tpl.arg,tpl.fixeddisplay)" v-html="tpl.fixeddisplay">
                  <!-- <p class="itemUrl" v-html="tpl.fixeddisplay"></p> -->
                </a>
              </template>
              <!-- 无跳转链接 -->
              <template v-else>
                <a class="itemUrl" v-html="tpl.fixeddisplay"></a>
              </template>
            </template>:</dt>
          <dd>
            <van-uploader :after-read="onRead" accept="image/*" @oversize="OverUpload()" style="text-align:center;border: 1px solid #c7c2c2;" :arg="tpl">
              <label class="file"><img src="@/assets/img/file.png" alt=""></label>
            </van-uploader>
            <label class="fileWrap" v-for="(ii,index) in imgdata[tpl.fieldname]" :key="index">
              <div class="file"> <img :src="ii.content" alt="" @click.stop="previewImg(tpl.fieldname,ii)"></div>
              <div>
                <div class="delImgClass" :class="{disable:divdisable}" @click.stop="delimg(tpl.fieldname,ii)">删除</div>
              </div>

              <mt-popup v-model="popupVisible" :ref="tpl.fieldname" class="mint-popup" style="width:100%;;">
                <img alt="" :src="preview" style="width:100%;height:100%;" @click.stop="cancelPreview(tpl.fieldname)" />
              </mt-popup>
            </label>

            <label class="file fileWrap" v-if="img.field == tpl.fieldname" v-for="img in uploadList">
              <div><img :src="FilePath(img.filename)" alt="" @click.stop="previewOldImg(img)"></div>
              <mt-popup v-model="popupVisible" :ref="img.filename" class="mint-popup" style="width:100%;;">
                <img alt="" :src="showimg" style="width:100%;height:100%;" @click.stop="cancelPreview(img.filename)" />
              </mt-popup>
            </label>
          </dd>
        </template>

        <!-- 定位类型字段 -->
        <template v-if="tpl.type =='GPSMAP'&&tpl.hidden">
          <dt>{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:</dt>
          <dd>
            <template>
              <van-cell-group>
                <van-field v-model="gpsPosition" type="textarea" :rows="tpl.typearg?tpl.typearg:0" autosize class="input" style="width: 85%;color: #7f8c8d;height:3.1rem;" />
              </van-cell-group>
              <div @click="positioning()" class="input" size="small" style="width: 14.7%;text-align: center;font-size: 1rem;height:3.1rem;background-color: white;color: #26a2ff;position: absolute;right: 0;top: 0;">
                <van-icon size="25px" name="location" style="top: 0.375rem;" />
              </div>
              <!-- 点击结束 -->
              <mt-popup v-model="popupVisible4" position="center" closeOnClickModal="true" popup-transition="popup-fade" style="width:100%;height:100%;border-radius:2px;">
                <div class="usertop" style="height: 7rem;">
                  <div class="title">
                    <i class="fl iconfont icon-jiantou5" @click="onClickLeft2"></i>
                    <div style="font: bold 1.2em Brush Script MT;text-shadow: 0px 2px 3px #666;padding: 5%;">{{tpl.content}}</div>
                    <div class="fr">

                    </div>
                  </div>
                </div>
                <!-- 头部结束 -->
                <div class="mapContant">
                  <div class="home" style="margin-bottom: 10px;">
                    <!-- <img src="../img/poi.png" style="margin-top: 6.5rem;margin-left: 44%;position: fixed;z-index: 300;"> -->
                    <div id="mapContainer"></div>
                  </div>
                  <template v-if="pois&&pois.length>0">
                    <van-cell-group style="padding-bottom: 3rem;overflow: scroll;height: 38%;position: absolute;width:100%">
                      <van-cell v-for=" poi in pois" :title="poi.name" clickable @click="checkPoi(poi,tpl)" :label="poi.name2">
                        <van-icon slot="right-icon" name="check" class="van-cell__right-icon" />
                      </van-cell>
                    </van-cell-group>
                  </template>
                </div>
              </mt-popup>
            </template>
          </dd>
        </template>
        <!-- 定位end -->
        <!-- 多人口类型字段 -->
        <template v-if="tpl.type =='PEOPLE'&&tpl.hidden">
          <dt>{{tpl.content}}<template v-if="tpl.nullable == '0'"><span style="color:red;">*</span></template>:</dt>
          <dd>
            <div class="peopleWrap">
              <div v-for=" it in people" :key="it" class="people">
                <van-cell-group>
                  <van-field v-model="it.name" required clearable label="姓名" placeholder="请输入姓名" />
                  <van-field v-model="it.idcard" required label="身份证" placeholder="请输入身份证" clearable />
                </van-cell-group>
                <div class="peopleTitle">身份证或户口本照片：</div>
                <van-uploader :after-read="peopleOnRead" accept="image/*" style="text-align:center;border: 1px solid #c7c2c2;" :arg="it.t">
                  <label class="file"><img src="@/assets/img/file.png" alt=""></label>
                </van-uploader>
                <label class="fileWrap" v-if="img.peopleid == it.id" v-for="img in uploadList">
                  <div><img :src="peopleFilePath(img.name)" alt="" @click.stop="previewOldImg(img)"></div>
                  <mt-popup v-model="popupVisible" :ref="img.filename" class="mint-popup" style="width:100%;;">
                    <img alt="" :src="showimg" style="width:100%;height:100%;" @click.stop="cancelPreview(img.filename)" />
                  </mt-popup>
                </label>
                <label class="fileWrap" v-for="(ii,index) in imgdata[it.t]" :key="index">
                  <div class="file"><img :src="ii.dimg" alt="" @click.stop="previewImg(it.t,ii)"></div>
                  <div class="delImgClass" :class="{disable:divdisable}" @click.stop="delimg(it.t,ii)">删除</div>
                </label>
                <mt-popup v-model="popupVisible" :ref="tpl.fieldname" class="mint-popup" style="width:100%;;">
                  <img alt="" :src="preview" style="width:100%;height:100%;" @click.stop="cancelPreview(tpl.fieldname)" />
                </mt-popup>
              </div>
              <br />
              <mt-button type="primary" @click="addPeople">添加成员</mt-button>
              <mt-button type="primary" @click="delPeople(people)">减少成员</mt-button>
            </div>
          </dd>
        </template>
      </div>
      <dt>&nbsp;</dt>
      <dd>
        <mt-button type="primary" style="width:100%" @click="submit">提交</mt-button>
      </dd>
      <dd><span v-html="busMenu.tiptext"></span></dd>
      <br />
      <template v-if="showRecords && showRecords == '1'">
        <template v-for=" record in records">
          <dd style="text-align: center;font-size: 14px;font-weight: bold;"><span>{{record}}</span></dd>
        </template>
      </template>
    </dl>
    <mt-popup v-model="popupVisible3" position="right" closeOnClickModal="false" style="width:100%;height:100%;z-index: 300;">
      <div class="usertop">
        <div class="title">
          <i class="fl iconfont icon-jiantou5" @click="onClickLeft2"></i>
          {{sontitle}}
          <div class="fr">
          </div>
        </div>
      </div>
      <div class="scroll-wrapper">
        <iframe style="width:100%;height:100%;margin-top:7rem" :src="url" id="show-iframe" frameborder=0 name="showHere" scrolling=auto></iframe>
      </div>
    </mt-popup>
    <mt-popup v-model="popupVisible6" :closeOnClickModal="false" class="mint-popup" popup-transition="popup-fade" style="width:95%;height:95%;border-radius:2px;overflow: scroll;text-align: -webkit-center;z-index: 30000;">
      <div style="width: 95%">
        <span v-html="busscontent"></span>
        <div style="width:80%;margin-bottom: 50px;">
          <div style="margin: 10px;">
            <mt-button type="primary" size="large" @click="agree">同意</mt-button>
          </div>
          <div style="margin: 10px;">
            <mt-button type="primary" size="large" @click="disagree">不同意</mt-button>
          </div>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import { Indicator } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import { DatetimePicker } from 'mint-ui'
import { Button } from 'mint-ui'
import { Popup } from 'mint-ui'
import { RadioGroup, Radio } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Switch } from 'mint-ui'
import { Icon } from 'vant'
import { Field } from 'vant'
import { Picker } from 'vant'

Vue.use(Picker)
Vue.use(Field)
Vue.use(Icon)
Vue.component(Switch.name, Switch)
Vue.use(Cell).use(CellGroup)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Button.name, Button)
Vue.component(Popup.name, Popup)

import FileComponent from '@/components/filecomponent.vue'
import { logService } from '../plugins/logservice'
Vue.component('van-uploader', FileComponent)

export default {
  data() {
    return {
      divdisable: false,
      radio: '',
      busMenu: {},
      showFlag: {},
      nameKey: {},
      currentItem: [],
      currentValue: '',
      popupVisible: false,
      popupVisible2: false,
      popupVisible3: false,
      popupVisible4: false,
      popupVisible5: false,
      isShowIdcardImg: false,
      isClickSendIdcardImgBtn: false,
      pickerValue: '',
      cfgTplOptions: [],
      cfgTemplate: {},
      items4: [],
      selects: [],
      dict: {},
      imgdata: {},
      idcardImg: null,
      idcardImgData: null,
      identifyMessage: '',
      temp: '', // 中间数据过度
      preview: '',
      showimg: '',
      binder: {},
      busid: '', //修改传递的busid
      uploadList: [], //已提交图片数组
      dataVal: '',
      begindate: '',
      enddate: '',
      radios: [],
      url: '',
      sontitle: '',
      type: 'tab',
      address_detail: null,
      center: { lng: 116.40387397, lat: 39.91488908 },
      gpsPosition: '',
      companyCode: '',
      pois: [],
      poicode: '', //临时定位信息
      tempValue: '',
      dimgdata: [],
      idcardImgField: {},
      idcardImgFile: null,
      updatedata: '', //修改的数据
      updateimg: [], //修改图片数据
      people: [],
      peoples: [], //常住人口信息
      peoplepics: [], // 常住人口图片
      currentmenu: {}, //当前菜单对象
      popupVisible6: false,
      busscontent: '',
      menus: [],
      records: [], //表单底部文字
      showRecords: '', //是否显示底部文字
      tempFile: {}, //上传成功返回的图片数据
      isPeople: false, //是否是人口登记菜单
      source: '', //用户通道来源
      Dateshow: false
    }
  },
  filters: {
    formatDate(time) {
      var d
      if (time == null || time == '' || time == undefined) {
        d = new Date()
      } else {
        d = new Date(time)
      }
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      return times
    }
  },
  beforeCreate: function() {
    if (this.$store.state.companyCode.value == 'yh') {
      this.$store.commit('setshow', 0)
    }
    if (this.$store.state.companyCode.value == 'wj') {
      this.$store.commit('setshow', 1)
    }
  },
  methods: {
    cancelDate() {
      this.Dateshow = false
    },
    onChange(picker, values) {},
    onConfirm(value, index) {
      Vue.set(this.currentItem, 'value', value.name)
      Vue.set(this.currentItem, 'name', value.value)
      this.showFlag = {}
    },
    onCancel(tpl) {
      Vue.set(this.currentItem, 'value', '')
      Vue.set(this.currentItem, 'name', '')
      this.showFlag = {}
    },
    peopleOnRead(file, arg) {
      if (file == null) return
      if (this.imgdata[arg] == null) {
        this.$set(this.imgdata, arg, [])
      }
      if (file.length) {
        for (var i = 0; i < file.length; i++) {
          var f = { content: '', link: arg, dimg: '' }
          f.content = file[i].content
          f.type = file[i].file.type
          this.decodeImg(f, arg)
        }
      } else {
        var f = { content: '', link: arg, dimg: '' }
        f.content = file.content
        f.type = file.file.type
        this.decodeImg(f, arg)
      }
    },
    addPeople() {
      this.people.push({ t: 's' + this.people.length })
    },
    delPeople(item) {
      this.uploadList.splice(this.people.indexOf(item), 1)
      this.people.splice(this.people.length - 1, 1)
      var flag = new Date().getTime()
      // 遍历数组的t，吧this.imgdata中对应的flag设置为当前时间
      item.map(item => {
        if (
          this.imgdata[item.t] &&
          Object.keys(this.imgdata[item.t]).length > 0
        ) {
          this.imgdata[item.t].flag = flag
        }
      })
      // 遍历对象，如果flag不是当前时间，这说明这个图片已经被删除了，就delete掉
      Object.keys(this.imgdata).map(key => {
        if (this.imgdata[key].flag !== flag) {
          delete this.imgdata[key]
        }
      })
    },
    peopleFilePath(name) {
      return '/netbus/buss/peoplePhoto?imgName=' + name
    },
    showTip() {
      if (this.busMenu.needbind == '1') {
        if (this.binder == null || !this.binder.hh) {
          MessageBox.confirm('你未绑定任何户号，请先绑定户号!', {
            showCancelButton: false,
            closeOnClickModal: false
          }).then(action => {
            this.$router.push('/bind')
          })
        } else {
          let param = {
            hh: this.binder.hh,
            menuid: this.busMenu.id
          }
          this.$http
            .post('/mobile/cust/checkHhArrearage', null, { params: param })
            .then(function(response) {
              if (response.body.status == 1) {
                if (response.body.content.code == 0) {
                  if (this.$store.state.params.arrearageControl.value == '0') {
                    //0 都可以办理
                    this.busscontent = this.busMenu.busscontent
                    if (this.busscontent != null) {
                      this.popupVisible6 = true
                    } else {
                      return
                    }
                  } else if (
                    this.$store.state.params.arrearageControl.value == '1'
                  ) {
                    //1 必须交费才可以办理
                    var msgstr = response.body.content.message
                    MessageBox.confirm(msgstr, {
                      confirmButtonText: '缴费',
                      cancelButtonText: '等会儿再去'
                    }).then(action => {
                      Vue.nextTick(() => Indicator.close())
                      this.getPayUrl()
                    })
                  } else if (
                    this.$store.state.params.arrearageControl.value == '2'
                  ) {
                    //2 提醒但是可以继续
                    var msgstr = response.body.content.message
                    MessageBox.confirm(msgstr, {
                      confirmButtonText: '缴费',
                      cancelButtonText: '等会儿再去'
                    }).then(action => {
                      Vue.nextTick(() => Indicator.close())
                      this.getPayUrl()
                    })

                    this.busscontent = this.busMenu.busscontent
                    if (this.busscontent != null) {
                      this.popupVisible6 = true
                    } else {
                      return
                    }
                  } else {
                    //未配置：缴费控制参数mobile.ui.arrearage.control
                    var msgstr = response.body.content.message
                    MessageBox.confirm(msgstr, {
                      confirmButtonText: '缴费',
                      cancelButtonText: '等会儿再去'
                    }).then(action => {
                      Vue.nextTick(() => Indicator.close())
                      this.getPayUrl()
                    })
                  }
                } else if (response.body.content.code == 1) {
                  //该户号无欠费
                  this.busscontent = this.busMenu.busscontent
                  if (this.busscontent != null) {
                    this.popupVisible6 = true
                  } else {
                    return
                  }
                }
              } else {
                MessageBox('提示', response.body.message).then(action => {
                  Vue.nextTick(() => Indicator.close())
                })
              }
            })
        }
      } else {
        this.busscontent = this.busMenu.busscontent
        if (this.busscontent != null) {
          this.popupVisible6 = true
        } else {
          return
        }
      }
    },
    getPayUrl() {
      //支付宝内：跳转到交水费页面。微信内：跳转到交水费页面
      let param = {
        channel: this.$store.state.cstUserChannel.source,
        billkey: this.$store.state.binder.hh
      }
      this.$http
        .post('/getPayUrl', null, { params: param })
        .then(function(response) {
          if (response.body.status == '1') {
            window.open(response.body.content)
          } else {
            MessageBox('提示', response.body.message).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
          }
        })
    },
    agree() {
      this.popupVisible6 = false
    },
    disagree() {
      this.popupVisible6 = false
      this.$router.push('/')
    },
    init() {
      var selects = []
      var radios = []
      var menuid = this.$store.state.currentMenuId //获取菜单id
      this.records = this.$store.state.records
      this.showRecords = this.$store.state.showRecords
      this.menus = this.$store.state.menus
      if (this.$route.query.menuid) {
        menuid = this.$route.query.menuid
        this.$store.commit('setquery', this.$route.query.menuid)
        this.$store.commit('setcurrentMenuId', menuid)
      }
      logService({ opname: 'form', type: menuid })
      if (
        this.$store.state.bussData &&
        this.$store.state.bussData != null &&
        this.$store.state.bussData != ''
      ) {
        this.updatedata = JSON.parse(this.$store.state.bussData)
      }
      new Promise((resolve, reject) => {
        this.$http
          .post('/mobile/menu/getTpl', { id: menuid })
          .then(response => {
            if (response.body.status == 1) {
              this.busMenu = response.body.content.busMenu
              this.cfgTplOptions = response.body.content.cfgTplOptions.map(
                (item, index) => {
                  item['_key'] = `${item.id}_${index}`
                  if (item.hiddenChannel != null && item.hiddenChannel != '') {
                    if (item.hiddenChannel.indexOf(this.source) != '-1') {
                      this.$set(item, 'hidden', false)
                    } else {
                      this.$set(item, 'hidden', true)
                    }
                  } else {
                    this.$set(item, 'hidden', true)
                  }
                  if (item.type == 'DATE') {
                    this.$set(item, 'begindate', '')
                    this.$set(item, 'enddate', '')
                    this.$set(item, 'pickerValue', '')
                  }
                  return item
                }
              )
              this.cfgTemplate = response.body.content.cfgTemplate
              for (var item of this.cfgTplOptions) {
                if (item.type == 'PEOPLE') {
                  this.isPeople = true
                }
                if (this.updatedata) {
                  if (item.type == 'PEOPLE') {
                    this.$http
                      .post('/buss/get', { id: this.updatedata.id })
                      .then(function(response) {
                        if (response.body.status == 1) {
                          if (response.body.mapItems) {
                            this.people = response.body.mapItems.people
                            this.peoplepics = response.body.mapItems.peoplepic
                            for (var i = 0; i < this.people.length; i++) {
                              this.$set(this.people[i], 't', 's' + i)
                            }
                            this.peoplepics.forEach(element => {
                              this.uploadList.push(element)
                            })
                          }
                        }
                      })
                  }
                  var fieldname = item.fieldname
                  var value = this.updatedata[fieldname]
                  this.nameKey[fieldname] = { key: value }
                  this.$set(item, 'value', value) //赋值
                  if (item.type == 'SELECT') {
                    this.$set(item, 'name', value)
                  }
                  if (item.type == 'FILE') {
                    this.$set(item, 'value', '')
                  }
                  if (item.type == 'GPSMAP') {
                    this.gpsPosition = value
                  }
                  if (item.type == 'DATE') {
                    if (item.endlimit >= 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.endlimit)
                      item.enddate = date
                    }
                    if (item.endlimit == null) {
                      let date = new Date()
                      date.setFullYear(date.getFullYear() + 10)
                      item.enddate = date
                    }
                    if (item.endlimit < 0) {
                      let date = new Date()
                      item.enddate = date
                    }
                    if (item.beginlimit >= 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.beginlimit)
                      item.begindate = date
                    }
                    if (item.beginlimit < 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.beginlimit)
                      item.begindate = date
                    }
                    if (item.beginlimit == null) {
                      let date = new Date()
                      item.begindate = date
                    }
                    item.pickerValue = value //赋值
                  }
                } else {
                  if (this.$store.state.binder != null) {
                    if (item.fill != '') {
                      var fname = item.fill
                      this.$set(item, 'value', this.$store.state.binder[fname])
                    }
                  } else {
                    this.pickerValue = new Date()
                    this.$set(item, 'value', '')
                  }
                  if (item.type == 'NUMBER') {
                    if (item.beginlimit != 0) {
                      this.$set(item, 'value', item.beginlimit)
                    }
                  }
                  if (item.type == 'SWITCH') {
                    this.$set(item, 'value', false)
                  }
                  if (item.type == 'DATE') {
                    if (item.endlimit >= 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.endlimit)
                      item.enddate = date
                    }
                    if (item.endlimit == null) {
                      let date = new Date()
                      date.setFullYear(date.getFullYear() + 10)
                      item.enddate = date
                    }
                    if (item.endlimit < 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.endlimit)
                      item.enddate = date
                    }
                    if (item.beginlimit >= 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.beginlimit)
                      this.$set(item, 'value', this.formatDate(date))
                      item.begindate = date
                    }
                    if (item.beginlimit < 0) {
                      let date = new Date()
                      date.setDate(date.getDate() + item.beginlimit)
                      this.$set(item, 'value', this.formatDate(date))
                      item.begindate = date
                    }
                    if (item.beginlimit == null) {
                      let date = new Date()
                      this.$set(item, 'value', this.formatDate(date))
                      item.begindate = date
                    }
                    item.pickerValue = item.begindate
                  }
                }
                if (
                  item.type == 'FILE' &&
                  item.content.indexOf('身份证') != -1 &&
                  item.content.indexOf('产权人') != -1
                ) {
                  //获取身份证照片的 fieldname
                  this.idcardImgField = item
                }

                if (item.nullable == 2 && !item.fill) {
                  this.$set(item, 'selectKey', false)
                } else {
                  this.$set(item, 'selectKey', true)
                }
              }
              if (this.updatedata != null && this.updatedata.id) {
                //修改功能
                this.busid = this.updatedata.id
                var fd = new FormData()
                this.uploadList = []
                fd.append('busid', this.busid)
                this.$http
                  .post('/mobile/cust/getFilePath', fd)
                  .then(response => {
                    if (response.body.status == 1) {
                      this.uploadList = response.body.content
                    }
                  })
              }
              if (response.body.content.cfgTplOptions.length == 0) {
                MessageBox.alert('菜单被禁用或没有对应的表单模板配置').then(
                  action => {
                    Vue.nextTick(() => Indicator.close())
                    this.$router.push({ path: '/' })
                  }
                )
              }
              for (var i = 0; i < this.cfgTplOptions.length; i++) {
                var f = {
                  selects: []
                }
                if (this.cfgTplOptions[i].type == 'SELECT') {
                  selects.push(this.cfgTplOptions[i].typearg)
                }
                if (this.cfgTplOptions[i].type == 'RADIO') {
                  radios.push(this.cfgTplOptions[i].typearg)
                }
              }
              if (selects && selects.length > 0) {
                this.getDictionary({ classcodes: selects }, selects, 'selects')
              }
              if (radios && radios.length > 0) {
                this.getDictionary({ classcodes: radios }, radios, 'radios')
              }
              Indicator.close()
            } else {
              if (response.body.status == '10101') {
                this.$router.push({ name: 'login' })
              }
            }
          })
        Vue.nextTick(() => Indicator.close())
        resolve()
      }).then(() => {
        this.showTip()
      })
    },
    getDictionary(data, typeData, type) {
      //获取字典配置
      this.$http.post('/mobile/cust/getdict', data).then(response => {
        if (response.body.status == 1) {
          if (type == 'radios') {
            let radios = typeData
            var codes = radios
            radios = response.body.items
            for (let b = 0; b < codes.length; b++) {
              var temps = [
                {
                  flex: 1,
                  className: 'slot1',
                  textAlign: 'center'
                }
              ]
              var val = []
              var val2 = []
              for (let a = 0; a < radios.length; a++) {
                if (codes[b] == radios[a].classcode) {
                  var c = {
                    name: '',
                    value: ''
                  }
                  c.name = radios[a].itemname
                  c.value = radios[a].itemvalue
                  val.push(c)
                }
              }
              this.$set(this.radios, codes[b], val)
            }
          } else {
            let selects = typeData
            var codes = selects
            selects = response.body.items
            for (let b = 0; b < codes.length; b++) {
              var temps = [
                {
                  flex: 1,
                  values: [],
                  className: 'slot1',
                  textAlign: 'center'
                }
              ]
              var val = []
              var val2 = []
              for (let a = 0; a < selects.length; a++) {
                if (codes[b] == selects[a].classcode) {
                  var c = {
                    name: '',
                    value: ''
                  }
                  c.name = selects[a].itemname
                  c.value = selects[a].itemvalue
                  val.push(c)
                }
              }
              temps[0].values = val
              this.$set(this.dict, codes[b], temps)
            }
            for (var i = 0; i < this.cfgTplOptions.length; i++) {
              if (this.cfgTplOptions[i].typearg != null) {
                var arg = this.cfgTplOptions[i].typearg
                var fieldname = this.cfgTplOptions[i].fieldname
                this.cfgTplOptions[i].selects = this.dict[arg]
                var selectList =
                  (this.cfgTplOptions[i].selects &&
                    this.cfgTplOptions[i].selects[0].values) ||
                  []
                selectList.map((item, index) => {
                  if (item.value === this.cfgTplOptions[i].value) {
                    this.cfgTplOptions[i].valueIndex = index
                  }
                })
              }
            }
          }
        } else {
          if (response.body.status == '10101') {
            this.$router.push({ name: 'login' })
          }
        }
      })
    },
    cancelop(tpl) {
      if (this.tempValue == tpl.value && tpl.value) {
        tpl.value = ''
        this.tempValue = ''
      } else {
        this.tempValue = tpl.value
      }
    },
    onClickPop(url, title) {
      if (url.indexOf('|') != '-1') {
        let urlArray = url.split('|')
        if (urlArray[0] == 'd') {
          window.open(urlArray[1])
        } else {
          if (url != null) {
            this.url = url
          } else {
            this.url = ''
          }
          this.popupVisible3 = true
          this.sontitle = title
        }
      } else {
        if (url != null) {
          this.url = url
        } else {
          this.url = ''
        }
        this.popupVisible3 = true
        this.sontitle = title
      }
    },
    onClickLeft2() {
      this.$store.commit('setshow', 1)
      this.popupVisible3 = false
      this.popupVisible4 = false
      this.popupVisible5 = false

      this.idcardImg = null
      this.idcardImgFile = null
      this.isShowIdcardImg = false
      this.identifyMessage = ''
      Vue.nextTick(() => Indicator.close())
    },
    shownav() {
      if (this.$store.state.companyCode.value == 'yh') {
        this.$store.commit('setshow', 0)
      }
      if (this.$store.state.companyCode.value == 'wj') {
        this.$store.commit('setshow', 1)
      }
    },
    formatDate(time) {
      var d
      if (time == null || time == '' || time == undefined) {
        d = new Date()
      } else {
        d = new Date(time)
      }
      var times = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
      return times
    },
    onClickLeft(menu) {
      this.$store.commit('setinterceptor', 0)
      MessageBox.confirm('您确认放弃吗？', {
        confirmButtonText: '是的',
        cancelButtonText: '不是'
      })
        .then(action => {
          if (menu.pno != null) {
            this.$store.commit('setmenuidp', menu.pno) //传递父级菜单id
            this.$router.push('/middle')
            this.$store.commit('setinterceptor', 1)
          } else {
            this.$router.push('/')
            this.$store.commit('setinterceptor', 1)
          }
        })
        .catch(err => {
          this.$store.commit('setinterceptor', 1)
        })
    },
    showtime(picker) {
      var fieldname = picker.fieldname
      var thisKey = picker._key
      this.showFlag = { [thisKey]: true }
      this.currentItem = picker
      this.selects = picker.selects[0].values
      if (picker.value == '' || !picker.value) {
        this.$refs[thisKey][0].setColumnIndex(0)
      } else {
        this.$refs[thisKey][0].setValues([picker.value])
      }
      this.currentValue = this.currentValue
        ? this.currentValue
        : picker.selects[0].values[0]
      // if (!this.currentItem.name) {
      //   this.currentItem.name = picker.selects[0].values[0].name
      // }
    },
    getSameNum(val, arr) {
      processArr = arr.filter(function(value) {
        return value == val
      })
      return processArr.length
    },
    onRead(file, arg) {
      if (file == null) return

      if (this.imgdata[arg.fieldname] == null) {
        this.$set(this.imgdata, arg.fieldname, [])
      }
      if (file.length) {
        //数量超过1张
        if (arg.endlimit && file.length > arg.endlimit) {
          MessageBox.alert('图片数量不能超过' + arg.endlimit).then(action => {
            Vue.nextTick(() => Indicator.close())
          })
          return
        }
        file.forEach((element, index) => {
          var f = { content: '', link: arg.fieldname, dimg: '' }
          f.content = element.content
          f.type = element.file.type

          this.decodeImg(f, arg.fieldname)
        })
      } else {
        var f = { content: '', link: arg.fieldname, dimg: '' }
        f.content = file.content
        f.type = file.file.type
        this.decodeImg(f, arg.fieldname)
      }
    },
    onTarget(file, arg) {
      if (file == null) {
        this.idcardImg = null
      } else {
        var f = { content: '', link: arg.fieldname, dimg: '' }
        f.content = file.content
        f.type = file.file.type
        this.decodeIdcardImg(f, this.idcardImgField.fieldname)
        this.idcardImg = file.content
        this.idcardImgFile = file
        this.isShowIdcardImg = true
      }
    },
    decodeIdcardImg(f, key) {
      var image = new Image()
      var _this = this
      image.onload = function() {
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')

        var w = image.naturalWidth
        var h = image.naturalHeight

        var width = 1000
        var scale = w / 1000
        var height = h / scale

        canvas.width = width
        canvas.height = height
        context.drawImage(image, 0, 0, width, height)
        var img = canvas.toDataURL(f.type, 2)
        f.dimg = img
        img = img.split(',')[1]
        img = window.atob(img)
        var ia = new Uint8Array(img.length)
        for (var i = 0; i < img.length; i++) {
          ia[i] = img.charCodeAt(i)
        }

        var blob = new Blob([ia], { type: f.type })

        if (_this.dimgdata[key] == null) {
          _this.idcardImgData = null
          _this.$set(_this.dimgdata, key, [])
        }

        _this.idcardImgData = blob
        _this.dimgdata[key].push(blob)
      }
      image.src = f.content
    },
    decodeImg(f, key) {
      var image = new Image()
      var _this = this
      image.src = f.content
      var fd = new FormData()
      var con = ''
      if (
        this.$store.state.params.watermark &&
        this.$store.state.params.watermarkIs &&
        this.$store.state.params.watermarkIs.value == 1
      ) {
        con = this.$store.state.params.watermark.value
      }
      var cons = []
      if (con) {
        cons = con.split('|')
      }
      image.onload = () => {
        //水印
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')

        var w = image.naturalWidth
        var h = image.naturalHeight

        var width = 1000
        var scale = w / 1000
        var height = h / scale

        canvas.width = width
        canvas.height = height
        context.drawImage(image, 0, 0, width, height)
        //旋转Math.Atan2(b.Height, b.Width) / Math.PI * 180;
        context.rotate((Math.PI * cons[7]) / 180)

        if (cons.length > 0) {
          //水印
          /*
           * font参数的值分为
           * font-style: normal(正常), italic(斜体字), oblique(倾斜字体) 后两种在网页端一般没什么区别
           * font-variant: normal(正常), small-caps(英文小写字母变成小的大写)
           * font-weight: normal(正常), bold(加粗) 100-900(一般不用)
           * font-size: 文字大小
           * font-family: 字体样式
           */
          context.font = ' normal small-caps bold ' + cons[0] + 'px Verdana'
          // 创建渐变
          var gradient = context.createLinearGradient(0, 0, canvas.width, 0)
          gradient.addColorStop('0', cons[5])
          //gradient.addColorStop("0.5","#64b3f4");
          gradient.addColorStop('1.0', cons[6])
          context.fillStyle = gradient
          if (cons[2] && cons[2] == 1) {
            //水印加时间fillText，strokeText
            cons[1] += this.formatDate(new Date())
          }
          if (cons[7] && cons[7] == 1) {
            cons[3] = cons[0]
            cons[4] = 0

            // 绘制文字内容
            for (var p = 0; p < 4; p++) {
              for (var q = 0; q < 5; q++) {
                // 绘制文字  注意：：绘制斜体文字 旋转以后会发生位移，所以必须在旋转之后进行位置的调整；
                this.drawText(
                  context,
                  cons[1],
                  q * -cons[3],
                  -(cons[4] * p),
                  p * 800 + 200,
                  q * 250,
                  cons[7],
                  cons[0],
                  cons[5],
                  cons[6]
                )
              }
            }
            // for(i=0;i<5;i++){
            //     if(cons[2] &&  cons[2] ==1){  //水印加时间fillText，strokeText
            //        context.fillText(cons[1]+this.formatDate(new Date()),cons[3]+i*cons[0],cons[4]+i*cons[0]/2);
            //     }else{
            //        context.fillText(cons[1],cons[3]+i*cons[0],cons[4]+i*cons[0]/2);
            //     }
            //     context.save();//保存原来的状态  绘制字体都是需要旋转倾斜  那么之前绘制的图片就要进行状态的保存
            // }
          } else {
            context.fillText(cons[1], cons[3], cons[4])
          }
        }

        var img = canvas.toDataURL('image/jpeg', 0.92)
        f.dimg = img

        img = img.split(',')[1]
        img = window.atob(img)
        var ia = new Uint8Array(img.length)
        for (var i = 0; i < img.length; i++) {
          ia[i] = img.charCodeAt(i)
        }
        var blob = new Blob([ia], { type: f.type })
        _this.$set(blob, 'content', f.dimg)
        fd.append('link', key)
        fd.append('mfs', blob)
        _this.getFilePath(fd, f, key)
      }
    },
    getFilePath(data, f, key) {
      this.$http
        .post('/mobile/buss/upfile?v=' + Math.random() * 100, data)
        .then(response => {
          if (response.body.status == 1) {
            this.$set(f, 'id', response.body.content.id)
            this.imgdata[key].push(f)
          } else {
            MessageBox('提示', response.body.message)
          }
        })
    },
    drawText(ctx, text, tsx, tsy, x, y, angle, size, colorb, colore) {
      ctx.save() //保存原来的状态  绘制字体都是需要旋转倾斜  那么之前绘制的图片就要进行状态的保存
      //ctx.rotate(Math.PI * angle /180);//绘制倾斜字体
      ctx.rotate(Math.PI / 8) //绘制倾斜字体
      ctx.translate(tsx, tsy) //发生位移进行位移的恢复
      ctx.fillText(text, x, y)
      ctx.restore() //状态的恢复
    },
    delimg(key, img) {
      this.divdisable = true
      var index
      for (var xi in this.imgdata[key]) {
        if (this.imgdata[key][xi].content == img.content) {
          index = xi
        }
      }
      if (index) {
        var fd = new FormData()
        fd.append('id', this.imgdata[key][index].id)
        this.$http.post('/mobile/buss/deleteFile', fd).then(response => {
          if (response.body.status == 1) {
            this.imgdata[key].splice(index, 1)
            this.divdisable = false
          } else {
            MessageBox('提示', response.body.message).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
          }
        })
      }
    },
    FilePath(filename) {
      return '/netbus/buss/photo?name=' + filename
    },
    previewImg(key, img) {
      this.preview = ''
      this.showimg = ''
      var index
      for (var xi in this.imgdata[key]) {
        if (this.imgdata[key][xi].dimg == img.dimg) {
          index = xi
        }
      }

      var _this = this
      new Promise((resolve, reject) => {
        _this.preview = _this.imgdata[key][index].dimg
        resolve()
      }).then(d => {
        _this.popupVisible = true
      })
    },
    previewOldImg(key) {
      this.showimg = ''
      this.preview = ''
      this.popupVisible = true
      //this.showimg= "/buss/photo?id="+key.id;
      if (key.peopleid) {
        this.showimg = '/netbus/buss/peoplePhoto?imgName=' + key.name
      } else {
        this.showimg = '/netbus/buss/photo?name=' + key.filename
      }
    },
    cancelPreview(key) {
      this.popupVisible = false
    },
    openDatePicker(tpl) {
      var fieldname = tpl.fieldname
      this.currentItem = tpl
      this.$refs[fieldname][0].open()
      this.Dateshow = true
    },
    handleDatePickerConfirm(tpl) {
      //this.currentItem.value = this.formatDate(this.pickerValue);
      console.log(
        'this.formatDate(this.pickerValue)',
        this.formatDate(tpl.pickerValue)
      )

      Vue.set(this.currentItem, 'value', this.formatDate(tpl.pickerValue))
      this.$refs[this.currentItem.fieldname][0].close()
      this.Dateshow = false
    },
    IdentityCodeValid(code, name) {
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
      var tip = ''
      var pass = true
      //验证身份证格式（6个地区编码，8位出生日期，3位顺序号，1位校验位）
      if (
        !code ||
        !/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/i.test(
          code
        )
      ) {
        tip = '身份证格式错误'
        pass = false
      }
      if (!city[code.substr(0, 2)]) {
        tip = '身份证格式错误'
        pass = false
      }
      //18位身份证需要验证最后一位校验位
      if (code.length == 18) {
        code = code.split('')
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        var sum = 0
        var ai = 0
        var wi = 0
        for (var i = 0; i < 17; i++) {
          ai = code[i]
          wi = factor[i]
          sum += ai * wi
        }
        var last = parity[sum % 11]
        if (parity[sum % 11] != code[17]) {
          tip = '身份证格式错误'
          pass = false
        }
      }
      if (!pass)
        MessageBox.alert(name + tip).then(action => {
          Vue.nextTick(() => Indicator.close())
        })
      return pass
    },
    getphone(tpl) {
      this.currentItem = tpl
      if (this.$store.state.custid != null && this.$store.state.custid != '') {
        if (this.currentItem.value == null || this.currentItem.value == '') {
          this.$http
            .post('/mobile/cust/getPhone', { id: this.$store.state.custid })
            .then(response => {
              if (response.body.status == 1) {
                if (
                  response.body.content != null &&
                  response.body.content != ''
                ) {
                  Vue.set(this.currentItem, 'value', response.body.content)
                } else {
                  MessageBox.alert(
                    '自动获取失败，本系统未录入您的信息，请联系客服修改您的信息！'
                  ).then(action => {
                    Vue.nextTick(() => Indicator.close())
                  })
                }
              }
            })
        }
      } else {
        MessageBox.alert('未生成平台用户，请联系客服处理！').then(action => {
          Vue.nextTick(() => Indicator.close())
        })
      }
    },
    ready() {
      const me = this
      //console.log('地图设置')
      this.my_map = new AMap.Map('mapContainer', {
        resizeEnable: true,
        zoom: 16,
        center: [116.397428, 39.90923]
      })
      var map = this.my_map
      map.on('click', function(ev) {
        if (!me.marker) {
          return
        }
        // 触发事件的对象
        var target = ev.target
        // 触发事件的地理坐标，AMap.LngLat 类型
        var lnglat = ev.lnglat
        // 触发事件的像素坐标，AMap.Pixel 类型
        var pixel = ev.pixel
        // 触发事件类型
        var type = ev.type
        const { O, P } = lnglat
        me.addMarker(O, P, '')
        me.mapSearch(O, P)
      })
      var options = {
        showButton: true, //是否显示定位按钮
        buttonPosition: 'LB', //定位按钮的位置
        /* LT LB RT RB */
        buttonOffset: new AMap.Pixel(10, 20), //定位按钮距离对应角落的距离
        showMarker: true, //是否显示定位点
        markerOptions: {
          //自定义定位点样式，同Marker的Options
          offset: new AMap.Pixel(-18, -36),
          content:
            '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:1.6rem;height:1.6rem"/>',
          // 设置是否可以拖拽
          draggable: true,
          cursor: 'move',
          // 设置拖拽效果
          raiseOnDrag: true
        },

        showCircle: true, //是否显示定位精度圈
        circleOptions: {
          //定位精度圈的样式
          strokeColor: '#0093FF',
          noSelect: true,
          strokeOpacity: 0.5,
          strokeWeight: 1,
          fillColor: '#02B0FF',
          fillOpacity: 0.25
        }
      }
      //   mouseTool.marker({
      //     //同Marker的Option设置
      //   })
      AMap.plugin(['AMap.Geolocation'], function() {
        //console.log('定位配置')

        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 30000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: false, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        })
        map.addControl(geolocation)
        geolocation.getCurrentPosition()
        me.pois = [] //重置
        AMap.event.addListener(geolocation, 'complete', params => {
          //定位成功  新增图标
          const { O, P } = params.position
          //console.log('定位成功', O, P)
          me.addMarker(O, P, params.formattedAddress)
          me.mapSearch(O, P)
        })
        AMap.event.addListener(geolocation, 'error', function name(params) {
          alert('定位失败')
        })
      })
    },
    mapSearch(O, Q) {
      const me = this
      var cpoint = [O, Q] //中心点坐标
      if (me.placeSearch) {
        me.placeSearch.searchNearBy('', cpoint, 200, function(status, result) {
          me.pois = result.poiList.pois
        })
        return
      }
      AMap.service(['AMap.PlaceSearch'], function() {
        //构造地点查询类
        me.placeSearch = new AMap.PlaceSearch({
          // 兴趣点类别 餐饮服务
          pageSize: 5, // 单页显示结果条数
          pageIndex: 1, // 页码
          citylimit: false, //是否强制限制在设置的城市内搜索
          // map: me.my_map, // 展现结果的地图实例
          // panel: 'panel', // 结果列表将在此容器中进行展示。
          autoFitView: false // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范围
        })
        me.placeSearch.searchNearBy('', cpoint, 200, function(status, result) {
          me.pois = result.poiList.pois
        })
      })
    },
    addMarker(O, Q, formattedAddress) {
      //如果地图未初始化 一般不会触发
      if (!this.my_map) {
        alert('请稍等!')
        return
      }
      // 如果已经有坐标 就删除坐标
      if (this.marker) {
        this.my_map.remove(this.marker)
      }
      // 添加新的坐标
      this.marker = new AMap.Marker({
        position: new AMap.LngLat(O, Q),
        offset: new AMap.Pixel(-18, -36),
        content:
          '<img src="https://a.amap.com/jsapi_demos/static/resource/img/user.png" style="width:1.6rem;height:1.6rem"/>',
        title: formattedAddress
      })
      this.my_map.add(this.marker)
    },
    positioning() {
      this.ready(true)
      this.popupVisible4 = true
    },
    checkPoi(poi, tpl) {
      this.popupVisible4 = false
      //Vue.set(tpl,"value",poi.name+','+poi.value.x+","+poi.value.y); //含有经纬度
      Vue.set(tpl, 'value', poi.name)
      this.gpsPosition = poi.name
      this.local.latitude = poi.value.x
      this.local.longitude = poi.value.y
    },
    // checkPoi(poi, tpl) {
    //   this.popupVisible4 = false
    //   Vue.set(tpl, 'value', poi.name + ',' + poi.value.x + ',' + poi.value.y)
    //   this.gpsPosition = poi.name
    // },
    isEmojiCharacter(substring) {
      //判断输入的是否含有表情符号
      for (var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i)
        if (0xd800 <= hs && hs <= 0xdbff) {
          if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1)
            var uc = (hs - 0xd800) * 0x400 + (ls - 0xdc00) + 0x10000
            if (0x1d000 <= uc && uc <= 0x1f77f) {
              return true
            }
          }
        } else if (substring.length > 1) {
          var ls = substring.charCodeAt(i + 1)
          if (ls == 0x20e3) {
            return true
          }
        } else {
          if (0x2100 <= hs && hs <= 0x27ff) {
            return true
          } else if (0x2b05 <= hs && hs <= 0x2b07) {
            return true
          } else if (0x2934 <= hs && hs <= 0x2935) {
            return true
          } else if (0x3297 <= hs && hs <= 0x3299) {
            return true
          } else if (
            hs == 0xa9 ||
            hs == 0xae ||
            hs == 0x303d ||
            hs == 0x3030 ||
            hs == 0x2b55 ||
            hs == 0x2b1c ||
            hs == 0x2b1b ||
            hs == 0x2b50
          ) {
            return true
          }
        }
      }
    },
    isIllegalCharacter(string, filename) {
      var pass = true
      var tip = ''
      var reg = new RegExp('[~^$@%&!*?%+_=]', 'g')
      var regu = /^[A-Za-z0-9\u4e00-\u9fa5]+$/
      if (string != null && string.length > 0) {
        if (string == '' || string.replace(/(^\s*)|(\s*$)/g, '') == '') {
          tip = '不能有空格！'
          pass = false
        }
        if (this.isEmojiCharacter(string.trim())) {
          tip = '不能有表情符号！'
          pass = false
        }
      }
      if (!pass)
        MessageBox.alert(filename + tip).then(action => {
          Vue.nextTick(() => Indicator.close())
        })
      return pass
    },
    checkSubmit(cfgTplOption) {
      if (!cfgTplOption.hidden) {
        return
      }
      if (
        cfgTplOption.type == 'PHONE' &&
        !/^1(3|4|5|7|8|9)\d{9}$/.test(cfgTplOption.value)
      ) {
        MessageBox.alert(cfgTplOption.content + '请输入正确的手机号!').then(
          action => {
            Vue.nextTick(() => Indicator.close())
          }
        )
        reject()
        return
      }
      if (
        cfgTplOption.type == 'IDCARD' &&
        !this.IdentityCodeValid(cfgTplOption.value, cfgTplOption.content)
      ) {
        reject()
        return
      }
      if (
        cfgTplOption.type == 'NUMBER' &&
        cfgTplOption.value > cfgTplOption.endlimit &&
        cfgTplOption.endlimit != 0 &&
        cfgTplOption.endlimit
      ) {
        MessageBox.alert(
          cfgTplOption.content + '不能大于最大值' + cfgTplOption.endlimit
        ).then(action => {
          Vue.nextTick(() => Indicator.close())
        })
        reject()
        return
      }
      if (
        cfgTplOption.type == 'NUMBER' &&
        cfgTplOption.value < cfgTplOption.beginlimit &&
        cfgTplOption.beginlimit != 0 &&
        cfgTplOption.beginlimit
      ) {
        MessageBox.alert(
          cfgTplOption.content + '不能小于最小值' + cfgTplOption.beginlimit
        ).then(action => {
          Vue.nextTick(() => Indicator.close())
        })
        reject()
        return
      }
      if (
        this.updateimg[cfgTplOption.fieldname] &&
        cfgTplOption.type == 'FILE'
      ) {
        var imglength = 0
        if (this.imgdata[cfgTplOption.fieldname]) {
          imglength =
            this.updateimg[cfgTplOption.fieldname].length +
            this.imgdata[cfgTplOption.fieldname].length
        } else {
          imglength = this.updateimg[cfgTplOption.fieldname].length
        }

        if (cfgTplOption.nullable == 0) {
          if (
            cfgTplOption.beginlimit != null &&
            cfgTplOption.beginlimit > imglength
          ) {
            MessageBox.alert(
              cfgTplOption.content +
                '不能小于' +
                cfgTplOption.beginlimit +
                '张！'
            ).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
          if (
            cfgTplOption.endlimit != null &&
            cfgTplOption.endlimit < imglength
          ) {
            MessageBox.alert(
              cfgTplOption.content + '不能大于' + cfgTplOption.endlimit + '张！'
            ).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
        }
      } else {
        if (cfgTplOption.nullable == 0) {
          if (
            cfgTplOption.type == 'FILE' &&
            cfgTplOption.beginlimit != null &&
            cfgTplOption.beginlimit >
              this.imgdata[cfgTplOption.fieldname].length
          ) {
            MessageBox.alert(
              cfgTplOption.content +
                '不能小于' +
                cfgTplOption.beginlimit +
                '张！'
            ).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
          if (
            cfgTplOption.type == 'FILE' &&
            cfgTplOption.endlimit != null &&
            cfgTplOption.endlimit < this.imgdata[cfgTplOption.fieldname].length
          ) {
            MessageBox.alert(
              cfgTplOption.content + '不能大于' + cfgTplOption.endlimit + '张！'
            ).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
        }
      }
      if (cfgTplOption.editable == 1) {
        if (
          cfgTplOption.type == 'TEXT' &&
          !this.isIllegalCharacter(cfgTplOption.value, cfgTplOption.content)
        ) {
          reject()
          return
        }
      }

      if (cfgTplOption.type == 'PEOPLE') {
        var idc = [] //身份证号
        if (!this.people.length) {
          MessageBox.alert('成员必须填写!').then(action => {
            Vue.nextTick(() => Indicator.close())
          })
          reject()
          return
        }
        for (let p in this.people) {
          var ps = this.people[p]
          if (ps.name == null || ps.name == '') {
            MessageBox.alert('每位成员姓名必须填写！').then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
          if (ps.idcard == null || ps.idcard == '') {
            MessageBox.alert('每位成员身份证必须填写！').then(action => {
              Vue.nextTick(() => Indicator.close())
            })
            reject()
            return
          }
          if (!this.IdentityCodeValid(ps.idcard, ps.name)) {
            reject()
            return
          }
          var peopleimg = []
          this.uploadList.forEach(element => {
            if (element.peopleid == ps.id) {
              this.$set(peopleimg, ps.t, element)
            }
          })
          if (this.uploadList) {
            if (!peopleimg[ps.t] || peopleimg[ps.t].length < 1) {
              //先判断是否是需要重新提交的图片字段
              if (!this.imgdata[ps.t] || this.imgdata[ps.t].length < 1) {
                //如果是需要判断是否有上传图片
                MessageBox.alert('每位成员必须上传身份证照片！').then(
                  action => {
                    Vue.nextTick(() => Indicator.close())
                  }
                )
                reject()
                return
              }
            }
          } else {
            if (!this.imgdata[ps.t] || this.imgdata[ps.t].length < 1) {
              MessageBox.alert('每位成员必须上传身份证照片！').then(action => {
                Vue.nextTick(() => Indicator.close())
              })
              reject()
              return
            }
          }
          idc.push(ps.idcard)
        }
        var nary = idc.sort()
        for (var i = 0; i < nary.length - 1; i++) {
          if (nary[i] == nary[i + 1]) {
            MessageBox.alert('您填写的（' + nary[i] + '）身份证号码重复').then(
              action => {
                Vue.nextTick(() => Indicator.close())
              }
            )
            reject()
            return
          }
        }
      }
      //常住人口数据检测
      if (
        cfgTplOption.content == '申请人口总数' &&
        cfgTplOption.value != this.people.length
      ) {
        MessageBox.alert('您提交的成员资料与申请人口总数不符！').then(
          action => {
            Vue.nextTick(() => Indicator.close())
          }
        )
        reject()
        return
      }
    },
    OverUpload() {
      MessageBox.alert('图片大小不能超过5M').then(action => {
        Vue.nextTick(() => Indicator.close())
      })
    },
    submit() {
      new Promise((resolve, reject) => {
        Indicator.open({
          text: '数据提交中...',
          spinnerType: 'fading-circle'
        })
        resolve()
      }).then(d => {
        var busdata = {}
        var f = []
        ;(this.uploadList || []).forEach(element => {
          f.push(element.field)
          var name = element.field
          this.$set(this.updateimg, element.field, [])
        })
        ;(this.uploadList || []).forEach(element => {
          this.updateimg[element.field].push(element)
        })
        var checkDA = '' //检测用户自定义字段是否有数据
        for (let i = 0; i < this.cfgTplOptions.length; i++) {
          //自定义字段未打开
          if (
            this.cfgTplOptions[i].nullable == 2 &&
            this.cfgTplOptions[i].selectKey != true
          ) {
            this.cfgTplOptions[i].value = ''
          }
          //自定义字段打开
          if (this.cfgTplOptions[i].nullable == 2) {
            checkDA += this.cfgTplOptions[i].value
          }
          //图片上传字段，现改为单文件上传，上传后返回的id拼接成字符串放在该字段的value里面
          if (
            this.imgdata[this.cfgTplOptions[i].fieldname] &&
            this.cfgTplOptions[i].type == 'FILE'
          ) {
            this.imgdata[this.cfgTplOptions[i].fieldname].forEach(element => {
              if (element.id) {
                if (!this.cfgTplOptions[i].value) {
                  this.cfgTplOptions[i].value = ''
                }
                this.cfgTplOptions[i].value += element.id + ','
              }
              return
            })
          }
          //当为自定义字段，打开或者为必填字段
          if (
            (this.cfgTplOptions[i].nullable == 2 &&
              this.cfgTplOptions[i].selectKey == true &&
              this.cfgTplOptions[i].hidden) ||
            this.cfgTplOptions[i].nullable == 0
          ) {
            //不能为空
            if (
              this.cfgTplOptions[i].type == 'FILE' &&
              this.cfgTplOptions[i].hidden
            ) {
              if (f.indexOf(this.cfgTplOptions[i].fieldname, 0) == -1) {
                if (
                  !this.imgdata[this.cfgTplOptions[i].fieldname] ||
                  this.imgdata[this.cfgTplOptions[i].fieldname].length < 1
                ) {
                  MessageBox.alert(
                    this.cfgTplOptions[i].content + '的图片不能为空！'
                  ).then(action => {
                    Vue.nextTick(() => Indicator.close())
                  })
                  reject()
                  return
                }
              }
            }
            if (
              this.cfgTplOptions[i].type == 'RADIO' &&
              this.cfgTplOptions[i].hidden &&
              !this.cfgTplOptions[i].value
            ) {
              MessageBox.alert(this.cfgTplOptions[i].content + '必选！').then(
                action => {
                  Vue.nextTick(() => Indicator.close())
                }
              )
              return
            }
            if (
              !this.cfgTplOptions[i].value &&
              this.cfgTplOptions[i].type != 'GPSMAP' &&
              this.cfgTplOptions[i].type != 'SWITCH' &&
              this.cfgTplOptions[i].type != 'PEOPLE' &&
              this.cfgTplOptions[i].type != 'FILE' &&
              this.cfgTplOptions[i].hidden
            ) {
              MessageBox.alert(
                this.cfgTplOptions[i].content + '不能为空！'
              ).then(action => {
                Vue.nextTick(() => Indicator.close())
              })
              //Indicator.close();

              reject()
              return
            }
            //定位字段
            if (
              !this.gpsPosition &&
              this.cfgTplOptions[i].type == 'GPSMAP' &&
              this.cfgTplOptions[i].hidden
            ) {
              MessageBox.alert(
                this.cfgTplOptions[i].content + '不能为空！'
              ).then(action => {
                Vue.nextTick(() => Indicator.close())
              })
              //Indicator.close();
              reject()
              return
            }
            this.checkSubmit(this.cfgTplOptions[i]) //检验提交数据是否合格
          } else {
            if (
              (this.cfgTplOptions[i].nullable == 2 &&
                this.cfgTplOptions[i].selectKey == true) ||
              this.cfgTplOptions[i].nullable == 0
            ) {
              this.checkSubmit(this.cfgTplOptions[i]) //检验提交数据是否合格
            }
          }
          if (
            !this.cfgTplOptions[i].value &&
            this.cfgTplOptions[i].type == 'GPSMAP'
          ) {
            this.cfgTplOptions[i].value = this.gpsPosition
            this.busdata.latitude = this.local.latitude
            this.busdata.longitude = this.local.longitude
          } else {
            var str = this.cfgTplOptions[i].value
            if (
              this.cfgTplOptions[i].type == 'GPSMAP' &&
              str &&
              str.split(',')[0] != this.gpsPosition
            ) {
              this.cfgTplOptions[i].value = this.gpsPosition
            }
          }
          this.$set(
            busdata,
            this.cfgTplOptions[i].fieldname,
            this.cfgTplOptions[i].value
          )
        }
        if (!checkDA && this.busMenu.menuname == '档案变更') {
          MessageBox.alert('必须填写一项变更内容！').then(action => {
            Vue.nextTick(() => Indicator.close())
          })
          reject()
          return
        }

        busdata.menuid = this.busMenu.id
        busdata.templateid = this.cfgTemplate.id
        busdata.menuname = this.busMenu.menuname
        busdata.userid = this.$store.state.custid
        if (this.busid != null) {
          busdata.id = this.busid
        }

        var fd = new FormData()
        //常州人口数据
        if (this.isPeople) {
          fd.append('peoples', JSON.stringify(this.people))
          for (let i = 0; i < this.people.length; i++) {
            var pkey = 's' + i
            var imgs = []
            for (let j in this.imgdata[pkey]) {
              imgs.push(this.imgdata[pkey][j].id)
            }
            fd.append(pkey, imgs)
          }
        }
        fd.append('busdata', JSON.stringify(busdata))
        fd.append('channel', 'APP_ONLINE')
        //数据提交
        this.$http.post('/mobile/buss/submit', fd).then(response => {
          if (response.body.status == 1) {
            this.$store.commit('setinterceptor', 0)
            MessageBox.alert('业务提交成功！').then(action => {
              Vue.nextTick(() => Indicator.close())
              if (response.body.mapItems) {
                //显示差好评的
                this.$store.commit('setevaluateData', response.body.mapItems)
                this.$router.push('/evaluate')
              } else {
                this.$router.push('/')
              }
            })
          } else {
            MessageBox('提示', response.body.message).then(action => {
              Vue.nextTick(() => Indicator.close())
            })
          }
        })
      })
    },
    dataURLtoBlob: function(dataurl) {
      //console.log(dataurl);
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1].replace(/\s/g, ''))
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new Blob([u8arr], { type: mime }) //值，类型
    },
    idcardIdentify() {
      //打开 身份证识别 页面
      this.popupVisible5 = true
      this.idcardImg = null
      this.idcardImgFile = null
      this.isClickSendIdcardImgBtn = false
    },
    sendIdcardImg() {
      //上传要识别的照片
      if (this.idcardImg == null) {
        this.identifyMessage = '未选择身份证照片'
        return
      }

      this.isClickSendIdcardImgBtn = true
      let formData = new FormData()
      formData.append('id_card_side', 'front')
      formData.append('multipartFile', this.idcardImgData)
      formData.append('ContentType', 'multipart/form-data')
      var _this = this

      this.identifyMessage = '识别中...'
      this.$http.post('/picture/idcard', formData).then(response => {
        if (response.body.status == '1') {
          if (response.body.content != null) {
            let message = this.getIdcardIdentifyResult(
              response.body.content.image_status
            )

            if (response.body.content.image_status != 'normal') {
              //身份证无效
              _this.identifyMessage = '识别结果：' + message
              _this.isClickSendIdcardImgBtn = false
              _this.isShowIdcardImg = false
              _this.idcardImg = null
            } else {
              //身份证 有效
              _this.isClickSendIdcardImgBtn = false
              //设置身份证字段值，
              _this.identifyMessage = ''

              if (_this.cfgTplOptions != null) {
                for (let i = 0; i < _this.cfgTplOptions.length; i++) {
                  if (_this.cfgTplOptions[i].type == 'IDCARD') {
                    _this.cfgTplOptions[i].value =
                      response.body.content.words_result.idcard.words

                    //添加图片
                    //为空则加上数组
                    var arg = this.idcardImgField
                    var file = this.idcardImgFile
                    if (arg.endlimit != null && arg.endlimit.length != 0) {
                      var f = { content: '', link: arg.fieldname, dimg: '' }
                      f.content = file.content
                      f.type = file.file.type

                      this.decodeImg(file.content, arg.fieldname)
                      //为空则加上数组
                      if (this.imgdata[arg.fieldname] == null) {
                        this.$set(this.imgdata, arg.fieldname, [])
                      }

                      if (this.imgdata[arg.fieldname].length < arg.endlimit) {
                        this.imgdata[arg.fieldname].push(f)
                      }

                      // MessageBox.alert("图片数量不能超过"+arg.endlimit );
                    }
                  }
                }
              }
              _this.onClickLeft2()
            }
          }
        } else {
          _this.isClickSendIdcardImgBtn = false
          _this.identifyMessage = '识别失败'
          return
        }
      })
    },
    getIdcardIdentifyResult(status) {
      var result = ''
      switch (status) {
        case 'normal':
          result = '识别正常'
          break
        case 'reversed_side':
          result = '身份证正反面颠倒'
          break
        case 'non_idcard':
          result = '上传的图片中不包含身份证'
          break
        case 'blurred':
          result = '身份证模糊'
          break
        case 'other_type_card':
          result = '其他类型证照'
          break
        case 'over_exposure':
          result = '身份证关键字段反光或过曝'
          break
        case 'over_dark':
          result = '身份证欠曝（亮度过低）'
          break
        default:
          result = '未知状态'
          break
      }

      return result
    },
    binderInit() {
      this.binder = this.$store.state.binder
      this.init()
    }
  },
  mounted() {
    this.binder = this.$store.state.binder
    this.companyCode = this.$store.state.companyCode.value
    this.source = sessionStorage.getItem('source')
    this.binderInit()
  },
  watch: {
    Dateshow(n, o) {
      if (n == true) {
        document.getElementsByTagName('body')[0].className = 'fixedBody'
        document.getElementsByTagName('html')[0].className = 'fixedBody'
      } else {
        document.body.removeAttribute('class', 'fixedBody')
        document
          .getElementsByTagName('html')[0]
          .removeAttribute('class', 'fixedBody')
      }
    },
    popupVisible3(n, o) {
      if (n) {
        this.$store.commit('setshow', 0)
      } else {
        this.$store.commit('setshow', 1)
      }
    }
  }
}
</script>
