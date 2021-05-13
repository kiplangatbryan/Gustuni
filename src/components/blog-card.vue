<template>
  <router-link :to="{}" class="blog-template">
    <div class="img-container">
      <img :src="getImg(blog.url)" alt="" />
      <div class="blog-date bg-primary column items-center">
        <div class="text-h4 text-white">15</div>
        <div class="text-h6 text-white">Jan</div>
      </div>
      <div class="slide-toggle">
        <q-btn round size="15px" flat icon="bookmark_outline" color="primary">
          <q-tooltip content-class="bg-red" :offset="[10, 10]">
            Save this post
          </q-tooltip>
        </q-btn>
      </div>
    </div>
    <div class="blog-body">
      <div class="text-h6">
        <div style="flex: 0 1 250px">{{ blog.title }}</div>
      </div>
      <div class="stats row q-py-lg ext-grey1" style="font-size: 12px">
        <div class="row items-center">
          <q-icon name="person_outline" size="18px" />
          <span style="margin-left: 5px">By Jane Doe</span>
        </div>
        <div class="row items-center q-ml-md">
          <q-icon name="thumb_up" size="18px" />
          <span style="margin-left: 5px">226</span>
        </div>
        <div class="row items-center" style="margin-left: 18px">
          <q-icon name="chats_bubble_outline" size="18px" />
          <span style="margin-left: 5px">226</span>
        </div>
      </div>

      <!-- <div class="actions q-py-md">
        <q-btn
          dense
          flat
          color="primary"
          size="13px"
          icon="favorite_border"
          label="226"
        ></q-btn>
        <q-btn
          dense
          class="q-ml-md"
          flat
          size="13px"
          icon="chat_bubble_outline"
          color="primary"
          label="300"
        ></q-btn>
      </div> -->
    </div>
  </router-link>
</template>

<script>
export default {
  name: "blog-card",
  props: ["blog"],
  methods: {
    getImg(img) {
      return require("../assets/Blog/" + img);
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-template {
  text-decoration: unset;
  color: inherit;
  overflow: hidden;
  display: block;
  border-radius: 3px;
  transition: box-shadow 0.4s linear;
  max-width: 280px;
  position: relative;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.089);
  }
  &:hover .slide-toggle {
    top: 10%;
  }
}
.slide-toggle {
  position: absolute;
  top: -50%;
  right: 5%;
  background: #fff;
  border-radius: 50%;
  transition: top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.blog-body {
  padding: 1em 1.5em;
}
.img-container {
  position: relative;
  margin-bottom: 1.3em;
  img {
    object-fit: cover;
    width: 100%;
  }
}
.stats {
}
.clamp {
  max-height: 84px;
  overflow: hidden;
  line-height: 28px;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
}
.blog-date {
  position: absolute;
  padding: 0.3em 1em;
  border-radius: 3px;
  bottom: -30px;
  left: 1em;
}
</style>
