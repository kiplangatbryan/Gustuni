<template>
  <div class="player row bg-primary text-white justify-between items-center">
    <div class="song-details row items-center">
      <q-icon size="25px" name="headset" class="text-fade" />
      <div class="details column q-ml-md">
        <span class="text-fade">Oscar Hayes</span>
        <div class="text-h6">The Dawn</div>
      </div>
    </div>
    <div class="controls">
      <q-icon name="play"></q-icon>
      <q-btn flat round color="white" icon="skip_previous" />

      <q-btn
        v-if="playing"
        @click="play"
        flat
        round
        color="white"
        icon="pause"
      />
      <q-btn v-else @click="play" flat round color="white" icon="play_arrow" />

      <q-btn flat round color="white" icon="skip_next" />
    </div>
    <div class="controls row items-center">
      <span class="q-mr-md">3.56</span>
      <audio ref="pork" id="MakerPlay">
        <source src="../assets/Music/gates.mp3" type="audio/mpeg" />
      </audio>
    </div>
    <!-- get the icons setup -->
  </div>
</template>

<script>
export default {
  name: "player",
  data() {
    return {
      lazy: 6,
      playing: false,
    };
  },
  mounted() {
    const audioObj = document.querySelector("#MakerPlay");
    this.audioObj = audioObj;
  },
  methods: {
    play() {
      if (!this.playing) {
        this.audioObj.play();
        this.playing = true;
        return;
      }
      this.audioObj.pause();
      this.playing = false;

      // console.log(this.audioObj);
    },
  },
};
</script>

<style lang="scss" scoped>
.player {
  position: fixed;
  padding: 0.5em 3em;
  bottom: 0;
  left: 240px;
  right: 0;
  .text-fade {
    opacity: 0.8;
  }
}
</style>
