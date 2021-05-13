<template>
  <div class="data-box q-py-sm">
    <div class="row items-center justify-between media__card q-pr-lg">
      <div class="q-mr-lg">1</div>
      <img
        :src="require('../assets/img/imd-2.jpg')"
        alt=""
        width="50"
        height="40"
        class="avatar"
      />
      <div class="data-store q-mx-lg row items-center">
        <div class="text-subtitle2 text-dark">Middle Child</div>
        <div class="q-ml-lg" style="font-size: 12px">J. Cole</div>
      </div>
      <q-btn class="q-px-lg" rounded flat color="orange" icon="playlist_play" />
      <q-btn class="q-px-lg" rounded flat color="orange" icon="play_arrow" />
      <div class="time justify-">3.45</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "harambee",
};
</script>

<style lang="scss" scoped></style>
