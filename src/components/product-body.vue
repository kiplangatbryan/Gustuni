<template>
  <div class="new-releases">
    <div class="row justify-between q-my-md">
      <div class="text-h5">
        <slot> New Release </slot>
      </div>
      <q-btn flat class="text-primary" label="More" />
    </div>
    <div class="slider">
      <tiny-slider v-bind="tinySliderOptions" class="row q-py-lg">
        <song-card v-for="(item, index) in data" :song="item" :key="index" />
      </tiny-slider>
      <q-btn flat round color="primary" class="right" icon="chevron_right" />
      <q-btn flat round color="primary" class="left" icon="chevron_left" />
    </div>
  </div>
</template>

<script>
import card from "@/components/card.vue";

export default {
  name: "main-body",
  components: {
    "song-card": card,
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: true,
        items: 4,
        gutter: 20,
        swipeBy: 1,
        swipeAngle: 45,
        autoplay: true,
        speed: "500",
        autoplayButtonOutput: false,
        controls: true,
        nav: false,
        prevButton: ".left",
        nextButton: ".right",
      },

      data: [
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-1.jpg",
        },
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-2.jpg",
        },
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-3.jpg",
        },
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-4.jpg",
        },
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-5.jpg",
        },
        {
          title: "Bad blocks",
          artist: "Marshmellow",
          imgUrl: "imd-3.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.new-releases {
  padding: 1em 1em;
}
.slider {
  position: relative;
}
.right,
.left {
  position: absolute;
  top: calc(15% + 10px);
}
.left {
  left: -5%;
}
.right {
  right: -1%;
}
</style>
