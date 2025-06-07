<template>
  <div>
    <div style="height: 250px"></div>
    <div
      class="about1"
      @click="attrEdit"
      :style="{
        marginTop: dataSource.marginT,
        marginRight: dataSource.marginR,
        marginBottom: dataSource.marginB,
        marginLeft: dataSource.marginL,
      }"
    >
      <div class="abTop">
        <div class="abtL">
          <div class="abtlT">
            <div class="theImg">
              <img :src="dataSource.data.imgsrc" alt="" />
            </div>
          </div>
          <div class="abtlB">
            {{ dataSource.data.idea }}
          </div>
        </div>
        <div class="abtM">
          <div class="abtMT">
            {{ dataSource.data.title }}
          </div>
          <div class="sonFont">电话：{{ dataSource.data.phone }}</div>
          <div class="sonFont">QQ：{{ dataSource.data.QQ }}</div>
          <div class="sonFont">地址：{{ dataSource.data.address }}</div>
          <div class="sonFont">邮箱：{{ dataSource.data.email }}</div>
        </div>
        <div class="abtR">
          <div class="theimg">
            <img class="abtRimg" src="../../public/img/phone.png" alt="" />
            <span>全国服务热线</span>
          </div>
          <span>{{ dataSource.data.hotPhone }}</span>
        </div>
      </div>
      <div class="abBottom">版权所有@2017 JiaoShiBo.com,All Right Reserved</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSource: this.$store.getters.getcomputedData("theFooter").main,
    };
  },
  methods: {
    attrEdit() {
      let bs = {
        name: "theFooter",
        type: "Dfooter",
        haveImg: 0,
        title:'页脚模版一'
      };
      this.$store.commit("dateUpdate", bs);
    },
  },
  computed: {
    getState() {
      return this.$store.getters.getcomputedData("theFooter").main;
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
.about1 {
  width: 100%;
  height: 295px;
  background-color: #333333;
  padding-top: 100px;
  .abTop {
    display: flex;
    .abtL {
      margin-left: 5%;
      flex: 1;
      text-align: center;
      .abtlT {
        .theImg {
          margin-left: 30%;
          width: 40%;
          height: 120px;
          margin-bottom: 20px;
          img {
            width: 100%;
            height: 100%;
            background-size: cover;
          }
        }
      }
      .abtlB {
        font-size: 18px;
        color: gray;
      }
    }
    .abtM {
      flex: 1;
      margin-left: 10%;
      .abtMT {
        color: white;
        font-size: 24px;
        font-weight: 500;
      }
      .sonFont {
        margin-top: 10px;
        font-size: 18px;
        color: gray;
      }
    }
    .abtR {
      margin-right: 5%;
      flex: 1;
      text-align: center;
      .theimg {
        margin-left: 0%;
        margin-bottom: 30px;
        img {
          vertical-align: middle;
          margin-right: 10px;
        }
        span {
          vertical-align: middle;
          color: white;
          font-size: 20px;
          font-weight: 500;
        }
      }
      span {
        color: gray;
        font-size: 30px;
      }
    }
  }
  .abBottom {
    margin-top: 50px;
    width: 100%;
    height: 50px;
    bottom: 0;
    border-top: 1px solid gray;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: gray;
  }
}
</style>