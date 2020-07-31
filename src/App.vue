<template>
  <div id="app">
    <transition :name="transitionName" :mode="transitionMode" :duration="transitionDuration">
      <router-cache>
        <router-view class="router-view"></router-view>
      </router-cache>
    </transition>
  </div>
</template>

<script>
import routerTransitionMixins from "./utils/router-transition.js";
export default {
  name: "App",
  mixins: [routerTransitionMixins],
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>