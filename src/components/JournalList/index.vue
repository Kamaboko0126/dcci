<script>
import { ref, onMounted, watch } from "vue";
import journalsData from "@/assets/journals.json";

export default {
  name: "JournalList",
  setup() {
    const returnData = ref(null);
    const nonBlankData = ref(null);
    const jsonData = ref(null);
    const showBlankData = ref(false);
    const latest = ref(true);

    const fetchJsonData = async () => {
      try {
        jsonData.value = journalsData;
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    const filterBlankData = () => {
      nonBlankData.value = jsonData.value.filter((data) => data.exist == true);
    };

    const clickFilterBtn = () => {
      showBlankData.value = !showBlankData.value;
      checkDataStatus();
    };

    const checkDataStatus = () => {
      console.log(showBlankData.value);
      if (showBlankData.value) {
        returnData.value = jsonData.value;
      } else {
        returnData.value = nonBlankData.value;
      }
    };

    watch(latest, () => {
      if (latest.value) {
        jsonData.value = jsonData.value.sort((a, b) => b.id - a.id);
        nonBlankData.value = nonBlankData.value.sort((a, b) => b.id - a.id);
      } else {
        jsonData.value = jsonData.value.sort((a, b) => a.id - b.id);
        nonBlankData.value = nonBlankData.value.sort((a, b) => a.id - b.id);
      }
    });

    onMounted(() => {
      fetchJsonData();
      filterBlankData();
      checkDataStatus();
      if (latest.value) {
        jsonData.value = jsonData.value.sort((a, b) => b.id - a.id);
        nonBlankData.value = nonBlankData.value.sort((a, b) => b.id - a.id);
      } else {
        jsonData.value = jsonData.value.sort((a, b) => a.id - b.id);
        nonBlankData.value = nonBlankData.value.sort((a, b) => a.id - b.id);
      }
    });

    return {
      jsonData,
      showBlankData,
      returnData,
      clickFilterBtn,
      latest,
    };
  },
};
</script>

<template>
  <section>
    <div class="buttons">
      <div
        class="btn"
        :class="showBlankData ? 'true' : 'false'"
        @click="clickFilterBtn"
      >
        <span class="material-icons">
          {{ showBlankData ? "check" : "close" }}
        </span>
        {{ showBlankData ? "顯示遺失資料" : "隱藏遺失資料" }}
      </div>
      <div class="btn" @click="latest = !latest">
        <span class="material-icons">repeat</span>
        {{ latest ? "最新" : "最舊" }}
      </div>
    </div>

    <div class="cards">
      <div class="card" v-for="data in returnData" :key="data.id">
        <router-link :to="`/journallist/journal?id=${data.id}`">
          <div class="img-container">
            <img
              :src="require(`@/assets/images/thumbnails_jpg/${data.id}.jpg`)"
              :class="{ gray: !data.exist }"
              alt=""
            />
            <div v-if="!data.exist" class="mark">MISSING</div>
          </div>
          <p>{{ data.title }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  padding-top: calc(var(--header-height) + 20px);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.buttons {
  width: 100%;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加陰影 */
  .btn {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #fff;
    padding: 10px 20px;
    margin-right: 10px;
    border-radius: 6px;
    background: rgb(72, 126, 188);
    transition: background 0.3s ease;
    &.true {
      background: rgb(96, 192, 77);
      &:hover {
        background: rgb(86, 175, 69);
      }
    }
    &.false {
      background: rgb(235, 74, 74);
      &:hover {
        background: rgb(220, 60, 60);
      }
    }
  }
}

.cards {
  width: 100%;
  min-height: 100vh;
  padding: 30px 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  .card {
    padding: 20px 10px;
    cursor: pointer;
    .card div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      &.gray {
        filter: grayscale(100%);
      }
    }
    p {
      font-weight: bold;
    }
  }
}

.img-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
  img {
    display: block;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
  .mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background: #000;
    opacity: 0.6;
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    pointer-events: none;
  }
}
</style>
