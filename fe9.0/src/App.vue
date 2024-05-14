<script lang="ts" setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { routes } from "@/router/index";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import {
  HomeOutlined,
  PlusOutlined,
  LineChartOutlined,
  FileDoneOutlined,
  PicLeftOutlined,
  ExperimentOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons-vue";
import { h } from "vue";
const route = useRoute();
const router = useRouter();
const store = useStore();
const selectedKeys = ref(["/"]);
const menu = ref();
const path = computed(() => route.path);
const routesName = computed(() => store.state.lan.route);
const lan = computed(() => store.state.lan.lan);

const items = computed(() => {
  // 过滤出所有非子菜单项
  const filteredRoutes = routes.filter(
    (route) => route.name !== "help" && route.name !== "about"
  );
  // 创建一个子菜单项，包含"Help"和"About"
  const subMenu = {
    key: "more",
    label: "",
    icon: h(RightOutlined),
    children: [
      {
        key: "/help",
        label: routesName.value.help,
        path: "/help",
      },
      {
        key: "/about",
        label: routesName.value.about,
        path: "/about",
      },
    ],
  };

  // 返回更新后的菜单项数组
  return filteredRoutes
    .map((route) => {
      const r = {
        key: route.path,
        label: routesName.value[route.name],
        path: route.path,
      };
      if (route.name === "dashboard") {
        r.children = [
          {
            key: "/dashboard1",
            label: routesName.value.dashboard1,
            path: "/dashboard1",
          },
          {
            key: "/dashboard2",
            label: routesName.value.dashboard2,
            path: "/dashboard2",
          },
          {
            key: "/dashboard3",
            label: routesName.value.dashboard3,
            path: "/dashboard3",
          },
        ];
      }
      return r;
    })
    .concat(subMenu);
});

// const items = computed(() =>
//   routes.map((route) => ({
//     key: route.path,
//     label: routesName.value[route.name],
//     path: route.path,
//   }))
// );
watch(path, (newVal) => {
  selectedKeys.value = [newVal];
});
// watch(selectedKeys, (newVal) => {
//   console.log(newVal);
//   console.log(menu);
// });
function handleLogoClick({ item }) {
  handleMenuItemClick({ item: { path: "/" } });
}
function handleMenuItemClick({ item, key, keyPath, domEvent }) {
  router.push(item.path);
  selectedKeys.value = [key];
}
// function handleMenuItemClick({ item }) {
//   router.push(item.path);
//   selectedKeys.value = [item.path];
// }
function handleLanClick(lan) {
  store.state.lanFlag = lan;
}
</script>

<template>
  <a-layout class="main">
    <a-layout-header class="header" id="header">
      <div class="logo">
        <div class="logo-imgae">
          <img
            height="100%"
            src="./assets/img/campsafevic333.png"
            alt=""
            @click="handleLogoClick"
          />
        </div>
      </div>
      <a-menu
        ref="menu"
        class="menu"
        :v-model="selectedKeys"
        mode="horizontal"
        :items="items"
        @click="handleMenuItemClick"
      >
      </a-menu>
      <a-dropdown class="lan">
        <a @click.prevent>
          {{ lan }}
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item @click="handleLanClick('en')">English</a-menu-item>
            <a-menu-item @click="handleLanClick('ch')">中文</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
    </a-layout-content>
    <!-- <a-float-button @click="handleLogoClick">
      <template #icon> <HomeOutlined /> </template>
    </a-float-button> -->
    <a-float-button-group trigger="hover">
      <template #icon><PlusOutlined /> </template>
      <a-float-button @click="router.push('/')">
        <template #icon>
          <HomeOutlined />
        </template>
      </a-float-button>
      <a-float-button @click="router.push('/dashboard1')">
        <template #icon><LineChartOutlined /> </template>
      </a-float-button>
      <a-float-button @click="router.push('/quiz')">
        <template #icon><FileDoneOutlined /> </template>
      </a-float-button>
      <a-float-button @click="router.push('/news')">
        <template #icon><PicLeftOutlined /> </template>
      </a-float-button>
      <a-float-button @click="router.push('/upcoming')">
        <template #icon><ExperimentOutlined /> </template>
      </a-float-button>
    </a-float-button-group>
  </a-layout>
</template>

<style scoped>
.main {
  width: 100%;
  height: 100%;
}
.header {
  position: relative;
  display: flex;
  background: #759f98;
}
.logo {
  position: relative; /* 或 absolute，取决于其在导航栏中的需要 */
  height: 96px; /* 限制高度 */
  width: 96px; /* 限制宽度 */
  cursor: pointer;
}

.logo-imgae {
  position: absolute;
  top: 0; /* 确保绝对定位从容器顶部开始 */
  left: 0; /* 确保绝对定位从容器左侧开始 */
  height: 100%; /* 完全填充高度 */
  width: 100%; /* 完全填充宽度 */
  z-index: 1000;
  background-color: #f4ecdc;
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
}

.logo-imgae img {
  object-fit: contain;
  max-height: 100%; /* 确保图像不超过容器高度 */
  max-width: 100%; /* 确保图像不超过容器宽度 */
}

/* .logo {
  position: relative;
  height: 100%;
  width: 96px;
  cursor: pointer;
}
.logo-imgae {
  position: absolute;
  height: 96px;
  width: 96px;
  z-index: 1000;
  background-color: #97bd3d;
} */
.menu {
  flex: 1;
  background-color: #759f98;
}
.lan {
  height: 100%;
  position: absolute;
  right: 50px;
  color: rgba(0, 0, 0, 0.88);
}
.lan:hover {
  background: none;
  color: black;
}
.content {
  display: flex;
  justify-content: center;
  overflow: auto;
}
.footer {
  background: radial-gradient(
    ellipse farthest-side at 40% 0%,
    #759f98 110%,
    transparent 110%
  );
  display: flex;
  justify-content: center;
  height: 160px;
}
.footer-content {
  width: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: space-between;
}
.footer-logo-area {
  width: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-intro-area {
  width: 400px;
  color: white;
}
.footer-contact-area {
  display: flex;
  align-items: center;
}
.footer-icon {
  font-size: 32px;
  margin: 20px;
}
.footer-left-content {
  display: flex;
}
</style>
<style>
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-selected,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-selected {
  color: rgb(193, 235, 228);
  background-color: transparent;
}
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-selected::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-selected::after {
  border-bottom-width: 2px;
  border-bottom-color: rgb(193, 235, 228);
}
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item:hover::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu:hover::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-active::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-active::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-item-open::after,
:where(
    .css-dev-only-do-not-override-1hsjdkk
  ).ant-menu-light.ant-menu-horizontal.menu
  > .ant-menu-submenu-open::after {
  border-bottom-width: 2px;
  border-bottom-color: rgb(193, 235, 228);
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-selected,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-selected {
  color: #759f98;
  background-color: transparent;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-selected::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-selected::after {
  border-bottom-width: 2px;
  border-bottom-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item:hover::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu:hover::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-active::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-active::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-item-open::after,
:where(.css-dev-only-do-not-override-1hsjdkk).ant-menu-light.ant-menu-horizontal
  > .ant-menu-submenu-open::after {
  border-bottom-width: 2px;
  border-bottom-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-anchor-wrapper:not(
    .ant-anchor-wrapper-horizontal
  )
  .ant-anchor
  .ant-anchor-ink {
  background-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-anchor-wrapper
  .ant-anchor
  .ant-anchor-link-active
  > .ant-anchor-link-title {
  color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-primary {
  background-color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-primary:not(
    :disabled
  ):hover {
  background-color: rgb(155, 197, 190);
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-link {
  color: #759f98;
}
:where(.css-dev-only-do-not-override-1hsjdkk).ant-btn-link:not(
    :disabled
  ):hover {
  color: rgb(155, 197, 190);
}
</style>
