<template>
  <div>
    <div style="height: 250px"></div>
    <div
      @click="attrEdit"
      :style="{
        marginTop: dataSource.marginT,
        marginRight: dataSource.marginR,
        marginBottom: dataSource.marginB,
        marginLeft: dataSource.marginL,
      }"
    >
      <div class="about2">
        <div class="imgLeft">
          <img :src="dataSource.imgsrc" alt="" />
        </div>
        <div class="contentRight">
          <div class="formData">
            <span class="fdTitle">{{ dataSource.data.title }}</span>
            <span class="fdpT">联系电话:</span>
            <span class="fdPhone">{{ dataSource.data.phone }}</span>
            <span class="fdpA">公司地址:</span>
            <span class="fdAddress">{{ dataSource.data.address }}</span>
          </div>
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
      dataSource: this.$store.getters.getcomputedData("theFooter2").main
    };
  },
  methods: {
    attrEdit() {
      let bs = {
        name: "theFooter2",
        type: "Dfooter2",
        haveImg: 1,
        title:'页脚模版二'
      };
      this.$store.commit("dateUpdate", bs);
    },
  },
  computed: {
    getState() {
      return this.$store.getters.getcomputedData("theFooter2").main;
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
.about2 {
  width: 100%;
  height: 400px;
  display: flex;
  .imgLeft {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  .contentRight {
    background-color: #333333;
    flex: 1;
    .formData {
      margin-left: 20%;
      width: 40%;
      top: 50%;
      transform: translateY(50%);
      .fdTitle {
        display: block;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        color: white;
        margin-bottom: 30px;
      }
      .fdPhone {
        display: block;
        height: 50px;
        line-height: 50px;
        color: gray;
        font-size: 18px;
      }
      .fdAddress {
        display: block;
        height: 40px;
        line-height: 50px;
        color: gray;
        font-size: 18px;
      }
      .fdpT {
        display: block;
        color: white;
        font-size: 18px;
      }
      .fdpA {
        display: block;
        color: white;
        font-size: 18px;
      }
    }
  }
}
.abBottom {
  width: 100%;
  height: 50px;
  bottom: 0;
  border-top: 1px solid gray;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: gray;
  background-color: #333333;
  display: block !important;
}
</style>