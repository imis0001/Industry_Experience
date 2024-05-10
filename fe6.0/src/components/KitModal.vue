<script lang="ts" setup>
import { ref, createVNode, computed, watch } from "vue";
import { useStore } from "vuex";
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
const isKitOpen = ref([false, false, false, false, false, false, false]);
const isKitMore = ref([false, false, false, false, false, false, false, false]);
const currentIndex = ref(0);
const text = computed(() => store.state.lan.news);

watch(
  () => props.open,
  (newVal) => {
    isOpen.value = newVal;
  }
);

function handleClickKit(i) {
  if (isKitMore.value[i]) {
    isKitMore.value = [
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
  } else {
    isKitMore.value = [
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
    isKitMore.value[i] = true;
  }
}
function handleClickRoot() {
  if (currentIndex.value < isKitOpen.value.length) {
    isKitOpen.value[currentIndex.value] = true;
    currentIndex.value++;
  } else {
    if (isKitMore.value[0]) {
      isKitMore.value = [
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
    } else {
      isKitMore.value = [
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
      isKitMore.value[0] = true;
    }
  }
}
function handleCancel() {
  emit("cancel");
  isKitOpen.value = [false, false, false, false, false, false, false];
  isKitMore.value = [false, false, false, false, false, false, false, false];
  currentIndex.value = 0;
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
    <a-card
      hoverable
      style="z-index: 1000"
      class="kit-card"
      :class="{ 'kit-card-center': isKitMore[0] }"
      @click="handleClickRoot"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kitRoot.png" />
        </div>
      </template>
      <a-card-meta title="Waterproof Bag for Valuables">
        <template #description>
          <a-typography v-if="isKitMore[0]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: To protect important documents and valuables from
                water damage caused by firefighting efforts or severe weather
                conditions.
              </blockquote>
              <blockquote>
                ● Benefit: Keeps critical items like identification, insurance
                papers, and sentimental valuables safe and dry.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-1': isKitOpen[0], 'kit-card-center': isKitMore[1] }"
      @click="handleClickKit(1)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit1.png" />
        </div>
      </template>
      <a-card-meta title="First aid kit with manual">
        <template #description>
          <a-typography v-if="isKitMore[1]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: To treat injuries that could occur during a bushfire,
                such as burns, cuts, or smoke inhalation.
              </blockquote>
              <blockquote>
                ● Benefit: Provides immediate medical response capabilities,
                reducing the risk of complications from untreated injuries.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-2': isKitOpen[1], 'kit-card-center': isKitMore[2] }"
      @click="handleClickKit(2)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit2.png" />
        </div>
      </template>
      <a-card-meta title="Waterproof torch">
        <template #description>
          <a-typography v-if="isKitMore[2]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: Provides lighting in the event of power loss or when
                navigating through dark, smoke-filled environments.
              </blockquote>
              <blockquote>
                ● Benefit: Essential for visibility, especially if you need to
                evacuate at night or navigate through dense smoke.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-3': isKitOpen[2], 'kit-card-center': isKitMore[3] }"
      @click="handleClickKit(3)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit3.png" />
        </div>
      </template>
      <a-card-meta title="Spare Batteries">
        <template #description>
          <a-typography v-if="isKitMore[3]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: To power your portable radio and torch, ensuring they
                remain functional throughout the emergency.
              </blockquote>
              <blockquote>
                ● Benefit: Guarantees that your primary sources of light and
                information will continue working when you need them most.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-4': isKitOpen[3], 'kit-card-center': isKitMore[4] }"
      @click="handleClickKit(4)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit4.png" />
        </div>
      </template>
      <a-card-meta title="Portable Battery-Operated Radio">
        <template #description>
          <a-typography v-if="isKitMore[4]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: To receive live updates, alerts, and instructions
                from emergency services when power outages occur and other
                communication methods may fail.
              </blockquote>
              <blockquote>
                ● Benefit: Ensures access to crucial information during
                emergencies, helping you make informed decisions about whether
                to evacuate or stay.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-5': isKitOpen[4], 'kit-card-center': isKitMore[5] }"
      @click="handleClickKit(5)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit5.png" />
        </div>
      </template>
      <a-card-meta title="Woollen Blankets">
        <template #description>
          <a-typography v-if="isKitMore[5]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: To protect against cold and provide some level of
                protection against heat and sparks from a fire.
              </blockquote>
              <blockquote>
                ● Benefit: Wool is naturally flame-resistant, making these
                blankets useful for shielding against heat or wrapping yourself
                if you need to move through a warm area.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-6': isKitOpen[5], 'kit-card-center': isKitMore[6] }"
      @click="handleClickKit(6)"
    >
      <template #cover>
        <div class="img-warp">
          <img class="card-imgp" src="../assets/img/kit6.png" />
        </div>
      </template>
      <a-card-meta title="Emergency Contact Numbers">
        <template #description>
          <a-typography v-if="isKitMore[6]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: Quick access to phone numbers of local emergency
                services, family members, and friends.
              </blockquote>
              <blockquote>
                ● Benefit: Enables rapid communication with emergency personnel
                or loved ones during a crisis.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
    </a-card>
    <a-card
      hoverable
      style=""
      class="kit-card"
      :class="{ 'kit-card-7': isKitOpen[6], 'kit-card-center': isKitMore[7] }"
      @click="handleClickKit(7)"
    >
      <template #cover>
        <div class="img-warp">
          <div class="card-imgp-1">
            <img
              class="card-imgp"
              style="left: -26%; top: 20%"
              src="../assets/img/kit7.png"
            />
          </div>
          <div class="card-imgp-2">
            <img
              class="card-imgp"
              style="left: 47%"
              src="../assets/img/kit8.png"
            />
          </div>
        </div>
      </template>
      <a-card-meta title="Candles with Waterproof Matches">
        <template #description>
          <a-typography v-if="isKitMore[7]">
            <a-typography-paragraph>
              <blockquote>
                ● Purpose: An alternative light source that can be used if the
                torch fails or batteries are depleted.
              </blockquote>
              <blockquote>
                ● Benefit: Offers continuous lighting, crucial for night-time
                visibility and comfort during prolonged power outages.
              </blockquote>
            </a-typography-paragraph>
          </a-typography>
        </template>
      </a-card-meta>
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
.kit-card-1 {
  top: 15%;
}
.kit-card-2 {
  top: 25%;
  left: 85%;
}
.kit-card-3 {
  top: 65%;
  left: 90%;
}
.kit-card-4 {
  top: 85%;
  left: 65%;
}
.kit-card-5 {
  top: 85%;
  left: 35%;
}
.kit-card-6 {
  top: 65%;
  left: 10%;
}
.kit-card-7 {
  top: 25%;
  left: 15%;
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
