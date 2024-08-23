<script>
import BannerItem from "@/components/BannerItem.vue";

export default {
  name: "HomePage",
  components: {
    BannerItem,
  },
  setup() {
    const scrollToIntro = () => {
      const introContent = document.getElementById("intro-content");
      introContent.scrollIntoView({ behavior: "smooth" });
    };

    return {
      scrollToIntro,
    };
  },
};
</script>

<template>
  <section class="banner-section">
    <BannerItem />
  </section>
  <section class="section-bg">
    <div class="scroll-content" @click="scrollToIntro">
      <div class="scroll"></div>
    </div>
    <div id="intro-content">
      <h1>文化勤報 發刊詞</h1>
      <p>
        文化，是生活經驗的累積與傳承；勤報，是文化資訊的分享與延伸。一群默默耕耘的勤益學生，用文字傳遞永恆幸福，用鏡頭記錄瞬間感動，以散播藝文種子為己任，散佈文化情報就是創辦文化勤報的宗旨。<br /><br />
        忙碌而倉促的生活腳步，常會使我們與近在咫尺的快樂擦身而過，習慣成自然的生活態度，更是讓我們將唾手可得的幸福視若無睹。因此，為了讓更多關心文化發展的民眾，更容易發現生活中的精彩，由國立勤益科大文化創意事業系的學生組成的勤報團隊，親身踏尋充滿驚喜的大街小巷，網羅各方的心情故事，親自走訪藝術交流的殿堂，搜集各界的藝文新知，秉持著「樂活生活，缺藝不可」的信念和「不是重點不入稿，唯有益民才報導」的主張，堅持用心感受、用情體會，將貼近生活的每一分感動傳送給大眾。<br /><br />
        文化勤報的報導包羅萬象，無論大事、小事，只要是你我關注的文化事，就是文化勤報的第一要事。從飲食、衣著、住所到遊憩娛樂，與生活文化相關的內容應有盡有，且提供臺中藝文展演活動的最新情報，給所有喜愛藝文活動的民眾。<br /><br />
        我們還另闢專欄，為勤益科大的莘莘學子建立一個藝文交流的平臺，刊登學生們別出心裁的圖文創作，讓學生們嘔心瀝血的作品能有大放異彩的機會。<br /><br />
        圖文並茂的勤報內容，適合各年齡層想要獲得文化情報卻又沒時間細細閱讀的大眾，跟著勤報團隊的腳步，一同探訪身邊的平凡經典，開啟你我的文化新視界。
      </p>
      <router-link to="/journals"><h2 class="btn">前往查看</h2></router-link>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
}

.banner-section {
  min-height: 90vh;
  width: 100%;
  overflow: hidden;
}

.section-bg {
  background: linear-gradient(to bottom, #272824, #2d2e29);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.scroll-content {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.8s ease-in-out;
  &:hover {
    background: #ffffff11;
  }
}

.scroll {
  width: 7vh;
  height: 7vh;
  border: 2px solid #fff;
  border-radius: 50%;
  position: relative;
  animation: down 3s infinite;
  -webkit-animation: down 3s infinite;
  &::before {
    content: "";
    position: absolute;
    top: 2vh;
    left: 2.2vh;
    width: 1.7vh;
    height: 1.7vh;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(1vh);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(1vh);
  }
  40% {
    transform: translate(0);
  }
}

#intro-content {
  min-height: 100vh;
  width: 100%;
  max-width: 1000px;
  padding: calc(var(--header-height) + 30px) 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  h1,
  h2,
  p {
    color: #fff;
  }
}

.btn {
  margin-top: 60px;
  line-height: normal;
  &::after {
    content: "";
    display: block;
    width: 25%;
    height: 2px;
    background: #fff;
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
  }
}
</style>
