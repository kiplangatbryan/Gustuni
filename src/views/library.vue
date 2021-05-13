<template>
  <div class="q-pa-lg leans">
    <q-parallax
      :height="280"
      :speed="1"
      style="border-radius: 20px"
      class="optix"
    >
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>
      <div class="audio-state">
        <av-circle
          :outline-width="0"
          :progress-width="50"
          :outline-meter-space="5"
          :playtime="true"
          playtime-font="18px Nunito"
          :audio-controls="true"
          :audio-src="require('../assets/Music/gates.mp3')"
        ></av-circle>
      </div>
      <h1 class="text-white">Library</h1>
    </q-parallax>

    <div class="data-bank">
      <div class="text-h5 q-pa-md">Playlist</div>
      <div class="controls q-my-md">
        <q-btn flat rounded label="New Playlist" class="q-mr-sm" icon="add" />
        <q-btn flat rounded label="rename" class="q-mr-sm" icon="mode_edit" />
        <q-btn
          flat
          rounded
          label="add to queue"
          class="q-mr-sm"
          icon="queue_music"
        />
        <q-btn label="share" rounded color="orange" icon="share" />
      </div>

      <div class="row">
        <div class="library col-md-8">
          <template>
            <library-card />
            <q-separator />
          </template>
        </div>
        <div class="side-bar col-md-4">
          <div class="text-h5 q-pb-md">
            <q-icon name="library_music" class="q-mr-md"></q-icon> Your
            Playlists
          </div>
          <q-separator />

          <q-list padding class="rounded-borders" style="max-width: 350px">
            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar icon="album" text-color="grey1" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1"> Beat of Ages</q-item-label>
                <q-item-label caption>February 22nd, 2019</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="edit" color="orange" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar top>
                <q-avatar icon="album" text-color="grey1" />
              </q-item-section>

              <q-item-section>
                <q-item-label lines="1"> Chilluz moment</q-item-label>
                <q-item-label caption>February 22nd, 2019</q-item-label>
              </q-item-section>

              <q-item-section side>
                <q-icon name="edit" color="orange" />
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import library_card from "@/components/library-card.vue";
export default {
  name: "library",
  components: {
    "library-card": library_card,
  },
};
</script>

<style lang="scss" scoped>
.leans {
  .media__card {
    .avatar {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 4px;
    }
  }
  .side-bar {
    padding: 0.5em 0 0 2em;
  }


  .audio-state {
    position: absolute;
    top: 5%;
    left: 10%;
    color: rgb(255, 166, 0);
  }
}
</style>
