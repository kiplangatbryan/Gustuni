<template>
  <div id="app">
    <app-header />
    <div class="container">
      <div class="nav__container">
        <side-bar />
      </div>
      <main class="data-box">
        <router-view />
      </main>
      <lu-player />
    </div>
  </div>
</template>

<script>
import side__bar from "@/components/side-nav.vue";
import main__header from "@/components/app-header.vue";

export default {
  name: "app",
  components: {
    "side-bar": side__bar,
    "app-header": main__header,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
* {
  color: #414364;
  font-family: "Noto Sans CJK JP";
}
#app {
  // background: whitesmoke;
}

.container {
  display: grid;
  flex-wrap: nowrap;
  padding: 0 3em;
  grid-template-columns: 200px auto;
  .nav__container {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }
  .data-box {
    padding: 0 2.5em;
    .hero {
      display: grid;
      grid-template-columns: 70% 30%;
    }
  }
}
</style>
