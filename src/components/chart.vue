<template>
  <div class="chart_data" style="min-width: 300px">
    <q-list class="q-my-md">
      <q-item-label
        header
        style="width: 100%"
        class="row justify-between items-center"
      >
        <div class="row items-center">
          <q-icon name="equalizer" size="20px"></q-icon>
          <span style="margin-left: 3px"> Chart </span>
        </div>
        <div class="mv-select">
          <q-select outlined v-model="model" :options="options" dense />
        </div>
        <div></div>
      </q-item-label>
      <q-separator />
      <music-card v-for="(song, index) in data" :song="song" :key="index" />
    </q-list>
  </div>
</template>

<script>
import music__card from "@/components/music-card.vue";

export default {
  name: "chart",
  components: {
    "music-card": music__card,
  },
  data() {
    return {
      model: "Top",
      options: ["Top", "Gengetone", "Album", "Trap", "Bongo"],
      data: [
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
        {
          imgUrl: "",
          artist: "Chris Mathenge",
          title: "You Played Me",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mv-select {
  margin-left: 7rem !important;
}
.chart_data {
  max-height: 400px;
  overflow-y: scroll;
}
-webkit-scrollbar {
  width: 1px;
}

-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #201ddb4d;
}

-webkit-scrollbar-thumb {
  background-color: darkgrey;
  // outline: 1px solid slategrey;
}
</style>
