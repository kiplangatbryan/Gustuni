<template>
  <div class="row q-gutter-md">
    <div class="rate text-grey text-h2">
      <slot> </slot>
    </div>
    <div class="data">
      <div class="row">
        <div class="content col-md-9">
          <div class="text-subtitle4">John Doe</div>
          <div class="text-h6">The good parts of Node.js</div>
          <div class="text-grey q-mt-sm">Dec 13, 2021 . 4 min read</div>
        </div>
        <div class="col-md-auto">
          <img
            style="object-fit: cover"
            width="80"
            height="80"
            :src="require('../assets/Blog/single_blog_1.png')"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-posts",
};
</script>

<style lang="scss" scoped>
.rate {
  letter-spacing: 2px;
}
</style>
