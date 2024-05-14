<script lang="ts" setup>
import { ref } from "vue";
import KitModal from "./KitModal.vue";
import PetModal from "./PetModal.vue";
const kitIndex = ref<boolean | number>(false);
</script>

<template>
  <div class="page">
    <div class="page-header">
      <div class="page-header-line-f">Disaster Preparedness Challenge</div>
      <div class="page-header-line-s">
        Are you ready to handle extreme weather in Australia? It’s time to test
        your preparedness!
      </div>
    </div>
    <div class="container">
      <div class="page-warp">
        <div style="display: flex; justify-content: center">
          <a-typography>
            <a-typography-title> How to Play: </a-typography-title>
            <a-typography-paragraph style="max-width: 1000px">
              ● Drag and Drop: Simply drag the correct items into the right
              place to complete each preparedness scenario.
            </a-typography-paragraph>
            <a-typography-paragraph style="max-width: 1000px">
              ● Scenarios: Each scenario is designed based on real-life
              situations you might face during a bushfire or heatwave.
            </a-typography-paragraph>
          </a-typography>
        </div>
        <div class="page-selector">
          <a-card hoverable class="page-card" @click="kitIndex = 0">
            <template #cover>
              <div class="card-cover">
                <img class="card-cover-image" src="../assets/img/kitRoot.png" />
              </div>
            </template>
            <a-card-meta title="EMERGENCY">
              <!-- <template #description>www.instagram.com</template> -->
            </a-card-meta>
          </a-card>
          <a-card hoverable class="page-card" @click="kitIndex = 1">
            <template #cover>
              <div class="card-cover">
                <img class="card-cover-image" src="../assets/img/kitRoot.png" />
              </div>
            </template>
            <a-card-meta title="PET">
              <!-- <template #description>www.instagram.com</template> -->
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
    <kit-modal :open="kitIndex === 0" @cancel="kitIndex = false"></kit-modal>
    <pet-modal :open="kitIndex === 1" @cancel="kitIndex = false"></pet-modal>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
}
.page-header {
  width: 100%;
  height: 20vh;
  background-color: #759f98;
  /* background-color: #364d79; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.page-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 5vmin;
  color: white;
}
.page-header-line-s {
  user-select: none;
  height: 10vh;
  font-size: 2.5vmin;
  color: white;
}
.container {
  padding: 48px 72px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.page-warp {
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
}
.page-selector {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.page-card {
  width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
.page-card :deep(.ant-card-cover) {
  flex: 1;
}
.page-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-cover {
  height: 100%;
  width: 100%;
  position: relative;
}
.card-cover-image {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
