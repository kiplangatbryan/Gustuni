<template>
  <div class="top-nav">
    <q-tabs v-model="tab" align="left" narrow-indicator class="q-mb-lg">
      <q-tab class="text-purple fix-font" name="mails" label="Recommended" />
      <q-tab class="text-orange fix-font" name="alarms" label="New Releases" />
      <q-tab class="text-green fix-font" name="charts" label="Top Charts" />
      <q-tab class="text-red fix-font" name="moods" label="Moods" />
      <q-tab class="text-yellow fix-font" name="around" label="Around You" />
    </q-tabs>
  </div>
</template>

<script>
export default {
  name: "top-nav",
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>

<style lang="scss" scoped>
.top-nav {
  .fix-font {
    font-family: "Noto Sans CJK JP";
  }
}
</style>
