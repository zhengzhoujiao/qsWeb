<template>
  <div>
    <el-dialog
      @close="chahao"
      title="主体内容修改"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-form-item label="图片操作" :label-width="formLabelWidth">
        </el-form-item>
        <el-form-item
          v-for="(item, index) in dataSource"
          :key="index"
          style="border-top: 1px solid whitesmoke"
        >
          <el-row style="margin-top: 20px">
            <div @click="getImgIndex(index)">
              <el-col :span="8">
                <el-form-item label="上传图片" :label-width="formLabelWidth">
                  <el-upload
                    class="avatar-uploader"
                    action="http://localhost:3001/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                  >
                    <img v-if="item.imgsrc" :src="item.imgsrc" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                  </el-upload>
                </el-form-item>
              </el-col>              
            </div>
          </el-row>
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
      dataSource: this.$store.getters.getcomputedData("theLunbo").main.data,
      num: this.$store.getters.getcomputedData("theLunbo").main.data
        .length,
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
        name: "theLunbo",
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
        this.dataSource.push({
          imgsrc: "",
        });
      }
      //删除数组
      else if (value < oldValue) {
        this.dataSource.pop();
      }
    },
    getImgIndex(index){
      console.log(index)
      this.imgIndex = index
    },
    handleAvatarSuccess(res, file) {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      let data = {};
      data.imgurl = 'http://192.168.160.1:8012/'+res.filePath;
      data.name = this.name;
      data.index = this.imgIndex
      console.log(data)
      this.$store.commit("imgUpload4", data);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === "image/png";
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isPNG) {
        this.$message.error("上传头像图片只能是 png 格式!");
      }
      if (!isLt10M) {
        this.$message.error("上传头像图片大小不能超过 10MB!");
      }
      return isPNG && isLt10M;
    },
  },
  computed: {
    getDate() {
      return this.$store.getters.getcomputedData("theLunbo").main.data;
    },
  },
  watch: {
    getDate(val) {
      this.dataSource = val;
    },
  },
  created() {
    this.dataSource = this.$store.getters.getcomputedData("theLunbo").main.data;
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
  width: 348px;
  height: 178px;
  display: block;
}
</style>