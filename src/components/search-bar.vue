<template>
  <div class="search-bar">
    <q-input
      color="grey-3"
      dense
      label-color="orange"
      outlined
      v-model="text"
      placeholder="Find your fav song"
    >
      <template v-slot:append>
        <q-icon size="18px" name="search" color="orange" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  name: "search-bar",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 1em 3em;
}
</style>
