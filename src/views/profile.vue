<template>
  <div class="q-pa-lg leans">
    <div class="hero">
      <div class="controller">
        <div class="text-h5 q-mb-md">Now Playing</div>
        <div class="q-pa-md row bg-grey">
          <q-btn size="15px" color="orange" icon="play_arrow" />
          <div class="column q-ml-lg">
            <div class="text-h6">Iam wasted by drugs</div>
            <div class="text-subtitle1 text-white" style="font-size: 14px">
              Jenkins Brothers'
            </div>
          </div>
        </div>
      </div>
      <img class="user-icon" :src="require('../assets/img/imd-1.jpg')" alt="" />
      <div class="stats text-white">
        <div class="text-h5 q-pb-sm">Ivy Cheps</div>
        <div class="row q-gutter-md">
          <div class="row items-center">
            <q-icon name="favorite"></q-icon>
            125k
          </div>
          <div class="row items-center">
            <q-icon name="person_add"></q-icon>
            500k
          </div>
          <div class="row items-center">
            <q-icon name="favorite"></q-icon>
            125
          </div>
        </div>
      </div>
    </div>

    <div class="data-bank q-mt-lg">
      <div class="text-h5 q-pa-md">Gustuni Forever</div>
      <div class="controls q-my-md">
        <q-btn flat rounded label="like" class="q-mr-sm" icon="favorite" />
        <q-btn flat rounded label="comment" class="q-mr-sm" icon="comment" />
        <q-btn
          flat
          rounded
          label="add to queue"
          class="q-mr-sm"
          icon="queue_music"
        />
        <q-btn
          flat
          rounded
          label="add to playlist"
          class="q-mr-sm"
          icon="playlist_add"
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
  name: "profile",
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
  .hero {
    height: 280px;
    border-radius: 30px;
    background: linear-gradient(45deg, grey, rgb(190, 136, 136));
    position: relative;
  }
  .controller {
    border-radius: 20px;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .stats {
    position: absolute;
    bottom: 5%;
    left: 20%;
  }
  .user-icon {
    border-radius: 50%;
    object-fit: cover;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -10%;
    left: 5%;
    border-top-right-radius: 30px;
  }
}
</style>
