import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
//// 通过路由加载(不能动态传参 初始化的时候参数已经写死)
// import {registerMicroApps, start} from "qiankun";
// let microProject = [
//   {
//     //项目名称，应当与子服务中的package.json项目名称一致
//     name: 'qiankun',
//     //子服务的入口（可以是js入口，但是这里我们统一使用html入口 也就是项目前端地址）
//     entry: 'http://localhost:8083/',
//     //子服务的容器dom，实际上是主服务中的某个dom的id，用来装载子服务
//     container: '#micro_container',
//     props: {myArray: store.getters.getPageList},
//     //子服务的载入路由，实际上在主服务中，qiankun会识别该路由，从而激活子服务
//     activeRule: '/qiankun'
//   }]
//   //注册微服务
//   registerMicroApps(microProject)
//   //启动！！
//   start()


axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

// 全局时间过滤器
Vue.filter('GMTToStr',function(value){
  let date = new Date(value)
  let Str=date.getFullYear() + '-' +
  (date.getMonth() + 1) + '-' +
  date.getDate() + ' ' +
  date.getHours() + ':' +
  date.getMinutes() + ':' +
  date.getSeconds()
  return Str
})

Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
