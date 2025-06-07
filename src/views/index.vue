<template>
  <el-container>
    <el-header
      style="
        background-color: #4662d9;
        line-height: 100px;
        text-align: right;
        font-size: 12px;
        height: 100px;
      "
    >
      <div class="ehImg">
        <img
          style="width: 100%; height: 100%; background-size: cover"
          src="../../public/img/brand.png"
          alt=""
        />
      </div>
      <div
        style="
          display: inline-block;
          width: 100%;
          text-align: center;
          color: white;
          font-size: 30px;
          font-weight: 600;
        "
      >
        Welcome to qs-Web
      </div>
      <div
        style="
          position: absolute;
          top: 1px;
          right: 30px;
          color: white;
          font-size: 18px;
        "
      >
        <el-dropdown>
          <i
            class="el-icon-setting"
            style="margin-right: 15px; font-size: 20px; color: white"
          ></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="centre">个人中心</el-dropdown-item>
            <el-dropdown-item>修改账户</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span @click="logout">焦诗博</span>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '501px' : '200px'">
        <el-menu
          style="height: 850px; width: 199px; float: left"
          class="el-menu-vertical-demo"
        >
          <el-menu-item index="1" @click="jump(1)">
            <i class="el-icon-menu"></i>
            <span slot="title">导航栏</span>
          </el-menu-item>
          <el-menu-item index="2" @click="jump(2)">
            <i class="el-icon-document"></i>
            <span slot="title">banner图</span>
          </el-menu-item>
          <el-menu-item index="3" @click="jump(3)">
            <i class="el-icon-setting"></i>
            <span slot="title">数据可视化</span>
          </el-menu-item>
          <el-menu-item index="5" @click="jump(4)">
            <i class="el-icon-setting"></i>
            <span slot="title">内容主体</span>
          </el-menu-item>
          <el-menu-item index="6" @click="jump(5)">
            <i class="el-icon-setting"></i>
            <span slot="title">客服组件</span>
          </el-menu-item>
          <el-menu-item index="7" @click="jump(6)">
            <i class="el-icon-setting"></i>
            <span slot="title">联系我们</span>
          </el-menu-item>
          <div class="buttons">
            <div class="up">
              <el-button type="primary" style="width: 72px" @click="Look">预览</el-button>
              <el-button type="success" style="width: 72px" @click="dialogVisible = true">支付</el-button>
            </div>
            <div class="down">
              <el-button
                @click="refresh"
                type="danger"
                style="
                  width: 160px;
                  margin-left: 50%;
                  transform: translateX(-50%);
                "
                >初始化</el-button
              >
            </div>
          </div>
        </el-menu>
        <div class="module" v-show="toRender">
          <div class="close" @click="close">
            <i class="el-icon-caret-left" style="font-size: 30px"></i>
          </div>
          <div style="height: 70px"></div>
          <div
            class="card"
            v-for="(item, index) in renderList.data"
            :key="index"
          >
            <div class="cardTitle">{{ renderList.type + "-" + index }}</div>
            <div class="fimg">
              <img
                class="theImg"
                :src="item.imgsrc"
                alt=""
                @click="add(item.kind)"
              />
            </div>
          </div>
        </div>
      </el-aside>
      <el-main :style="{ background: mainColor, padding: 0 }">
        <!-- 主体 -->
        <div
          style="
            width: 83%;
            height: 800px;
            overflow: scroll;
            overflow-x: hidden;
            display: inline-block;
            vertical-align: top;
          "
        >
          <draggable
            v-model="myArray"
            animation="1000"
            @start="onStart"
            @end="onEnd"
          >
            <transition-group>
              <div v-for="item in myArray" :key="item.id">
                <component :ref="item.kind" :is="item.kind"></component>
              </div>
            </transition-group>
          </draggable>
        </div>
        <div
          style="
            width: 17%;
            height: 815px;
            display: inline-block;
            background-color: #f0ffff;
            padding-top: 20px;
          "
        >
          <component :is="RpNavbar"></component>
        </div>
        <!-- 导航 -->
        <!-- 轮播 -->
        <!-- 数据可视化 -->
        <!-- 内容主体 -->
        <!-- 客服组件 -->
        <!-- 联系我们 -->
        <!-- 弹出层 -->
        <component :is="openType.type" v-if="this.dialogState"></component>
      </el-main>
    </el-container>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请核对订单</span>
      <div style="margin-top:30px">
        <el-input
          placeholder="请输入网站名"
          v-model="webName"
          clearable>
        </el-input>
        <div style="margin-top:20px"><span>价格：</span>30元</div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="car">取 消</el-button>
        <el-button type="primary" @click="pay">支付</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import theData from "@/components/data.vue";
