<template>
  <div class="row">
    <div class="content col-md-9">
      <div class="text-subtitle4">John Doe</div>
      <div class="text-h6">The good parts of Node.js</div>
      <div class="text-grey q-mt-sm">Dec 13, 2021 . 4 min read</div>
    </div>
    <div class="col-md-auto">
      <img
        style="object-fit: cover"
        width="90"
        height="90"
        :src="require('../assets/Blog/single_blog_1.png')"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "single-blog",
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: -60px;
}
</style>
