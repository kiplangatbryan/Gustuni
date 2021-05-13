<template>
  <div class="home">
    <top-nav />
    <div class="q-px-md hero row no-wrap">
      <event-slider />
      <top-chart class="chart-body" />
    </div>
    <sale-container />
    <sale-container />
    <sale-container />
  </div>
</template>

<script>
import top__nav from "@/components/top-nav.vue";
import slideshow from "@/components/slideshow.vue";
import chart from "@/components/chart.vue";
import productBody from "@/components/product-body.vue";

export default {
  name: "Home",
  components: {
    "top-nav": top__nav,
    "event-slider": slideshow,
    "top-chart": chart,
    "sale-container": productBody,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
