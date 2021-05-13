<template>
  <div class="main">
    <div class="row q-my-lg">
      <featured-blog
        class="col-md-6"
        :blog="{
          url: 'learn_about_bg.png',
          title: 'Do you really see the beaty of code',
        }"
      />

      <div class="q-pl-lg col-md-6 column">
        <single-blog />
        <single-blog />
        <single-blog />
        <single-blog />
      </div>
    </div>
    <q-separator />
    <div class="trending q-mb-lg">
      <div class="text-h4 q-pl-md q-mt-lg q-mb-md">Trending Posts</div>
      <div class="row q-gutter-lg">
        <trending-post> 01 </trending-post>
        <trending-post> 02 </trending-post>
        <trending-post> 03 </trending-post>
        <trending-post> 04 </trending-post>
      </div>
    </div>
    <q-separator />

    <div class="blog-cards row">
      <div class="col-md-8">
        <header class="atoms">
          <div class="text-h3 q-pl-md q-mb-lg">Go Crazy ...</div>
        </header>
        <div class="row q-gutter-lg">
          <blog-template
            v-for="(blog, index) in blogs"
            :blog="blog"
            :key="index"
          />
        </div>
      </div>
      <div class="col-md-4 advert">
        <top-blogs />
        <newsletter />
      </div>
    </div>
    <div class="pagination q-py-md" style="width: 70%">
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="black"
          :max="10"
          :max-pages="6"
          :boundary-numbers="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import blog_card from "@/components/blog-card.vue";
import top_blogs from "@/components/top_blogs.vue";
import newsletter from "@/components/news-letter.vue";
import single__blog from "@/components/single-blog.vue";
import trending__post from "@/components/top-posts.vue";
import featured_blog from "@/components/featured-blog.vue";

export default {
  name: "blog",
  components: {
    "blog-template": blog_card,
    "top-blogs": top_blogs,
    newsletter,
    "single-blog": single__blog,
    "trending-post": trending__post,
    "featured-blog": featured_blog,
  },
  data() {
    return {
      text: "",
      current: 1,
      search: "",
      blogs: [
        {
          title: "Khaligraph Jones New Single",
          url: "single_blog_1.png",
        },
        {
          title: "Waka Waka Genge",
          url: "single_blog_2.png",
        },
        {
          title: "Guru wa Mastingo",
          url: "single_blog_3.png",
        },
        {
          title: "Kuwabeba Band Released a new solo",
          url: "single_blog_4.png",
        },
        {
          title: "Look at the bright side",
          url: "single_blog_5.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.hero {
  display: grid;
  grid-template-columns: 50% 50%;
  // gap: 1em;
}
.trending {
  grid-row: 1/5;
}
.atoms {
  padding: 1em 0;
}

.advert {
  margin-top: 3em;
  padding: 0 0 0 3em;
}
</style>
