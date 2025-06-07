import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 主题色
    ztState:{
      bgcolor: 'whitesmoke',
      cardColor: 'white',
    },
    //弹窗状态
    dialogState:false,
    user:{
      name:'jsb',
      isLogin:false
    },
    //不同模块参数模版  组件引用时拷贝一份  vuex中数据不允许更改
    mainDate:[
    {name:'theData',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      data:{
        //数据可视化
        // 长文字
        details:
        "牧原致力于将环境保护融入企业经营发展各个环节，树立“零排放-无隐患-无臭气-减雾霾-碳减排”的“环保五台阶”目标，构建完善的环境管理机制，建设环保数字化智能平台，提升环保标准。截止2019年，牧原共获得规模化养猪场粪污处理生态循环系统、规模化养殖热循环恒温猪舍、沼液储存防渗池及其防渗层结构等环保技术。",
        // 题目
        title: "关于我们",
        // 数据类别和数据量
        dataList: [
          { title: "服务客户", number: 6000 },
          { title: "500强", number: 100 },
          { title: "上市公司", number: 800 },
        ],
      }
    }},
    {name:'theData2',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      data:{      //数据可视化
        // 长文字
        details:
          "牧原致力于将环境保护融入企业经营发展各个环节，树立“零排放-无隐患-无臭气-减雾霾-碳减排”的“环保五台阶”目标，构建完善的环境管理机制，建设环保数字化智能平台，提升环保标准。截止2019年，牧原共获得规模化养猪场粪污处理生态循环系统、规模化养殖热循环恒温猪舍、沼液储存防渗池及其防渗层结构等环保技术。",
        // 题目
        title: "关于我们",
        // 数据类别和数据量
        dataList: [
          { title: "服务客户", number: 6000 },
          { title: "500强", number: 100 },
          { title: "上市公司", number: 800 },
        ],}
    }},
    {name:'theFooter',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      data:{
        imgsrc: require("../../public/img/muyuan.jpg"),
        idea: "用qs-Web,当自己的设计师",
        title: "qsWeb定制",
        phone: 18436096929,
        QQ: 1415580200,
        address: "河南省洛阳市涧西区河南科技大学",
        email: "1415580200@QQ.com",
        hotPhone: 10086,
      }
    }},
    {name:'theFooter2',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      imgsrc: require("../../public/img/wallpaper.jpg"),
      data:{
        phone: 18436096929,
        title: "qsWeb定制",
        address: "河南省郑州市惠济区南阳路170号",
      }
    }},
    {name:'theLunbo',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      theHeight:'600px',
      speed:3000,
      data:[{imgsrc:require('../../public/img/one.png')},{imgsrc:require('../../public/img/two.jpg')},{imgsrc:require('../../public/img/three.jpg')}]
    }},
    {name:'theLunbo2',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      theHeight:'500px',
      speed:4000,
      data:[{imgsrc:require('../../public/img/one.png')},{imgsrc:require('../../public/img/two.jpg')},{imgsrc:require('../../public/img/three.jpg')}],
    }},
    {name:'theMain',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      data:{      
        //新闻相关
        NewsTitle: "新闻动态",
        theNews: [
          {
            title: "机遇与挑战同在家纺行业如何把握未来趋势",
            imgsrc: require("../../public/img/message/bad1.png"),
            content:
              "目前的家纺行业正处在一个竞争激烈、日新月异的市场中。品牌市场如战场，对于家纺行业而言，只有牢牢把握消费发展趋势，才能成功制胜市场。随着市场消费升级的趋势日益明显，",
            date: "2021/3/8",
          },
          {
            title: "2017家纺行业的创新趋势",
            imgsrc: require("../../public/img/message/bad2.png"),
            content:
              "2016年，家纺行业形式严峻，中国纺织行业联合会副会长、中国家纺纺织行业协会会长杨兆华表示，今年以来，家纺行业出现了几个新情况：一是家纺行业投资首次出现负增长，行业",
            date: "2021/3/9",
          },
          {
            title: "中国国际家纺展：新常态下的行业动态",
            imgsrc: require("../../public/img/message/bad3.png"),
            content:
              "2016中国国际家用纺织品及辅料（秋冬）博览会（以下简称中国国际家纺展）于8月26~28日在新近落成的国家会展中心（上海）如期举行。据悉，本届而此次展会面积共达约16万平",
            date: "2021/3/10",
          },
        ],}
    }},
    {name:'theMain2',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      data:{
              //成员,关于品牌相关
      paTitle: "成员介绍",
      paList: [
        {
          title: "张三",
          content:
            "法学本科毕业，苛求完美的处女座，思维活跃、逻辑严密、注意细节，擅长民商法（含合同法、公司法、房地产法、婚姻家庭、劳动争议等）。扎实的理论功底、求实的工作作风、周到的服务意识，能够准确把握案件法律关系的重点，办案风格亲切耐心，致力于通过良好的沟通为每一位当事人提供良好的法律服务。",
          imgsrc: require("../../public/img/pople/3.png"),
        },
        {
          title: "李四",
          content:
            "毕业于华东政法大学，获法学学士学位。始终秉承“优质、诚信、高效”的服务宗旨处理接受委托的每一个案件。曾处理过多起合同纠纷、民间借贷纠纷、担保追偿、侵权等纠纷，最大限度的维护了当事人的合法权益；同时为顾问单位提供全程、优质的法律服务，包括合同签订中风险提示与纠纷规避，交易过程前后法律指引及出现问题后的解决。",
          imgsrc: require("../../public/img/pople/4.png"),
        },
        {
          title: "王五",
          content:
            "法学本科毕业，苛求完美的处女座，思维活跃、逻辑严密、注意细节，擅长民商法（含合同法、公司法、房地产法、婚姻家庭、劳动争议等）。扎实的理论功底、求实的工作作风、周到的服务意识，能够准确把握案件法律关系的重点，办案风格亲切耐心，致力于通过良好的沟通为每一位当事人提供良好的法律服务。",
          imgsrc: require("../../public/img/pople/5.png"),
        },
      ],
      },
    }},
    {name:'theNavbar',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      imgsrc:require('../../public/img/zxc.jpg'),
      data:[
        {title:"首页"},
        {title:"关于我们"},
        {title:"产品展示"},
        {title:"新闻动态"},
        {title:"在线留言"},
        {title:"联系我们"}
      ],
    }},
    {name:'theNavbar2',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      imgsrc:require('../../public/img/zxc.jpg'),
      data:[
        {title:"首页"},
        {title:"关于我们"},
        {title:"产品展示"},
        {title:"新闻动态"},
        {title:"在线留言"},
        {title:"联系我们"}
      ],
    }},
    {name:'therNavbar',main:{
      marginR:0,
      marginT:0,
      marginL:0,
      marginB:0,
      imgsrc:require('../../public/img/zxc.jpg'),
    }},
  ],
    //页面的详细信息顺序参数存入数据库  h5端根据此进行渲染
    pageData:{

    },
    //记录侧边栏状态
    rnavbarStare:{
      
    },
    //初始化模版
    startPage:[{
      id:1,
      kind:'theNavbar'
    },{
      id:2,
      kind:'theLunbo'
    },{
      id:3,
      kind:'theData'
    },{
      id:4,
      kind:'theMain'
    },{
      id:5,
      kind:'theMain2'
    },{
      id:6,
      kind:'theFooter2'
    }],
    //初始化
    toStart:[],
    //页面整体信息
    pageList:[]
  },
  mutations: {
    // 保存页面详细信息
    processing(state,myArray){
      state.pageList = []
      myArray.forEach(item => {
        let componentSon = item
        state.mainDate.filter(item => {
          if(componentSon.kind == item.name){
            componentSon.details = item.main
          }
        })
        state.pageList.push(componentSon)
      })
      console.log(state.pageList)
    },
    LoginState(state){
      state.user.isLogin = true
    },
    logoutState(state){
      state.user.isLogin =false
    },
    setPagedata(state,dataList){
      state.pageData = dataList
    },
    //更改页面信息公用方法 newDate将组件数据包名传过来 通过此判断更新数据源
    dateUpdate(state,newDate){
      // 实现点击不同组件切换预览图
      let theItem = state.mainDate.filter(item=>{
        if(item.name == newDate.name){
          return item
        }
      })
      newDate.imgsrc = theItem[0].main.imgsrc
      state.rnavbarStare = newDate
    },
    //左移
    toLeft(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.marginL = (Number(item.main.marginL.toString().replace(/[^\d|^\.|^\-]/g, "")) - 10)+'px'
          item.main.marginR = (Number(item.main.marginR.toString().replace(/[^\d|^\.|^\-]/g, "")) + 10)+'px'
        }
      })
    },
    //右移
    toRight(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.marginL = (Number(item.main.marginL.toString().replace(/[^\d|^\.|^\-]/g, "")) + 10)+'px'
          item.main.marginR = (Number(item.main.marginR.toString().replace(/[^\d|^\.|^\-]/g, "")) - 10)+'px'
        }
      })
    },
    //上移
    toTop(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.marginT = (Number(item.main.marginT.toString().replace(/[^\d|^\.|^\-]/g, "")) - 10)+'px'
          item.main.marginB = (Number(item.main.marginB.toString().replace(/[^\d|^\.|^\-]/g, "")) + 10)+'px'
        }
      })
    },
    //下移
    toBottom(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.marginT = (Number(item.main.marginT.toString().replace(/[^\d|^\.|^\-]/g, "")) + 10)+'px'
          item.main.marginB = (Number(item.main.marginB.toString().replace(/[^\d|^\.|^\-]/g, "")) - 10)+'px'
        }
      })
    },
    //轮播速度调整
    fastSpeed(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          if(item.main.speed != 0){
            item.main.speed = item.main.speed - 1000
          }
        }
      })
    },
    slowSpeed(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.speed = item.main.speed + 1000
        }
      })
    },
    //轮播高度调整
    upHeight(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.theHeight = (Number(item.main.theHeight.toString().replace(/[^\d|^\.|^\-]/g, "")) + 50)+'px'
        }
      })
    },
    downHeight(state,name){
      state.mainDate.forEach(item=>{
        if(item.name==name){
          item.main.theHeight = (Number(item.main.theHeight.toString().replace(/[^\d|^\.|^\-]/g, "")) - 50)+'px'
        }
      })
    },
    //图片上传
    imgUpload(state,data){
      state.mainDate.forEach(item=>{
        if(item.name==data.name){
          item.main.imgsrc = data.imgurl
        }
      })
    },
    //内容主体图片上传
    imgUpload2(state,data){
      state.mainDate.forEach(item=>{
        if(item.name==data.name){
          item.main.data.theNews[data.index].imgsrc = data.imgurl
        }
      })
    },
    //内容主体二图片上传
    imgUpload3(state,data){
      state.mainDate.forEach(item=>{
        if(item.name==data.name){
          item.main.data.paList[data.index].imgsrc = data.imgurl
        }
      })
    },
    //轮播图片上传
    imgUpload4(state,data){
      state.mainDate.forEach(item=>{
        if(item.name==data.name){
          item.main.data[data.index].imgsrc = data.imgurl
        }
      })
    },
    //更改弹窗状态
    updatadialogState(state){
      state.dialogState = !state.dialogState
    },
    //更改数据源
    updataDateSource(state,dataPackage){
      state.mainDate.forEach(item=>{
        if(item.name == dataPackage.name){
          item.main.data = dataPackage.data
        }
      })
    },
    // 主题一
    setOneState(state){
      state.ztState = {
        bgcolor: 'whitesmoke',
        cardColor: 'white',
      }
    },
    // 主题二
    setTwoState(state){
      state.ztState = {
        bgcolor: 'white',
        cardColor: 'whitesmoke',
      }
    },
    // 初始化
    InitializeList(state) {
      state.toStart = state.startPage
    },
    // 刷新
    refresh(state) {
      state.toStart = []
    }
  },
  getters: {
    //获取页面信息用于渲染
    getPageList: (state) =>{
      return state.pageList
    },
    //通过传入不同值返回不同组件参数模版
    getcomputedData: (state) => (name) =>{
      let theItem = ''
      state.mainDate.forEach(item=>{
        if(item.name == name){
          theItem = item
        }
      })
      return theItem
    },
    //获取右侧边栏状态
    getRnavbarState: (state) => {
      return state.rnavbarStare
    },
    //获取弹窗状态
    getdialogState: (state) =>{
      return state.dialogState
    },
    // 获取主题
    getztState: (state) => {
      return state.ztState
    },
    //页面初始化
    Initialize: (state) => {
      return state.toStart
    }
  },
  actions: {
  },
  modules: {
  }
})
