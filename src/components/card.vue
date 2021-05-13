<template>
  <div class="data-slide">
    <div class="card">
      <img :src="blank_data(song.imgUrl)" alt="" />
      <div class="card__body">
        <div class="song">
          {{ song.title }}
        </div>
        <div class="artist">
          {{ song.artist }}
        </div>
      </div>
      <div class="cover">
        <a class="play-btn" href="#"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["song"],
  data() {
    return {};
  },
  methods: {
    blank_data(img) {
      return require("../assets/img/" + img);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  max-height: 300px;
  max-width: 180px;
  font-family: "Noto Sans CJK JP";
  margin-right: 3em;
  // box-shadow: -4px 10px 30px rgba(0, 0, 0, 0.233);

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
  }
  .card__body {
    padding: 0.5em 5px;
  }
  img {
    height: 130px;
    width: 100%;

    object-fit: cover;
  }
  .song {
    font-size: 20px;
  }
  .artist {
    font-size: 13px;
  }
  &:hover .cover {
    display: block;
  }
}
.play-btn {
  width: 74px;
  height: 74px;
  background: radial-gradient(#ff4a17 50%, rgba(255, 74, 23, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(55% - 47px);
  top: calc(40% - 47px);
  overflow: hidden;
}
.play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.play-btn::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.play-btn:hover::after {
  border-left: 15px solid #ff4a17;
  transform: scale(20);
}
.play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  -webkit-animation: none;
  animation: none;
  border-radius: 0;
}
@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}
</style>
