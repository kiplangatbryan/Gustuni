<template>
  <div class="slide-container">
    <tiny-slider v-bind="tinySliderOptions" class="row slide">
      <div class="slider-main">
        <div class="feature-content">
          <div class="title-content">
            <div class="title">Chris Mathenge</div>
            <div class="sub-text">Deleted Content</div>
          </div>
          <div class="action-bars">
            <q-btn
              rounded
              align="around l-align"
              class="q-mx-md"
              color="primary"
              label="play"
              icon="play_circle_outline"
            />
            <q-btn
              outline
              rounded
              color="primary"
              class="l-align"
              label="Follow"
              icon="person_add"
            />
          </div>
        </div>
      </div>
      <div class="slider-main">
        <div class="feature-content">
          <div class="title-content">
            <div class="title">Chris Mathenge</div>
            <div class="sub-text">Deleted Content</div>
          </div>
          <div class="action-bars">
            <q-btn
              rounded
              align="around l-align"
              class="q-mx-md"
              color="primary"
              label="play"
              icon="play_circle_outline"
            />
            <q-btn
              outline
              rounded
              color="primary"
              class="l-align"
              label="Follow"
              icon="person_add"
            />
          </div>
        </div>
      </div>
    </tiny-slider>

    <div class="advert">
      <tiny-box> Grand Release </tiny-box>
      <tiny-box> Featured </tiny-box>
    </div>
  </div>
</template>

<script>
import tiny__box from "@/components/tiny-box.vue";

export default {
  name: "slide-show",
  components: {
    "tiny-box": tiny__box,
  },
  data() {
    return {
      tinySliderOptions: {
        mouseDrag: true,
        loop: true,
        items: 1,
        gutter: 0,
        swipeBy: 1,
        swipeAngle: 45,
        autoplay: true,
        speed: "500",
        controls: false,
        nav: false,
        autoplayButtonOutput: false,
        controlsContainer: ".york",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slide-container {
  width: 100%;
  height: 400px;
  position: relative;
}
.slide {
  height: 100%;
}
.slider-main {
  width: 100%;
  height: 400px !important;
  // background: linear-gradient(45deg, #000, cyan);
  position: relative;
}
.feature-content {
  // transform: translate(-120px, 100px);
  position: absolute;
  bottom: 10%;
  left: 3%;
}

.advert {
  position: absolute;
  top: 10%;
  right: 10%;
}
.title {
  font-size: 35px;
  font-weight: 600;
  margin-left: 0.3em;
  line-height: 0.8;
}

.sub-text {
  font-size: 21px;
  margin-left: 0.6em;
}
.action-bars {
  margin-top: 1.2rem;
}

.l-rounded {
  border-radius: 5px;
}
.jam {
  max-width: 610px !important;
  min-width: 610px !important;
  background: linear-gradient(to top, #000, transparent) !important;
}
.l-align {
  align-items: center;
}
</style>
