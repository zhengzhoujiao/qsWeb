<template>
  <div class="navbar">
    <!-- 添加新闻做弹窗 一条条加 三个按钮 下一条(点击后添加新表单组填写)
    添加(将所以信息添加) 取消 公用属性 外边距 可以复用  设置vuex中变量记录当前
    点击组件名以及侧边栏模式(有图片无图片两种)-->
    <div
      style="
        margin-left: 50%;
        transform: translateX(-50%);
        text-align: center;
        margin-bottom: 30px;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
      "
    >
      <span>{{componentType.title}}</span>
    </div>
    <div
      style="
        margin-left: 50%;
        transform: translateX(-50%);
        text-align: center;
        margin-bottom: 30px;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
      "
    >
      <span>整体调整</span>
    </div>
    <div class="son">
      <div style="margin-bottom: 10px">初始化</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="success" @click="start"
          >模板初始化</el-button
        >
        <el-button
          style="flex: 1"
          size="medium "
          type="danger "
          @click="refresh"
          >页面初始化</el-button
        >
      </div>
    </div>
    <div class="son">
      <div style="margin-bottom: 10px">主题调整</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="primary" @click="theme"
          >主题一</el-button
        >
        <el-button style="flex: 1" size="medium " type="primary" @click="theme2"
          >主题二</el-button
        >
      </div>
    </div>
    <div
      style="
        margin-left: 50%;
        transform: translateX(-50%);
        text-align: center;
        margin-bottom: 30px;
        border-bottom: 1px solid gray;
        padding-bottom: 20px;
      "
    >
      <span>属性调整</span>
    </div>

    <div class="son">
      <div style="margin-bottom: 10px">水平移动</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="warning" @click="left"
          >左移</el-button
        >
        <el-button style="flex: 1" size="medium " type="warning" @click="Right"
          >右移</el-button
        >
      </div>
    </div>
    <div class="son">
      <div style="margin-bottom: 10px">垂直移动</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="primary" @click="Top"
          >上移</el-button
        >
        <el-button style="flex: 1" size="medium " type="primary" @click="Bottom"
          >下移</el-button
        >
      </div>
    </div>
    <div v-show="componentType.haveImg === 3" class="son">
      <div style="margin-bottom: 10px">高度调整</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="warning" @click="up"
          >增高</el-button
        >
        <el-button style="flex: 1" size="medium " type="warning" @click="down"
          >降低</el-button
        >
      </div>
    </div>
    <div v-show="componentType.haveImg === 3" class="son">
      <div style="margin-bottom: 10px">轮播速度</div>
      <div style="display: flex">
        <el-button style="flex: 1" size="medium " type="primary" @click="fast"
          >加速</el-button
        >
        <el-button style="flex: 1" size="medium " type="primary" @click="slow"
          >减速</el-button
        >
      </div>
    </div>
    <div class="son">
      <div style="margin-bottom: 10px">文字信息修改</div>
      <div style="display: flex">
        <el-button
          @click="openDialog"
          style="flex: 1"
          size="medium "
          type="success"
          >更新数据</el-button
        >
      </div>
    </div>
    <div v-show="componentType.haveImg === 1" class="clSon">
      <div style="margin-bottom: 20px">
        <span>图片更新</span>
      </div>
      <el-upload
        class="avatar-uploader"
        action="http://localhost:3001/upload"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
      <!-- <el-form ref="form" label-width="60px">
        <el-form-item label="大标题">
          <el-input v-model="deDate"></el-input>
        </el-form-item>
      </el-form> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      componentType: {},
      imageUrl: "",
      type: "",
      name: "",
      deDate: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,
    };
  },
  components: {},
  methods: {
    theme() {
      this.$store.commit("setOneState");
    },
    theme2() {
      this.$store.commit("setTwoState");
    },
    openDialog() {
      this.$store.commit("updatadialogState");
    },
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      let data = {};
      data.imgurl = 'http://192.168.160.1:8012/'+res.filePath;
      data.name = this.name;
      this.$store.commit("imgUpload", data);
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
    left() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("toLeft", this.name);
    },
    Right() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("toRight", this.name);
    },
    Top() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("toTop", this.name);
    },
    Bottom() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("toBottom", this.name);
    },
    fast() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("fastSpeed", this.name);
    },
    slow() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("slowSpeed", this.name);
    },
    up() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("upHeight", this.name);
    },
    down() {
      this.name = this.$store.getters.getRnavbarState.name;
      this.type = this.$store.getters.getRnavbarState.type;
      this.$store.commit("downHeight", this.name);
    },
    refresh() {
      this.$store.commit("InitializeList");
    },
    start() {
      this.$store.commit("refresh");
    },
  },
  computed: {
    getType() {
      return this.$store.getters.getRnavbarState;
    },
  },
  watch: {
    getType(val) {
      this.componentType = val;
      this.imageUrl = val.imgsrc
    },
  },
};
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 100%;
  border-left: 1px solid #e6e6fa;
  overflow: scroll;
  overflow-x: hidden;
  .son {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
    margin-bottom: 20px;
  }
  .clSon {
    margin-left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 250px;
    border-bottom: 1px solid whitesmoke;
    margin-bottom: 30px;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
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
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>