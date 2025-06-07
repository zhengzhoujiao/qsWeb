<template>
<div @click="attrEdit" :style="{marginTop:navlist.marginT,marginRight:navlist.marginR,marginBottom:navlist.marginB,marginLeft:navlist.marginL}">
  <el-menu class="el-menu-demo" mode="horizontal" >
    <el-menu-item v-for="(item, index) in navlist.data" :key="index">{{
      item.title
    }}</el-menu-item>
    <div class="imgR">
      <img class="tImg" :src="navlist.imgsrc" alt="" />
    </div>
  </el-menu>  
</div>
</template>

<script>
export default {
  data() {
    return {
      // 导航栏动态数据
      navlist: this.$store.getters.getcomputedData('theNavbar').main
    };
  },
  methods:{
    attrEdit(){
      let bs = {
        name:'theNavbar',
        type:'Dnavbar',
        haveImg: 1,
        title:'导航一'
      }
      this.$store.commit('dateUpdate',bs)
    }
  },
  computed:{
    getDate(){
      return this.$store.getters.getcomputedData('theNavbar').main
    }
  },
  watch:{
    getDate(val){
      this.navlist = val
    }
  },
  created() {

  },
};
</script>

<style lang="less" scoped>
  .imgR {
    float: right;
    margin-right: 50px !important;
    margin: 10px;
    .tImg {
      width: 100px;
      height: 100px;
    }
  }
</style>