<template>
  <!-- 右侧悬浮栏 -->
  <div class="rNavbar">
    <div class="rNavbarMain">
      <div class="rNavbarMains" @mouseenter="show=true" @mouseout="show=false">
        <a class="iconfont icon-shouji-tianchong" href></a>
        <span>手机APP</span>
        <div v-show="show" class="hnvbewm">
          <img :src="ewm" alt class="hnvbewmimg" />
          <div class="hnvbewmspan">扫码下载</div>
        </div>
      </div>
      <div class="rNavbarMains">
        <a class="iconfont icon-gerenzhongxin" href></a>
        <span>个人中心</span>
      </div>
      <div class="rNavbarMains">
        <a class="iconfont icon-shouhoufuwu" href></a>
        <span>售后服务</span>
      </div>
      <div class="rNavbarMains">
        <a class="iconfont icon-kefu" href></a>
        <span>人工客服</span>
      </div>
      <div class="rNavbarMains">
        <a class="iconfont icon-gouwuche" href></a>
        <span>购物车</span>
      </div>
    </div>
    <div v-show="scrollTop > 30 ? true:false" @click="totop" class="rNavbars">
      <a class="iconfont icon-dingbu" href></a>
      <span>回顶部</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      ewm: require("../../public/img/jsbnb.png"),
      scrollTop:0
    };
  },
  methods:{
    scroll(){
      this.scrollTop=document.documentElement.scrollTop;
    },
    totop(){
      document.documentElement.scrollTop=0
    }
  },
  mounted(){
    window.addEventListener("scroll",this.scroll,true)
  }
};
</script>

<style lang="less" scoped>
@import '../assets/iconfont/iconfont.css';
.rNavbar {
  position: fixed;
  width: 82px;
  //452
  height: 558px;
  top: 80px;
  right: 0;
  z-index: 999;
  .rNavbarMain {
    border: whitesmoke 1px solid;
    height: 460px;
    background: white;
    .rNavbarMains {
      width: 100%;
      height: 460/5px;
      border-bottom: solid 1px whitesmoke;
      a {
        position: relative;
        display: block;
        width: 100%;
        height: 60px;
        font-size: 25px;
        text-align: center;
        line-height: 60px;
        text-decoration: none;
        color: gray;
        opacity: 0.7;
      }
      span {
        display: block;
        width: 100%;
        height: 30px;
        color: gray;
        text-align: center;
        line-height: 3px;
      }
    }
    .hnvbewm {
      top: 0;
      left: -116px;
      position: absolute;
      width: 120px;
      height: 140px;
      background: white;
      z-index: 999;
    }
    .hnvbewmimg {
      display: block;
      width: 90px;
      height: 90px;
      margin-top: 15px;
      margin-left: 15px;
      margin-right: 15px;
      background: palegreen;
    }
    .hnvbewmspan {
      width: 100%;
      text-align: center;
      line-height: 35px;
      font-size: 16px;
    }
  }
  .rNavbars {
    background-color: whitesmoke;
    height: 82px;
    width: 100%;
    margin-top: 3px;
    border: solid 1px whitesmoke;
    a {
      position: relative;
      display: block;
      width: 100%;
      height: 50px;
      font-size: 25px;
      text-align: center;
      line-height: 60px;
      text-decoration: none;
      color: gray;
      opacity: 0.7;
    }
    span {
      display: block;
      width: 100%;
      height: 20px;
      color: gray;
      text-align: center;
      line-height: 30px;
    }
  }
}
</style>
