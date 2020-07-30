<template>
  <div class="title-view">
    <div class="title-view-top">
      <img :src="leftIcon?leftIcon:defaultSrc" @click="$router.back(-1)" v-show="showLeftIcon" />
      <p>{{title}}</p>
      <img :src="rightIcon" v-show="showRightIcon" />
    </div>
    <div class="div-hr" v-show="showLine">
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {
    leftIcon: String,
    title: String,
    rightIcon: String,
    showLine: {
      type: Boolean,
      default: true,
    },
    showLeftIcon: {
      type: Boolean,
      default: true,
    },
    showRightIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      defaultSrc: require("../assets/common/ic_back.png"),
    };
  },
};
</script>

<style scoped lang="scss">
.title-view {
  .title-view-top {
    display: flex;
    height: 40px;
    background: #ffffff;
    img {
      padding: 5px;
      width: 10px;
      height: 15px;
      align-self: center;
    }
    p {
      font-size: 20px;
      margin: 0;
      color: black;
      width: 100%;
      text-align: center;
      align-self: center;
    }
  }
  .div-hr {
    hr {
      width: 100%;
      background: #999999;
      transform: scaleY(0.2);
    }
  }
}
</style>