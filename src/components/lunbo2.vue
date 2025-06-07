<template>
  <div @click="attrEdit" :style="{
      marginTop: dataSource.marginT,
      marginRight: dataSource.marginR,
      marginBottom: dataSource.marginB,
      marginLeft: dataSource.marginL,
    }">
    <el-carousel :interval="dataSource.speed" type="card" :height="dataSource.theHeight">
      <el-carousel-item v-for="(item,index) in dataSource.data" :key="index">
        <img :src="item.imgsrc" alt="" style="background-size: cover;width: 100%;height: 100%;">
      </el-carousel-item>
    </el-carousel>  
  </div>
</template>

<script>
export default {
  data() {
    return {
       dataSource: this.$store.getters.getcomputedData("theLunbo2").main,
    }
  },
  methods:{
    attrEdit() {
      let bs = {
        name: "theLunbo2",
        type: "Dlunbo2",
        haveImg: 3,
        title:'轮播二'
      };
      this.$store.commit("dateUpdate", bs);
    },
  },
  computed: {
    getState() {
      return this.$store.getters.getcomputedData("theLunbo2").main;
    },
  },
  watch: {
    getState(val) {
      this.dataSource = val;
    },
  },
};
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>