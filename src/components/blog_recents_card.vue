<template>
  <div class="card">
    <img :src="require('../assets/Blog/learn_about_bg.png')" alt="" />
  </div>
</template>

<script>
export default {
  name: "blog-recents-card",
};
</script>

<style lang="scss" scoped>
.card {
  width: 100px;
  height: 90px;
  border-radius: 10px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
