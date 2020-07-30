<template>
  <div id="login">
    <my-title title="登录" :showLine="false" :showLeftIcon="false" />
    <div class="space-div" />
    <img src="../assets/common/ic_login_logo.png" />
    <div class="space-div-top" />
    <input v-model="accout" placeholder="请输入账号" />
    <div class="space-div" />
    <input v-model="passWord" placeholder="请输入密码" />
    <div class="space-div-button" />
    <div class="div-submit" @click="login">
      <img src="../assets/common/ic_login_bg.png" />
      <span>登录</span>
    </div>
  </div>
</template>

<script>
import myTitle from "@/components/MyTitleView.vue";

export default {
  name: "login",
  components: {
    myTitle,
  },
  data() {
    return {
      accout: "",
      passWord: "",
    };
  },
  methods: {
    login() {
      console.log('跳转到主页')
      this.$router.push({ path:'/main'})
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  background: #ffffff;
  display: block;
  text-align: center;
  .space-div-top {
    height: 100px;
  }
  .space-div {
    height: 20px;
  }
  .space-div-button {
    height: 120px;
  }
  img {
    width: 100px;
    height: 100px;
  }
  input {
    height: 30px;
    width: 80%;
    border-radius: 5px;
    border: 1px solid #999999;
  }
  .div-submit {
    display: block;
    margin: auto;
    position: relative;
    img {
      width: 80%;
      height: 40px;
      margin: auto;
      display: block;
    }
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

