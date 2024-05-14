<!-- Version Green -->
<script lang="ts" setup>
import QuizVue from "../components/Quiz.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.quiz);
</script>

<template>
  <div class="page">
    <div class="quiz-header">
      <div class="quiz-header-line-f">{{ text.title }}</div>
    </div>
    <quiz-vue></quiz-vue>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
}
.quiz-header {
  width: 100%;
  height: 30vh;
  background-color: #759f98;
  /* background-color: #364d79; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quiz-header-line-f {
  user-select: none;
  height: 10vh;
  font-size: 7.5vmin;
  color: white;
}
</style>

<!-- Version transparent -->
<!-- <script lang="ts" setup>
import QuizVue from "../components/Quiz.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const text = computed(() => store.state.lan.quiz);
</script>

<template>
  <div class="page">
    <div class="quiz-header">
      <div class="quiz-header-line-f">{{ text.title }} 
        <div style="font-size: 24px; height: 7.5vmin; display: flex; align-items: flex-end; font-weight: 800">
          &nbsp;&nbsp;&nbsp;&nbsp;>>>
        </div>
      </div>
    </div>
    <quiz-vue></quiz-vue>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
}
.quiz-header {
  width: 100%;
  height: 20vh;
  /* background-color: #759f98; */
  background-color: transparent;
  /* background-color: #364d79; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quiz-header-line-f {
  user-select: none;
  height: 100%;
  border-bottom: 1px black solid;
  font-size: 7.5vmin;
  color: black;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style> -->
