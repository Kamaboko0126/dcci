<script>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import journalsData from "@/assets/journals.json";

export default {
  name: "JournalPage",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const returnData = ref(null);
    const nonBlankData = ref(null);
    const jsonData = ref(null);
    const showBlankData = ref(true);
    const latest = ref(true);
    const currentData = ref(null);
    const journalId = ref(route.query.id);

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

    const getCurrentData = () => {
      try {
        console.log(journalId.value);
        currentData.value = journalsData.find(
          (data) => data.id == journalId.value
        );

        if (currentData.value.status == "url") {
          window.open(currentData.value.url, "_blank");
          window.history.back();
        }
        console.log(currentData.value);
      } catch (error) {
        console.error("Error fetching current data:", error);
      }
    };

    const clickMenuBtn = (id) => {
      journalId.value = id;
      currentData.value = journalsData.find(
        (data) => data.id == journalId.value
      );

      if (currentData.value.status == "url") {
        window.open(currentData.value.url, "_blank");
      }
      router.push({ name: "journal", query: { id: journalId.value } });
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
      getCurrentData();
    });

    return {
      jsonData,
      showBlankData,
      returnData,
      clickFilterBtn,
      latest,
      currentData,
      clickMenuBtn,
    };
  },
};
</script>

<template>
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
  <section>
    <div class="menu">
      <div
        class="menu-item"
        v-for="data in returnData"
        :key="data.id"
        @click="clickMenuBtn(data.id)"
      >
        <p>{{ data.title }}{{ data.exist == true ? "" : "(遺失)" }}</p>
      </div>
    </div>
    <div class="main">
      <div
        class="image-container"
        v-if="currentData && currentData.status == 'image'"
      >
        <img :src="require(`@/assets/images/${currentData.id}.jpg`)" />
      </div>
      <div
        class="images-scroll"
        v-if="currentData && currentData.status == 'images'"
      >
        資料尚未提供，稍後補上
      </div>
      <div
        class="website"
        v-if="currentData && currentData.status == 'website'"
      >
        資料尚未提供，稍後補上
      </div>
      <div class="url" v-if="currentData && currentData.status == 'url'">
        已在新分頁中開啟連結
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  height: calc(100vh - var(--header-height));
  overflow: auto;
  .menu-item {
    width: 100%;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* 添加陰影 */
    p {
      line-height: normal;
    }
  }
}
.main {
  width: calc(100% - 250px);
  height: calc(100vh - var(--header-height));
  overflow: auto;
  .image-container {
    padding: 40px 40px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
      max-width: 1200px;
      width: 100%;
    }
  }
  .images-scroll,
  .website,
  .url {
    padding: 40px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    font-weight: bolder;
  }
}

.buttons {
  padding: 0 50px 15px;
  height: calc(var(--header-height));
  width: 100%;
  display: flex;
  align-items: flex-end;
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
</style>
