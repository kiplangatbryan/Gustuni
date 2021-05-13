<template>
  <div class="discover">
    <div class="card-ctn q-pa-md">
      <div class="text-h5 q-mb-md">Moods</div>
      <div class="row q-gutter-md">
        <tiny-box v-for="(info, index) in moods" :key="index">
          {{ info }}
        </tiny-box>
      </div>
    </div>
    <div class="card-ctn q-pa-md">
      <div class="text-h5 q-mb-md">Genres</div>
      <div class="row q-gutter-md">
        <tiny-box v-for="(info, index) in genres" :key="index">
          {{ info }}
        </tiny-box>
      </div>
    </div>
    <sale-container />
    <sale-container />
    <sale-container />
  </div>
</template>

<script>
import productBody from "@/components/product-body.vue";
import tiny__box from "@/components/tiny-box.vue";

export default {
  name: "discover",
  components: {
    "sale-container": productBody,
    "tiny-box": tiny__box,
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
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        controlsContainer: ".york",
      },
      moods: ["Party", "Sexy", "Study and focus", "Meditation", "Romance"],
      genres: ["Gengeton", "Trap", "Bongo", "Rock", "Kadinali", "Sickly"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
