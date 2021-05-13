<template>
  <div class="q-px-md">
    <div class="text-h5 q-py-md">Upcoming Events</div>
    <div class="boss">
      <tiny-slider v-bind="tinySliderOptions">
        <div class="main-event">
          <div class="main-content text-white">
            <div class="text-h2">Khaligragh Jones</div>
            <div class="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              reiciendis totam, aperiam quidem recusandae non beatae dolorum at!
              Voluptate, veritatis?
            </div>
            <q-btn color="red" label="KES 1000 Buy Ticket" />
          </div>
        </div>
        <div class="main-event catch">
          <div class="main-content text-white">
            <q-btn color="red" label="KES 500 Buy Ticket" />
          </div>
        </div>
      </tiny-slider>
      <q-btn flat round color="primary" class="left" icon="chevron_left" />
      <q-btn flat round color="primary" class="right" icon="chevron_right" />
    </div>
    <top-nav />

    <div class="events">
      <div class="text-h5">Featured Events</div>
      <div class="flow-grid">
        <div class="grid-1">
          <img src="../assets/Events/poster-1.jpg" alt="" srcset="" />
        </div>
        <div class="grid-2">
          <img src="../assets/Events/poster-2.jpg" alt="" srcset="" />
        </div>
        <div class="grid-3">
          <img src="../assets/Events/poster-3.jpg" alt="" srcset="" />
        </div>
        <div class="grid-4">
          <img src="../assets/Events/poster-5.jpg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import top_nav from "@/components/top-nav.vue";
export default {
  name: "events",
  components: {
    "top-nav": top_nav,
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
        autoplayButtonOutput: false,
        nav: true,
        navPosition: "bottom",
        controls: true,
        prevButton: ".left",
        nextButton: ".right",
        center: true,
      },
      events: ["poster-1.jpg", "poster-2.jpg", "poster-4.jpg", "poster-5.jpg"],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-event {
  height: 400px;
  background: linear-gradient(45deg, rgb(255, 0, 234), transparent),
    url("../assets/img/imd-4.jpg");
  background-size: cover;
  position: relative;
  .main-content {
    position: absolute;
    left: 5%;
    bottom: 5%;
    width: 280px;
    padding: 2em;
    .content {
      padding: 1.5em 0;
    }
  }
}
.catch {
  background: url("../assets/Events/poster-4.jpg") no-repeat;
}
.flow-grid {
  margin-top: 3em;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 3em;
}
img {
  width: 100%;
}
.grid-1 {
  grid-row: 1/3;
}
.boss {
  position: relative;
}

.right,
.left {
  position: absolute;
  top: calc(40% + 10px);
}
.left {
  left: -5%;
}
.right {
  right: 10%;
  top: -150%;
}
</style>
