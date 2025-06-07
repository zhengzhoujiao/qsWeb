<template>
  <div>
    <el-dialog
      @close="chahao"
      title="导航参数修改"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-form-item
          v-for="(item, index) in dataSource"
          :key="index"
          label="导航名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="item.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="内容数量" :label-width="formLabelWidth">
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
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
      dataSource: this.$store.getters.getcomputedData("theNavbar").main.data,
      num: this.$store.getters.getcomputedData("theNavbar").main.data.length,
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
        name: "theNavbar",
        data: this.dataSource,
      };
      this.$store.commit("updataDateSource", dataPackage);
      this.$store.commit("updatadialogState");
    },
    chahao() {
      this.$store.commit("updatadialogState");
    },
    handleChange(value, oldValue) {
      //添加数组
      if (value > oldValue) {
        this.dataSource.push({ title: "" });
      }
      //删除数组
      else if (value < oldValue) {
        this.dataSource.pop();
      }
    },
  },
  computed: {
    getDate() {
      return this.$store.getters.getcomputedData("theNavbar").main.data;
    },
  },
  watch: {
    getDate(val) {
      this.dataSource = val;
    },
  },
  created() {
    this.dataSourceType = this.$store.getters.getRnavbarState.type;
    this.dataSource = this.$store.getters.getcomputedData(
      "theNavbar"
    ).main.data;
  },
};
</script>

<style lang="less" scoped>
</style>