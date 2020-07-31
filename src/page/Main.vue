<template>
  <div id="main">
    <my-title title="主页" :showLine="true" />
    <van-button type="primary" @click="getDetail">{{msg}}</van-button>
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
      msg: "默认按钮",
    };
  },
  methods: {
    getDetail() {
      const data = {
        phoneNum: "12345678901",
      };
      this.$Api
        .getSmsCode(data)
        .then((res) => {
          console.log("getSmsCode" + res.data);
          this.msg = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#main {
  background: #ffffff;
  display: block;
  text-align: center;
}
</style>

