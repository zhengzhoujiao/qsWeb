<template>
  <div class="login_container">
    <!-- 标题部分 -->
    <div class="title">QS-web自助建站系统</div>
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../../public/img/zxc.jpg" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="account">
          <el-input
            v-model="loginForm.account"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        account: "admin",
        password: "admin",
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        account: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (!valid) return;
        console.log(this.loginForm)
        const { data: res } = await this.$http.get("login",{params:{
          account:this.loginForm.account,
          password:this.loginForm.password
        }});
        console.log(res)
        if (!res) return this.$message.error("登录失败！");
        this.$message.success("登录成功");
        this.$store.commit('LoginState')
        // // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
        // //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
        // //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        // window.sessionStorage.setItem("token", res.result.token);
        // window.sessionStorage.setItem("bid", res.result.bid);
        // window.sessionStorage.setItem("Rid", res.result.rid);
        // this.$store.commit("getName", res.result.bName);
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push("/");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  float: left;
  text-align: center;
  font-size: 40px;
  margin-top: 60px;
}
.login_container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../../public/img/cool-background.png);
  background-size: 100% 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-image: url(../../public/img/cb3.png);
  background-size: 100% 100%;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
