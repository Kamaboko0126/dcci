<script>
import { ref } from "vue";

export default {
  setup() {
    const bannerImg = ref(require("@/assets/banners/banner-pc.png"));
    const bannerBackground = ref(require("@/assets/banners/banner-pc-bg.jpg"));
    return {
      bannerImg,
      bannerBackground,
    };
  },
};
</script>

<template>
  <div class="banner" :style="{ backgroundImage: `url(${bannerImg})` }"></div>
  <div class="marquee">
    <div class="banner-bg">
      <img :src="bannerBackground" v-for="n in 3" :key="n" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.banner {
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 100%;
  position: relative;
  z-index: 99;
}

.marquee {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 90vh;
  .banner-bg {
    display: flex;
    animation: marquee 200s linear infinite;
    img {
      height: 90vh;
    }
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      50% {
        transform: translateX(-150%);
      }
      100% {
        transform: translateX(0%);
      }
    }
  }
}

</style>
