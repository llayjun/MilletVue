<template>
  <div id="main">
    <my-title title="主页" :showLine="true" />
    <van-button type="primary">默认按钮</van-button>
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
      
    };
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