import theData2 from "@/components/data2.vue";
import theLunbo from "@/components/lunbo.vue";
import theLunbo2 from "@/components/lunbo2.vue";
import theMain from "@/components/main.vue";
import theMain2 from "@/components/main2.vue";
import theNavbar from "@/components/navbar.vue";
import theNavbar2 from "@/components/navbar2.vue";
import RNavbar from "@/components/rNavbar.vue";
import theFooter from "@/components/footer.vue";
import theFooter2 from "@/components/footer2.vue";
import RpNavbar from "@/components/rpageNavbar/rNavbar.vue";
import draggable from "vuedraggable";
import Ddate from "../components/rpageNavbar/Dialog/dDate";
import Dfooter from "../components/rpageNavbar/Dialog/dFooter";
import Dlunbo from "../components/rpageNavbar/Dialog/dLunbo";
import Dmain from "../components/rpageNavbar/Dialog/dMain";
import Dnavbar from "../components/rpageNavbar/Dialog/dNavbar";
import Ddate2 from "../components/rpageNavbar/Dialog/dDate2";
import Dfooter2 from "../components/rpageNavbar/Dialog/dFooter2";
import Dlunbo2 from "../components/rpageNavbar/Dialog/dLunbo2";
import Dmain2 from "../components/rpageNavbar/Dialog/dMain2";
import Dnavbar2 from "../components/rpageNavbar/Dialog/dNavbar2";
import { loadMicroApp } from 'qiankun';
export default {
  components: {
    draggable,
    theData,
    theData2,
    theLunbo,
    theLunbo2,
    theMain,
    theMain2,
    theNavbar,
    theNavbar2,
    RNavbar,
    theFooter,
    theFooter2,
    RpNavbar,
    Ddate,
    Dfooter,
    Dlunbo,
    Dmain,
    Dnavbar,
    Ddate2,
    Dfooter2,
    Dlunbo2,
    Dmain2,
    Dnavbar2,
  },
  inject: ["reload"],
  name: "activity",
  data() {
    return {
      webName: '',
      dialogVisible: false,
      //弹窗状态
      dialogState: this.$store.getters.getdialogState,
      drag: false,
      // 弹窗组件名
      openType: this.$store.getters.getRnavbarState,
      //定义要被拖拽对象的数组
      myArray: this.$store.getters.Initialize,
      theData: theData,
      theData2: theData2,
      theLunbo: theLunbo,
      theLunbo2: theLunbo2,
      theMain: theMain,
      theMain2: theMain2,
      theNavbar: theNavbar,
      theNavbar2: theNavbar2,
      RNavbar: RNavbar,
      theFooter: theFooter,
      theFooter2: theFooter2,
      RpNavbar: RpNavbar,
      Ddate: Ddate,
      Ddate2: Ddate2,
      Dfooter: Dfooter,
      Dfooter2: Dfooter2,
      Dlunbo: Dlunbo,
      Dlunbo2: Dlunbo2,
      Dmain: Dmain,
      Dmain2: Dmain2,
      Dnavbar: Dnavbar,
      Dnavbar2: Dnavbar2,
      isCollapse: false,
      toRender: false,
      renderList: {},
      mainColor: this.$store.getters.getztState.bgcolor,
      barList: [
        {
          type: "导航栏",
          data: [
            {
              kind: "theNavbar",
              imgsrc: require("../../public/img/dhl/nav1.jpg"),
            },
            {
              kind: "theNavbar2",
              imgsrc: require("../../public/img/dhl/nav2.png"),
            },
          ],
        },
        {
          type: "banner图",
          data: [
            {
              kind: "theLunbo",
              imgsrc: require("../../public/img/banner/bn1.png"),
            },
            {
              kind: "theLunbo2",
              imgsrc: require("../../public/img/banner/bn2.png"),
            },
          ],
        },
        {
          type: "数据可视化",
          data: [
            { kind: "theData", imgsrc: require("../../public/img/data/1.png") },
            { kind: "theData2", imgsrc: require("../../public/img/data/2.png") },
          ],
        },
        {
          type: "内容模块",
          data: [
            { kind: "theMain", imgsrc: require("../../public/img/span/2.png") },
            { kind: "theMain2", imgsrc: require("../../public/img/span/3.png") },
          ],
        },
        {
          type: "客服组件",
          data: [
            {
              kind: "RNavbar",
              imgsrc: require("../../public/img/pople/2.png"),
            },
          ],
        },
        {
          type: "联系我们",
          data: [
            {
              kind: "theFooter",
              imgsrc: require("../../public/img/message/address.png"),
            },
            {
              kind: "theFooter2",
              imgsrc: require("../../public/img/message/img.png"),
            },
          ],
        },
      ],
      microApp:''
    };
  },
  computed: {
    // 弹框
    getState() {
      return this.$store.getters.getdialogState;
    },
    // 主题色
    getState2() {
      return this.$store.getters.getztState.bgcolor;
    },
    // 初始化
    getState3() {
      return this.$store.getters.Initialize;
    },
    // 动态渲染表单 传点击组件信息
    getState4() {
      return this.$store.getters.getRnavbarState;
    },
  },
  watch: {
    getState(val) {
      this.dialogState = val;
    },
    getState2(val) {
      this.mainColor = val;
    },
    getState3(val) {
      this.myArray = val;
    },
    getState4(val) {
      this.openType = val;
    },
  },
  methods: {
    async car() {
      const { data: res } = await this.$http.post("page/car",{data:{
        webName:this.webName,
        price:30,
        userId:'603f5f7b1156776ddb67fef0',
        state:1}
      })
      this.Save(1)
      this.$message.error('订单未完成！')
      this.dialogVisible = false
      this.$router.push('centre#wddd')
    },
    async pay() {
      const { data: res } = await this.$http.post("page/order",{data:{
        webName:this.webName,
        price:30,
        userId:'603f5f7b1156776ddb67fef0',
        state:0}
      })
      const {data: rea} = await this.$http.post('page/reduceMoney',{data:{
        money: 30
      }},function(req,ret){
      })
      this.$message.success('支付成功！')
      this.dialogVisible = false
      this.$router.push('centre#wddd')
      this.Save(0)
    },
    centre(){
      this.$router.push('centre')
    },
    Look() {
      // this.$router.push('qiankun')
      this.$store.commit('processing',this.myArray)
      this.microApp = loadMicroApp(
        { name: 'app1', entry: 'http://localhost:8082/', container: '#micro_container', props: {myArray: this.$store.getters.getPageList,bgcolor: this.$store.getters.getztState.bgcolor}},
      );
      // setTimeout(()=>{
      //   console.log(this.$store.getters.getPageList)
      //   window.open('http://localhost:8081/', '_blank')
      // },1)
      // 将arrayList传入vuex遍历加数据后返回(监听)
    },
    async Save(state) {
      this.$store.commit('processing',this.myArray)
      // 相对比Look多了将arrayList存入数据库一步
      const { data: res } = await this.$http.post("page/into",{data:{
        webName:this.webName,
        webPrice:30,
        pageDetails:this.$store.getters.getPageList,
        bgcolor:this.$store.getters.getztState.bgcolor,
        userId:0,
        // id:0,
        state:state}
      })
    },
    refresh() {
      this.$store.commit("refresh");
    },
    //开始拖拽事件
    onStart(e) {
      console.log(e);
      console.log(this.myArray);
      this.drag = true;
    },
    //拖拽结束事件
    onEnd(e) {
      console.log(e);
      console.log(this.myArray);
      // this.$set(this.$refs.Navbar[0]._data.navlist,1,111)
      this.drag = false;
    },
    jump(num) {
      this.renderList = this.barList[num - 1];
      this.isCollapse = true;
      this.toRender = true;
      console.log(this.renderList);
    },
    close() {
      this.reload();
      this.toRender = false;
    },
    //退出登录
    logout() {
      this.$store.commit("logoutState");
      this.$router.push("/Login");
    },
    //添加组件
    add(kind) {
      this.$nextTick(() => {
        let component = {};
        component.id = this.myArray.length + 1;
        component.kind = kind;
        //此数据为页面组件顺序和其参数 参数从vuex中取 在此处复制一份并压入myArray
        this.myArray.push(component);        
      })
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  overflow-x: hidden;
}
.buttons {
  margin-top: 350px;
  .up {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .down {
    margin-top: 20px;
  }
}
.ehImg {
  left: 100px;
  top: 15px;
  width: 60px;
  height: 60px;
  position: absolute;
  display: inline-block;
}
.module {
  float: left;
  width: 300px;
  height: 850px;
  background: #f0ffff;
  overflow: auto;
}
.close {
  float: right;
  margin-top: 15px;
  margin-right: 15px;
}
.card {
  width: 100%;
  height: 200px;
  .cardTitle {
    width: 100%;
    text-align: center;
  }
  .fimg {
    width: 90%;
    height: 150px;
    margin-top: 30px;
    margin-left: 50%;
    transform: translateX(-50%);
    .theImg {
      width: 100%;
      height: 120px;
    }
  }
}
.imgR {
  float: right;
  margin-right: 50px !important;
  margin: 10px;
  .tImg {
    width: 100px;
    height: 100px;
  }
}
.content {
  margin-left: 45px;
  margin-right: 45px;
}
</style>