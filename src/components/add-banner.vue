<template>
  <div class="advert">
    <div class="q-py-md">
      <div class="text-h4">
        Having a problem getting market for your product ?
      </div>
      <p class="q-py-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
        necessitatibus, pariatur harum sequi corrupti aut sapiente magni quos
        hic recusandae?
      </p>
    </div>
    <q-btn outlined color="orange" label="Book Space" />
  </div>
</template>

<script>
export default {
  name: "banner",
};
</script>

<style lang="scss" scoped>
.advert {
  background: linear-gradient(45deg, rgb(255, 23, 205), rgb(255, 191, 15));
  color: #fff;
  padding: 3em 7em;
  border-radius: 4px;
}
</style>
