<template>
  <div class="row">
    <q-btn
      flat
      round
      color="primary"
      style="font-size: 13px"
      icon="notifications_active"
    />
    <q-btn
      flat
      round
      color="primary"
      style="font-size: 13px"
      class="q-mx-md"
      icon="settings"
    />
    <q-btn
      flat
      color="purple"
      style="text-transform: unset"
      :label="user.uname"
    >
      <div class="column items-center">
        <q-avatar size="42px" class="q-ml-md">
          <img :src="require('../assets/img/' + user.imgUrl)" />
        </q-avatar>

        <!-- <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
            /> -->
      </div>
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <!-- <q-separator vertical inset class="q-mx-lg" /> -->
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user-bar",
  computed: mapState("user", ["user"]),
};
</script>

<style lang="scss" scoped></style>
