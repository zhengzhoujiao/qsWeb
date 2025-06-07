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
      <div class="mainChunk">
        <div class="mcTitle">
          {{ dataSource.data.NewsTitle }}
        </div>
        <div class="mcbody">
          <div
            v-for="(item, index) in dataSource.data.theNews"
            :key="index"
            class="mcbSon"
          >
            <div class="theImg">
              <img :src="item.imgsrc" alt="" />
            </div>
            <div class="mcbTitle">
              <div class="mcbStitle">
                <span class="sf">{{ item.title }}</span>
              </div>
              <div class="ssf">
                <span class="ss">{{ item.date }}</span>
              </div>
              <span class="mcContent">{{ item.content }}</span>
            </div>
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
      //新闻相关
      dataSource: this.$store.getters.getcomputedData("theMain").main,
      cardColor: this.$store.getters.getztState.cardColor,
    };
  },
  methods: {
    attrEdit() {
      let bs = {
        name: "theMain",
        type: "Dmain",
        haveImg: 0,
        title:'内容主体一'
      };
      this.$store.commit("dateUpdate", bs);
    },
  },
  computed: {
    getState() {
      return this.$store.getters.getztState.cardColor;
    },
    getState2() {
      return this.$store.getters.getcomputedData("theMain").main;
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
  margin-top: 150px;
  margin-left: 90px;
  margin-right: 90px;
}
.mainChunk {
  margin-top: 80px;
  padding: 40px;
  .mcTitle {
    text-align: center;
    font-size: 40px;
  }
  .mcbody {
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .mcbSon {
      margin-top: 50px;
      display: inline-block;
      width: 32%;
      vertical-align: top;
      .theImg {
        width: 100%;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .mcbTitle {
        .mcbStitle {
          overflow: hidden;
          width: 100%;
          .sf {
            margin-top: 10px;
            margin-bottom: 10px;
            float: left;
            font-size: 18px;
          }
        }
        .ssf:after {
          content: "";
          display: block;
          clear: both;
        }
        .ss {
          float: right;
          color: orange;
        }
        .mcContent {
          display: block;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>