<template>
  <div
    :style="{
      marginTop: dataSource.marginT,
      marginRight: dataSource.marginR,
      marginBottom: dataSource.marginB,
      marginLeft: dataSource.marginL,
    }"
  >
    <div
      class="content"
      @click="attrEdit"
      :style="{ backgroundColor: cardColor }"
    >
      <div class="mainChunk2">
        <div class="mcTitle2">{{ dataSource.data.paTitle }}</div>
        <div
          class="mcContent2"
          v-for="(item, index) in dataSource.data.paList"
          :key="index"
        >
          <div class="mcImg2">
            <img :src="item.imgsrc" alt="" />
          </div>
          <div class="mcMain">
            <span class="mcmTitle">{{ item.title }}</span>
            <span class="mcmContent">{{ item.content }}</span>
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
      //成员,关于品牌相关
      dataSource: this.$store.getters.getcomputedData("theMain2").main,
      cardColor: this.$store.getters.getztState.cardColor,
    };
  },
  methods: {
    attrEdit() {
      let bs = {
        name: "theMain2",
        type: "Dmain2",
        haveImg: 0,
        title:'内容主体二'
      };
      this.$store.commit("dateUpdate", bs);
    },
  },
  computed: {
    getState() {
      return this.$store.getters.getztState.cardColor;
    },
    getState2() {
      return this.$store.getters.getcomputedData("theMain2").main;
    },
  },
  watch: {
    getState(val) {
      this.cardColor = val;
    },
    getState2(val) {
      this.dataSource = val;
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  margin-left: 90px;
  margin-right: 90px;
  margin-top: 150px;
  background-color: white;
}
.mainChunk2 {
  margin-top: 80px;
  overflow: hidden;
  padding: 40px;
  .mcTitle2 {
    font-size: 40px;
    margin-bottom: 60px;
  }
  .mcContent2 {
    margin-top: 30px;
    width: 100%;
    background-color: #e8e8e8;
    .mcImg2 {
      height: 250px;
      width: 20%;
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
    .mcMain {
      display: inline-block;
      width: 75%;
      vertical-align: top;
      margin-left: 5%;
      margin-top: 25px;
      .mcmTitle {
        font-size: 20px;
        display: block;
      }
      .mcmContent {
        margin-top: 30px;
        display: block;
      }
    }
  }
}
</style>