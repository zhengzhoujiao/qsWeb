<template>
  <div>
    <el-dialog
      @close="chahao"
      title="数据展示内容修改"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-form-item label="头部标题" :label-width="formLabelWidth">
          <el-input v-model="dataSource.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容详情" :label-width="formLabelWidth">
          <el-input
            type="textarea"
            :rows="5"
            v-model="dataSource.details"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="数据详情" :label-width="formLabelWidth">
        </el-form-item>
        <el-row>
          <el-col :span="2" style="opacity: 0">1</el-col>
          <el-col :span="20">
            <el-col :span="8">
              <el-form-item label="头部标题" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[0].title"
                  autocomplete="off"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="头部标题" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[1].title"
                  autocomplete="off"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="头部标题" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[2].title"
                  autocomplete="off"
                ></el-input> </el-form-item></el-col
          ></el-col>
          <el-col :span="2" style="opacity: 0">1</el-col>
        </el-row>
                <el-row>
          <el-col :span="2" style="opacity: 0">1</el-col>
          <el-col :span="20">
            <el-col :span="8">
              <el-form-item label="具体数据" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[0].number"
                  autocomplete="off"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="具体数据" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[1].number"
                  autocomplete="off"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="具体数据" :label-width="formLabelWidth">
                <el-input
                  v-model="dataSource.dataList[2].number"
                  autocomplete="off"
                ></el-input> </el-form-item></el-col
          ></el-col>
          <el-col :span="2" style="opacity: 0">1</el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button @click="determine" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSourceType: this.$store.getters.getRnavbarState.type,
      dataSource: this.$store.getters.getcomputedData("theData2").main.data,
      dialogFormVisible: true,
      formLabelWidth: "120px",
    };
  },
  methods: {
    close() {
      this.$store.commit("updatadialogState");
    },
    determine() {
      let dataPackage = {
        name: "theData2",
        data: this.dataSource,
      };
      this.$store.commit("updataDateSource", dataPackage);
      this.$store.commit("updatadialogState");
    },
    chahao() {
      this.$store.commit("updatadialogState");
    },
  },
  computed: {
    getDate() {
      return this.$store.getters.getcomputedData("theData2").main.data;
    },
  },
  watch: {
    getDate(val) {
      this.dataSource = val;
    },
  },
  created() {
    this.dataSourceType = this.$store.getters.getRnavbarState.type;
    this.dataSource = this.$store.getters.getcomputedData("theData2").main.data;
  },
};
</script>

<style lang="less" scoped>
</style>