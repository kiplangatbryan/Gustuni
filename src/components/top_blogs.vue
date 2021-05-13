<template>
  <div class="blogs_list">
    <div class="text-h5 q-pb-md">Instagram Photos</div>
    <q-separator />
    <div class="row data-link q-gutter-lg q-py-lg">
      <blog-card-template v-for="(item, index) in 4" :key="index" />
    </div>
  </div>
</template>

<script>
import blog_recents_card from "@/components/blog_recents_card.vue";
export default {
  name: "top-blogs",
  components: {
    "blog-card-template": blog_recents_card,
  },
};
</script>

<style lang="scss" scoped></style>
