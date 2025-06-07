<template>
  <div>
    <el-dialog
      @close="chahao"
      title="页脚内容修改"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-row>
          <el-col :span="8">
            <el-form-item label="头部标题" :label-width="formLabelWidth">
              <el-input
                v-model="dataSource.title"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="上传图片" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="电话" :label-width="formLabelWidth">
              <el-input
                v-model="dataSource.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="公司地址" :label-width="formLabelWidth">
              <el-input
                v-model="dataSource.address"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
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
      imageUrl: "",
      dataSourceType: this.$store.getters.getRnavbarState.type,
      dataSource: this.$store.getters.getcomputedData("theFooter2").main.data,
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
        name: "theFooter2",
        data: this.dataSource,
      };
      this.$store.commit("updataDateSource", dataPackage);
      this.$store.commit("updatadialogState");
    },
    chahao() {
      this.$store.commit("updatadialogState");
    },
        handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  computed: {
    getDate() {
      return this.$store.getters.getcomputedData("theFooter2").main.data;
    },
  },
  watch: {
    getDate(val) {
      this.dataSource = val;
    },
  },
  created() {
    this.dataSourceType = this.$store.getters.getRnavbarState.type;
    this.dataSource = this.$store.getters.getcomputedData("theFooter2").main.data;
  },
};
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed gray;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>