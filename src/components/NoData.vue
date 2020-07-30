<template>
  <div class="no-data">
    <img src="../assets/common/no_data.svg" alt="" />
    <p>暂无数据</p>
  </div>
</template>

<script>
export default {
  name: "noData",
};
</script>

<style scoped lang="scss">
.no-data {
  text-align: center;
  padding: 10rem 0;
  img {
    width: 15rem;
  }
  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: #999999;
  }
}
</style>