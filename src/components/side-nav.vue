<template>
  <div class="side__nav">
    <div class="top__nav">
      <q-list padding class="rounded-borders text-grey+1 q-px-md">
        <q-item-label header>Music</q-item-label>
        <q-item
          to="/"
          clickable
          v-ripple
          :active="link === '/'"
          @click="link = '/'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="home" />
          </q-item-section>

          <q-item-section class="a__link"> Home</q-item-section>
        </q-item>
        <q-item
          to="/discover"
          clickable
          v-ripple
          :active="link === '/discover'"
          @click="link = '/discover'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="headset" />
          </q-item-section>

          <q-item-section class="a__link"> Discover</q-item-section>
        </q-item>

        <q-item
          to="/events"
          clickable
          v-ripple
          :active="link === '/events'"
          @click="link = '/events'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="event" />
          </q-item-section>

          <q-item-section class="a__link"> Events</q-item-section>
        </q-item>
        <q-item
          to="/library"
          clickable
          v-ripple
          :active="link === '/library'"
          @click="link = '/library'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="book" />
          </q-item-section>

          <q-item-section class="a__link">Library</q-item-section>
        </q-item>
        <q-item
          to="/blog"
          clickable
          v-ripple
          :active="link === '/blog'"
          @click="link = '/blog'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="fiber_new" />
          </q-item-section>

          <q-item-section class="a__link"> Blog</q-item-section>
        </q-item>
        <q-item
          to="/store"
          clickable
          v-ripple
          :active="link === '/store'"
          @click="link = '/store'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="library_music" />
          </q-item-section>

          <q-item-section class="a__link"> Store</q-item-section>
        </q-item>
        <q-item
          to="/account"
          clickable
          v-ripple
          :active="link === '/account'"
          @click="link = '/account'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="library_music" />
          </q-item-section>

          <q-item-section class="a__link">Account</q-item-section>
        </q-item>
        <q-separator />
        <q-item
          clickable
          v-ripple
          :active="link === '/more'"
          @click="link = '/more'"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon size="18px" class="text-grey" name="more_vert" />
          </q-item-section>

          <q-item-section class="a__link"> More</q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "side-nav",
  data() {
    return {
      link: "/",
    };
  },
};
</script>

<style lang="scss" scoped>
.side__nav {
  min-height: 100vh;
  position: fixed;

  .a__link {
    font-weight: 900;
  }
}
</style>
