import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },
  {
    path:'/Login',
    name:'Login',
    meta:{
      redirectAlreadyLogin:true
    },
    component:()=>import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path:'/centre',
    name:'centre',
    meta:{
      redirectAlreadyLogin:true
    },
    component:()=>import(/* webpackChunkName: "centre" */ '../views/centre.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.name!=='Login' && !store.state.user.isLogin){
//     next({name:'Login'})
//   } else if(to.meta.redirectAlreadyLogin && store.state.user.isLogin){
//     next({name:'index'})
//   } else{
//     next()
//   }
// })
export default router
