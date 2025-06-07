<template>
  <div class="content" @click="attrEdit" :style="{backgroundColor:cardColor,marginTop:dataSource.marginT,marginRight:dataSource.marginR,marginBottom:dataSource.marginB,marginLeft:dataSource.marginL}">
    <div class="numSee2">
      <div class="mTitle2">{{ dataSource.data.title }}</div>
      <div class="mContent2">{{ dataSource.data.details }}</div>
      <div class="tBottom2">
        <div class="tBmain">
          
          <div class="tBmains" v-for="(item, index) in dataSource.data.dataList" :key="index">
            <div class="tTop2">{{ item.number }}+</div>
            <div class="tBottom2">{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //数据可视化
      dataSource: this.$store.getters.getcomputedData('theData2').main,
      // 主题色
      cardColor:this.$store.getters.getztState.cardColor
    };
  },
  methods:{
    attrEdit(){
      let bs = {
        name:'theData2',
        type:'Ddate2',
        haveImg: 0,
        title:'数据模版二'
      }
      this.$store.commit('dateUpdate',bs)
    }
  },
  computed:{
    getState(){
      return this.$store.getters.getztState.cardColor
    },
    getState2(){
      return this.$store.getters.getcomputedData('theData2').main
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
.numSee2 {
  margin-top: 140px;
  padding: 50px;
  .mTitle2 {
    font-size: 40px;
  }
  .mContent2 {
    margin-top: 30px;
    font-size: 18px;
    line-height: 30px;
  }
  .tBottom2 {
    .tBmain {
      width: 60%;
      display: flex;
      margin-top: 45px;
      margin-left: 20%;
      .tBmains {
        flex: 1;
        text-align: center;
        .tTop2 {
          font-size: 50px;
          font-weight: 600;
        }
        .tBottom2 {
          margin-top: 25px;
        }
      }
    }
  }
}
</style>