<script lang="ts" setup>
// import axios from "../axios";
import axios from "axios";
import { ref, reactive, computed, watch } from "vue";
import { useStore } from "vuex";
import { SmileTwoTone } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();
const store = useStore();

message.config({
  top: `100px`,
  duration: 2,
  maxCount: 3,
});

const error = () => {
  message.error(text.value.wrong);
};

const right = () => {
  message.success(text.value.right);
};

const finish = () => {
  isFinish.value = true;

  message.success(text.value.finish);
};

const empty = () => {
  //console.log("Show Empty!!!!");
  message.warning(text.value.empty);
};

const quizList = ref([]);
const isFinish = ref(false);
const isOpen = ref(false);
const quizIndex = ref(undefined);
const curIndex = ref(0);
const value = ref(null);
const final = ref([false, false, false, false, false]);
const lanflag = computed(() => store.state.lanFlag);
const url = computed(
  () => `/quiz/quiz${quizIndex.value}_${lanflag.value}.json`
);
const text = computed(() => store.state.lan.quiz);
watch(quizIndex, (newVal) => {
  if (newVal !== undefined) {
    getQuizData(url.value);
  }
});
// axios.get("/api/question/list").then((res) => {
//   quizList.value = res.data;
// });

const onSubmit = () => {
  console.log(quizList.value[curIndex.value].options);
  if (value.value === null) {
    empty();
  } else {
    if (quizList.value[curIndex.value].options[value.value].isCorrect) {
      if (curIndex.value < quizList.value.length - 1) {
        value.value = null;

        final.value[curIndex.value] = true;
        right();
        curIndex.value += 1;
      } else {
        finish();
      }
    } else {
      if (curIndex.value < quizList.value.length - 1) {
        value.value = null;
        error();
        final.value[curIndex.value] = false;
        curIndex.value += 1;
      } else {
        finish();
      }
    }
  }
};

const onPrevious = () => {
  if (curIndex.value > 0) {
    curIndex.value -= 1;
  }
};

const radioStyle = reactive({
  display: "flex",
  height: "30px",
  lineHeight: "30px",
});

function getQuizData(url) {
  axios.get(url).then((res) => {
    const indexArray = [];
    for (let index = 0; index < 5; index++) {
      let a = getQuizIndex();
      while (indexArray.find((i) => i === a)) {
        a = getQuizIndex();
      }
      indexArray.push(a);
    }
    console.log(indexArray);

    quizList.value = indexArray.map((i) => res.data.data[i]);

    console.log(quizList.value);
  });
}
function getQuizIndex() {
  return Math.floor(Math.random() * 49);
}
function handleAgainClick() {
  curIndex.value = 0;
  quizIndex.value = undefined;
  value.value = null;
  isFinish.value = false;
  final.value = [false, false, false, false, false];
}
</script>

<template>
  <div class="container">
    <div class="quiz-warp">
      <context-holder />
      <div v-if="quizIndex === undefined" class="quiz-warp">
        <a-typography style="display: flex; justify-content: center">
          <a-typography-paragraph style="max-width: 1000px">{{
            text.intro
          }}</a-typography-paragraph>
        </a-typography>
        <di class="quiz-selector">
          <a-card hoverable class="quiz-card" @click="quizIndex = 0">
            <template #cover>
              <div class="card-cover">
                <img class="card-cover-image" src="../assets/img/q1.jpeg" />
              </div>
            </template>
            <a-card-meta :title="text.theme[0].title">
              <!-- <template #description>www.instagram.com</template> -->
            </a-card-meta>
          </a-card>
          <a-card hoverable class="quiz-card" @click="quizIndex = 1">
            <template #cover>
              <div class="card-cover">
                <img class="card-cover-image" src="../assets/img/q2.jpeg" />
              </div>
            </template>
            <a-card-meta :title="text.theme[1].title">
              <!-- <template #description>www.instagram.com</template> -->
            </a-card-meta>
          </a-card>
        </di>
      </div>
      <div v-else class="quiz-warp">
        <a-button type="link" class="quiz-back" @click="handleAgainClick">
          <{{ text.back }}
        </a-button>
        <div v-if="quizList.length > 0 && !isFinish" class="quiz-container">
          <a-typography-title v-if="quizList[curIndex].theme">
            {{ text.qtheme }}: {{ quizList[curIndex].theme }}
          </a-typography-title>
          <a-typography-title :level="2">
            {{ text.progess }}: {{ curIndex }}/
            <a-typography-title :level="5" style="display: inline">
              {{ quizList.length }}
            </a-typography-title>
          </a-typography-title>

          <div class="question-container">
            <!-- <a-card
              :title="`${text.q}${curIndex + 1}: ${
                quizList[curIndex].content
              }?`"
              class="quesiton-card"
            > -->
            <a-card
              :title="`${text.q}${curIndex + 1}: ${
                quizList[curIndex].content
              }?`"
              class="question-card"
              style="white-space: pre-wrap; overflow: visible"
            >
              <a-radio-group v-model:value="value">
                <a-radio
                  v-for="({ content }, index) in quizList[curIndex].options"
                  :key="index"
                  :value="index"
                  :style="radioStyle"
                >
                  {{ content }}
                </a-radio>
              </a-radio-group>
            </a-card>
            <div class="button-container">
              <a-button
                class="previous"
                type="primary"
                v-if="curIndex > 0"
                v-on:click="onPrevious"
              >
                {{ text.previous }}
              </a-button>
              <a-button class="submit" type="primary" v-on:click="onSubmit">
                {{ text.submit }}
              </a-button>
            </div>
          </div>
        </div>
        <a-result
          v-else-if="quizList.length > 0 && isFinish"
          :title="`${text.congratulation}\n Your score: ${
            final.filter((f) => f).length * 20
          }`"
        >
          <template #icon>
            <smile-twoTone />
          </template>
          <template #extra>
            <a-button type="primary" @click="handleAgainClick">
              {{ text.again }}
            </a-button>
            <a-button @click="isOpen = true">
              {{ text.answer }}
            </a-button>
          </template>
        </a-result>
        <a-spin v-else />
      </div>
    </div>
    <a-modal
      v-model:open="isOpen"
      :title="text.answer"
      :footer="null"
      width="50%"
    >
      <a-card
        v-for="(quiz, i) in quizList"
        :title="`${text.q}${i + 1}: ${quiz.content}?`"
        class="question-card"
        style="white-space: pre-wrap; overflow: visible"
        :key="i"
      >
        <a-radio-group :value="quiz.options.findIndex((q) => q.isCorrect)">
          <a-radio
            v-for="({ content }, index) in quiz.options"
            :key="index"
            :value="index"
            :style="radioStyle"
          >
            {{ content }}
          </a-radio>
        </a-radio-group>
      </a-card>
    </a-modal>
  </div>
</template>

<style scoped>
.container {
  padding: 48px 72px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.quiz-warp {
  flex: 1;
  display: flex;
  height: 100%;
  flex-direction: column;
  position: relative;
}
.quiz-back {
  position: absolute;
  top: 0;
  left: 0;
}
.quiz-selector {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.quiz-card {
  width: 360px;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
}
.quiz-card :deep(.ant-card-cover) {
  flex: 1;
}
.quiz-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quesiton-card {
  width: 50%;
  margin-bottom: 2vmin;
}
.quesiton-card :deep(.ant-card-body) {
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
.submit {
  margin-right: 20px;
  margin-left: 20px;
}
.previous {
  background-color: #d9d9d9;
  color: #595959;
  border-color: #d9d9d9;
  margin-left: 20px;
  margin-right: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
