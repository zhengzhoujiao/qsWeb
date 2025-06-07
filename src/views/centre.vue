<template>
  <el-container>
    <el-aside width="300px" style="border-right: 1px solid black;">
      <el-row class="tac">
        <el-col :span="24" style="border-right">
          <div class="imgBox2">
            <img class="tximg" src="../../public/img/zxc.jpg" alt="">
          </div>
          <h3 style="text-align: center">18436096929</h3>
          <div class="line"></div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            style="height:500px"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title"><a href= "#zhzx" >账户中心</a></span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title"><a href= "#wzgl" >网站管理</a></span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title"><a href= "#wddd" >订单管理</a></span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title"><a href= "#cwgl" >财务管理</a></span>
            </el-menu-item>
          </el-menu>
          <div class="imgBox">
            <img class="logoImg" src="../../public/img/logo.png" alt="">
          </div>
        </el-col>
      </el-row>
    </el-aside>
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
              <el-dropdown-item @click.native="compile"
                >编辑页</el-dropdown-item
              >
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span @click="logout">焦诗博</span>
        </div>
      </el-header>
      <el-main class="mainBox">
        <el-card id="zhzx" class="main">
          <div class="card">
            <div class="imgBox"><img src="../../public/img/zhyw.png" alt=""></div>
            <div class="mid">{{userDetail[0].balance}}</div>
            <div class="bottom">账户余额</div>
          </div>
          <div class="card">
            <div class="imgBox"><img src="../../public/img/wdwz.png" alt=""></div>
            <div class="mid">{{openWebList.length}}</div>
            <div class="bottom">已经开通网站</div>
          </div>
          <div class="card">
            <div class="imgBox"><img src="../../public/img/dfk.png" alt=""></div>
            <div class="mid">{{payOrderList.length}}</div>
            <div class="bottom">待付款订单</div>
          </div>
          <div class="card">
            <div class="imgBox"><img src="../../public/img/jxxf.png" alt=""></div>
            <div class="mid">0</div>
            <div class="bottom">急需续费</div>
          </div>
        </el-card>
        <el-card id="wzgl" class="myWeb">
          <h2>我的网站</h2>
          <el-table
            border
            :data="openWebList"
            stripe
            style="width: 95%;margin-top:30px;margin-left: 50%;
  transform: translateX(-50%);">
            <el-table-column
              align="center"
              prop="webName"
              label="网站名">
            </el-table-column>
            <el-table-column
              align="center"
              prop="webIp"
              label="已绑定域名">
            </el-table-column>
            <el-table-column
              align="center"
              prop="date"
              label="开通时间">
            </el-table-column>
            <el-table-column
              align="center"
              prop="state"
              label="状态">
              <template slot-scope="scope">
                <span>{{["激活","未激活"][scope.row.state]}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="管理">
              <!-- <el-button type="primary" size="medium">修改</el-button> -->
              <template slot-scope="scope">
                <el-button type="success" size="medium" @click="Look(scope.row)">预览</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <el-card id="wddd" class="myOrder">
          <h2>我的订单</h2>
          <el-table
            border
            :data="orderList"
            stripe
            style="width: 95%;margin-top:30px;margin-left: 50%;
  transform: translateX(-50%);">
            <el-table-column
              width="300"
              align="center"
              prop="orderNumber"
              label="订单号">
            </el-table-column>
            <el-table-column
              width="300"
              align="center"
              prop="webName"
              label="网站名">
            </el-table-column>
            <el-table-column
              align="center"
              prop="price"
              label="金额">
            </el-table-column>
            <el-table-column
              align="center"
              prop="state"
              label="状态">
              <template slot-scope="scope">
                <span>{{["已支付","未支付"][scope.row.state]}}</span>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              prop="data"
              label="创建时间">
            </el-table-column>
            <el-table-column
              align="center"
              label="操作">
              <template slot-scope="scope">
                <el-button v-if="scope.row.state === 1" type="primary" size="medium" @click="payThisOrder(scope.row.webName)">支付</el-button>
                <el-button v-if="scope.row.state === 0" type="danger" size="medium">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <el-card id= "cwgl" class="myFinancial">
          <h2>财务信息</h2>
          <div style="margin-left:30px;margin-top:40px">
            <h3 style="margin-top:20px;margin-bottom:20px">账户余额</h3>
            <span>￥{{userDetail[0].balance}}</span>
            <el-form style="margin-top:20px" label-width="80px" :model="formData">
              <el-form-item label="充值金额">
                <el-input style="width:300px" v-model="formData.price"></el-input>
              </el-form-item>
              <el-form-item label="充值方式">
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="(item,index) in options"
                    :key="index"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-button type="primary" @click="addMoney">充值</el-button>
            </el-form>            
          </div>
        </el-card>
        <div class="imgBoxFooter">
          <img src="../../public/img/2.jpg" alt="">
        </div>
      </el-main>
    </el-container>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>请确定支付</span>
      <div style="margin-top:30px">
        <el-input
          placeholder="请输入网站名"
          v-model="webName"
          clearable
          disabled>
        </el-input>
        <div style="margin-top:20px"><span>价格：</span>30元</div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="toPay">支付</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
import { loadMicroApp } from 'qiankun';
export default {
  data() {
    return {
      webName:"",
      tableData: [{
          webName: '年轻人的第一个网站',
          webIp: '未绑定',
          state : '待绑定',
          openTime: '2021/4/21 14:21'
        },{
          webName: 'xiao mi',
          webIp: '未绑定',
          state : '待绑定',
          openTime: '2021/4/11 16:19'
        },{
          webName: 'qsWeb',
          webIp: '未绑定',
          state : '待绑定',
          openTime: '2021/3/21 09:53'
        },{
          webName: '饿了么',
          webIp: '未绑定',
          state : '待绑定',
          openTime: '2021/4/15 10:31'
        }],
      tableData2: [{
          orderNumber: '202104211421331',
          webName: '年轻人的第一个网站',
          money : '28',
          state :'待支付',
          orderTime: '2021/4/21 14:21'
        },{
          orderNumber: '202104111419313',
          webName: 'xiao mi',
          money : '28',
          state :'待支付',
          orderTime: '2021/4/11 16:19'
        },{
          orderNumber: '202103210953981',
          webName: 'qsWeb',
          money : '28',
          state :'待支付',
          orderTime: '2021/3/21 09:53'
        },{
          orderNumber: '202104151031233',
          webName: '饿了么',
          money : '28',
          state :'待支付',
          orderTime: '2021/4/15 10:31'
        },],
      formData:{
        price: 0
      },
      dialogVisible:false,
      value:'',
      options:['微信','支付宝'],
      userDetail:[],
      orderList:[],
      pageList:[],
      openWebList:[],
      payOrderList:[]
    }
  },
  created() {
    this.getUser()
    this.getOrderList()
    this.getPageList()
  },
  methods:{
    Look(page) {
      console.log(page)
      // this.$router.push('qiankun')
      this.$router.push('/')
      this.microApp = loadMicroApp(
        { name: 'app1', entry: 'http://localhost:8082/', container: '#micro_container', props: {myArray: page.pageDetails,bgcolor: page.bgcolor}},
      );
      // setTimeout(()=>{
      //   console.log(this.$store.getters.getPageList)
      //   window.open('http://localhost:8081/', '_blank')
      // },1)
      // 将arrayList传入vuex遍历加数据后返回(监听)
    },
    async toPay(){
      const {data: res} = await this.$http.post('page/payOne',{data:{
        webName:this.webName
      }})
      this.$message.success('支付成功!')
      this.dialogVisible = false
      this.getUser()
      this.getOrderList()
      this.getPageList()
    },
    payThisOrder(webName){
      this.webName = webName
      this.dialogVisible = true
    },
    // 充钱
    async addMoney(){
      const {data: res} = await this.$http.post('page/addMoney',{data:{
        money: this.formData.price
      }})
      this.$message.success('充值成功！')
      this.getUser()
    },
    // 获取个人信息
    async getUser(){
      const {data: res} = await this.$http.get('page/getUserDetail')
      this.userDetail = res
      console.log(res)
    },
    // 获取订单列表
    async getOrderList(){
      const {data: res} = await this.$http.get('page/getOrderList')
      this.orderList = res
      this.payOrderList = []
      this.orderList.forEach(item=>{
        if(item.state === 1){
          this.payOrderList.push(item)
        }
      })
      console.log(res)
    },
    // 获取网站列表
    async getPageList(){
      const {data: res} = await this.$http.get('page/getPageList')
      this.pageList = res
      this.openWebList = []
      this.pageList.forEach(item=>{
        if(item.state === 0){
          this.openWebList.push(item)
        }
      })
      console.log(res)
    },
    //退出登录
    logout() {
      this.$store.commit("logoutState");
      this.$router.push("/Login");
    },
    //编辑
    compile() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
a{
  text-decoration:none;
  color: black;
}
.mainBox{
  height: 800px;
  overflow: scroll;
}
.imgBox{
  margin-left: 50%;
  margin-top: 20px;
  transform: translateX(-50%);
  width: 80%;
  height: 135px;
  border-radius:35px;
  overflow: hidden;
  margin-bottom: 20px;
  .logoImg{
    width: 100%;
    background-size: cover;
  }
}
.imgBox2{
  margin-top: 30px;
  margin-bottom: 20px;
  width: 60%;
  height: 180px;
  border-radius: 90px;
  margin-left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  .tximg{
    width: 100%;
  }
}
.line{
  width: 100%;
  height: 30px;
  border-bottom: 1px solid whitesmoke;
}
.main{
  height: 280px;
  width: 100%;
  .card{
    display: inline-block;
    width: 24.1%;
    border-left: 1px solid whitesmoke;
    .imgBox{
      width: 60px;
      height: 60px;
      margin: 0;
      margin-left: 50px;
      margin-top: 10px;
    }
    .mid{
      font-size: 20px;
      color: blue;
      margin-top: 80px;
      margin-left: 30px;
    }
    .bottom{
      font-size: 22px;
      margin-top: 10px;
      margin-left: 30px;
      color: gray;
    }
  }
}
.myWeb{
  margin-top: 50px;
}
.myOrder{
  margin-top: 50px;
}
.myFinancial{
  margin-top: 50px;
}
.imgBoxFooter{
  width: 100%;
  height: 300px;
  img{
    width: 100%;
    background-size: cover;
  }
}
</style>