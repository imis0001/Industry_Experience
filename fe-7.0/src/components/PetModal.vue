<script lang="ts" setup>
import { ref, createVNode, computed, watch } from "vue";
import { useStore } from "vuex";
import { message } from "ant-design-vue";
const [messageApi, contextHolder] = message.useMessage();
interface vueProps {
  open: boolean;
}
const props = withDefaults(defineProps<vueProps>(), {
  open: false,
});
const store = useStore();
const emit = defineEmits(["cancel"]);
const bodyStyle = { height: "100%", position: "relative" };
const isOpen = ref(false);
const order = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
const rightOrder = ref([]);
const isIn = ref([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);
function getOrder() {
  let m = order.value.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = order.value[m];
    order.value[m] = order.value[i];
    order.value[i] = t;
  }
}
getOrder();
watch(
  () => props.open,
  (newVal) => {
    isOpen.value = newVal;
  }
);
function handleCancel() {
  emit("cancel");
  isIn.value = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  getOrder();
  rightOrder.value = [];
}
function handleClick(i) {
  isIn.value[i] = true;
  if (i > 8) {
    message.error("wrong!");
    setTimeout(() => {
      isIn.value[i] = false;
    }, 500);
  } else {
    rightOrder.value.push(i);
    message.success("correct!");
    if (
      rightOrder.value.includes(0) &&
      rightOrder.value.includes(1) &&
      rightOrder.value.includes(2) &&
      rightOrder.value.includes(3) &&
      rightOrder.value.includes(4) &&
      rightOrder.value.includes(5) &&
      rightOrder.value.includes(5) &&
      rightOrder.value.includes(6) &&
      rightOrder.value.includes(7) &&
      rightOrder.value.includes(8)
    ) {
      message.success("Congratulation! You completed this scenario!!");
    }
  }
}
</script>
<template>
  <a-modal
    v-model:open="isOpen"
    @cancel="handleCancel"
    width="100%"
    title=""
    :footer="null"
    :bodyStyle="bodyStyle"
    class="full-modal"
  >
    <context-holder />
    <a-card hoverable style="z-index: 1000" class="kit-card">
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kitRoot.png" />
        </div>
      </template>
      <a-card-meta title="Emergency survival kit"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[0]}`]: !isIn[0] }"
      @click="handleClick(0)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet1.png" />
        </div>
      </template>
      <a-card-meta title="A Pet First-aid Kit"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[1]}`]: !isIn[1] }"
      @click="handleClick(1)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet2.png" />
        </div>
      </template>
      <a-card-meta title="Carrier"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[2]}`]: !isIn[2] }"
      @click="handleClick(2)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet3.png" />
        </div>
      </template>
      <a-card-meta title="Collar"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[3]}`]: !isIn[3] }"
      @click="handleClick(3)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet4.png" />
        </div>
      </template>
      <a-card-meta title="Ice Water"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[4]}`]: !isIn[4] }"
      @click="handleClick(4)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet5.png" />
        </div>
      </template>
      <a-card-meta title="Lead"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[5]}`]: !isIn[5] }"
      @click="handleClick(5)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet6.png" />
        </div>
      </template>
      <a-card-meta title="Pets Blanket"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[6]}`]: !isIn[6] }"
      @click="handleClick(6)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet7.png" />
        </div>
      </template>
      <a-card-meta title="Pets Food"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[7]}`]: !isIn[7] }"
      @click="handleClick(7)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet8.png" />
        </div>
      </template>
      <a-card-meta title="Pets Toy"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[8]}`]: !isIn[8] }"
      @click="handleClick(8)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet9.png" />
        </div>
      </template>
      <a-card-meta title="Water"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[9]}`]: !isIn[9] }"
      @click="handleClick(9)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet10.png" />
        </div>
      </template>
      <a-card-meta title="Apple"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[10]}`]: !isIn[10] }"
      @click="handleClick(10)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet11.png" />
        </div>
      </template>
      <a-card-meta title="Brush"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[11]}`]: !isIn[11] }"
      @click="handleClick(11)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet12.png" />
        </div>
      </template>
      <a-card-meta title="Pets Clothes"> </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card small-card"
      :class="{ [`kit-card-${order[12]}`]: !isIn[12] }"
      @click="handleClick(12)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/pet13.png" />
        </div>
      </template>
      <a-card-meta title="All the Toys"> </a-card-meta>
    </a-card>
  </a-modal>
</template>
<style>
.ant-modal.css-dev-only-do-not-override-1hsjdkk.full-modal {
  height: 100%;
  width: 100%;
  max-width: 100%;
  top: 0;
  padding: 0;
}
.ant-modal.css-dev-only-do-not-override-1hsjdkk.full-modal .ant-modal-content {
  height: 100%;
}
.img-warp {
  width: 100%;
  height: 20vmin;
  position: relative;
  object-fit: contain;
}
.card-imgp {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.card-imgp-1 {
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
  object-fit: contain;
}
.card-imgp-2 {
  position: absolute;
  height: 100%;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%);
  object-fit: contain;
}
.kit-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  transition: 0.5s all ease-in-out;
  object-fit: contain;
}
.kit-card.small-card {
  width: 15%;
}
.kit-card.small-card .img-warp {
  height: 12vmin;
}
.kit-card-1 {
  top: 15%;
}
.kit-card-2 {
  top: 20%;
  left: 70%;
}
.kit-card-3 {
  top: 25%;
  left: 90%;
}
.kit-card-4 {
  top: 50%;
  left: 90%;
}
.kit-card-5 {
  top: 80%;
  left: 80%;
}
.kit-card-6 {
  top: 55%;
  left: 70%;
}
.kit-card-7 {
  top: 85%;
  left: 60%;
}
.kit-card-8 {
  top: 85%;
  left: 40%;
}
.kit-card-9 {
  top: 55%;
  left: 30%;
}
.kit-card-10 {
  top: 80%;
  left: 20%;
}
.kit-card-11 {
  top: 50%;
  left: 10%;
}
.kit-card-12 {
  top: 25%;
  left: 10%;
}
.kit-card-13 {
  top: 20%;
  left: 30%;
}
.kit-card-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  z-index: 1100;
}
.kit-card-center .img-warp {
  width: 100%;
  height: 60vmin;
  position: relative;
  object-fit: contain;
}
</style>
