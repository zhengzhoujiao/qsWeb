<template>
  <div @click="attrEdit" :style="{backgroundColor:cardColor,marginTop:dataSource.marginT,marginRight:dataSource.marginR,marginBottom:dataSource.marginB,marginLeft:dataSource.marginL}">
    <div class="numSee1">
      <div class="slDiv">
        <div class="mTitle">{{ dataSource.data.title }}</div>
        <div class="mContent">{{ dataSource.data.details }}</div>
      </div>
      <div class="srDiv" v-for="(item, index) in dataSource.data.dataList" :key="index">
        <div class="tTop">{{ item.title }}</div>
        <div class="tBottom">{{ item.number }}+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //数据可视化
      dataSource: this.$store.getters.getcomputedData('theData').main,
      // 主题色
      cardColor:this.$store.getters.getztState.cardColor
    };
  },
  methods: {
    attrEdit(){
      let bs = {
        name:'theData',
        type:'Ddate',
        haveImg: 0,
        title:'数据模版一'
      }
      this.$store.commit('dateUpdate',bs)
    }
  },
  computed:{
    getState(){
      return this.$store.getters.getztState.cardColor
    },
    getState2(){
      return this.$store.getters.getcomputedData('theData').main
    }
  },
  watch:{
    getState(val){
      this.cardColor = val
    },
    getState2(val){
      this.dataSource = val
    }
  }
};
</script>

<style lang="less" scoped>
.numSee1 {
  display: flex;
  margin-top: 140px;
  padding: 50px;
  .slDiv {
    flex: 3;
    .mTitle {
      font-size: 40px;
      font-weight: 600;
    }
    .mContent {
      margin-top: 20px;
      margin-right: 100px;
      line-height: 24px;
    }
  }
  .srDiv {
    flex: 1;
    text-align: center;
    border-left: 1px solid whitesmoke;
    .tTop {
      font-size: 18px;
      margin-top: 40px;
    }
    .tBottom {
      margin-top: 25px;
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>