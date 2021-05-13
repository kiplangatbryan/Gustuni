<template>
  <div>
    <div class="text-h5 q-py-md">Newsletter</div>
    <q-separator />
    <div class="q-py-md luchi">
      <q-input
        outlined
        dense
        type="email"
        v-model="subscriber"
        placeholder="Email Address"
      >
        <template v-slot:before>
          <q-icon name="mail" />
        </template>

        <template v-slot:append>
          <q-icon name="send" />
        </template>
      </q-input>
      <div class="q-py-md">
        Wanna know when the next track gonna lauch right your inbox.<br />
        <div class="text-orange text-underline q-my-md">
          Give us your email address
        </div>
      </div>
    </div>
    <q-btn
      outline
      color="primary"
      style="width: 100%"
      label="subscribe"
    ></q-btn>
  </div>
</template>

<script>
export default {
  name: "subscribe",
  data() {
    return {
      subscriber: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.luchi {
  margin-top: 2em;
}
</style>
