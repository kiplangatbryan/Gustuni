<template>
  <div class="app-header row items-center justify-between">
    <div class="left_head row items-center">
      <div class="logo text-dark">Gustuni<span>.</span></div>
      <search-bar class="search__box" />
    </div>

    <user-container class="ache" />
  </div>
</template>

<script>
import search__bar from "@/components/search-bar.vue";
import user__bar from "@/components/user-container";
export default {
  name: "app-header",
  components: {
    "search-bar": search__bar,
    "user-container": user__bar,
  },
};
</script>

<style lang="scss" scoped>
.app-header {
  padding: 1em 3em;
  .logo {
    padding: 10px 15px;
    font-size: 35px;
    color: rgba(0, 0, 0, 0.651);
    font-weight: 900;
    font-family: "Nunito";
    span {
      font-size: 40px;
    }
  }
  .search__box {
    margin-left: 50px;
  }
}
</style>
