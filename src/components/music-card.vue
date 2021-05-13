<template>
  <q-item class="q-my-sm bite" clickable v-ripple>
    <q-item-section avatar>
      <q-avatar color="primary" text-color="white">
        {{ song.artist[0] }}
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ song.title }}</q-item-label>
      <q-item-label caption lines="1">{{ song.artist }}</q-item-label>
    </q-item-section>
    <q-btn
      flat
      round
      @click="feature(require('../assets/Music/gates.mp3'))"
      class="play-btn"
      color="primary"
      size="12px"
      icon="play_arrow"
    />

    <q-item-section side>
      <q-btn flat round icon="more_horiz">
        <q-menu anchor="top right" self="top left">
          <q-list style="min-width: 80px">
            <q-item clickable v-close-popup>
              <q-item-section avatar style="margin-right: -18px">
                <q-icon size="20px" name="queue_music" />
              </q-item-section>
              <q-item-section>play next</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar style="margin-right: -18px">
                <q-icon name="playlist_add" />
              </q-item-section>
              <q-item-section>Add to Playlist</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar style="margin-right: -18px">
                <q-icon size="18px" name="share" />
              </q-item-section>
              <q-item-section>share</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "music-card",
  props: ["song"],
  methods: {
    feature(tick) {
      console.lgo(tick);
    },
  },
};
</script>

<style lang="scss" scoped>
.bite {
  overflow: hidden;
}
.play-btn {
  transform: translate(10px, 40px);
  transition: all 200ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.bite:hover .play-btn {
  transform: translate(10px, 0px);
}
</style>
