<template>
  <div class="pt-card">
    <div class="content">
      <slot />
      <div class="cover">
        <a class="play-btn" href="#"></a>
      </div>
    </div>
    <q-btn class="like" size="10px" color="red" round flat icon="favorite" />
    <q-btn
      class="menu"
      size="10px"
      color="orange"
      round
      flat
      icon="more_vert"
    />
  </div>
</template>

<script>
export default {
  name: "tiny-card",
};
</script>

<style lang="scss" scoped>
.pt-card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 100px;
  background: linear-gradient(45deg, purple, rgb(15, 230, 230));
  box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin-bottom: 1em;
  // opacity: 0.5;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover .cover {
    display: block;
  }
  &:hover .like {
    bottom: -5%;
  }
  &:hover .menu {
    bottom: -5%;
  }
  .menu,
  .like {
    position: absolute;
    bottom: -35%;
    transition: bottom 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .menu {
    right: -2%;
  }
  .like {
    right: 15%;
  }

  .content {
    padding: 0 1rem;
    font-size: 20px;
    color: white;
    position: relative;
  }
  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    display: none;
  }
}

.play-btn {
  width: 54px;
  height: 54px;
  background: radial-gradient(#ff4a17 50%, rgba(255, 74, 23, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
