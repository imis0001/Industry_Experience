import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import InformationView from "../views/InformationView.vue";
import DashboardView from "../views/DashboardView.vue";
import HelpView from "../views/HelpView.vue";
import QuizView from "../views/QuizView.vue";
import AboutView from "../views/AboutView.vue";
import NewsView from "../views/NewsView.vue";
import Developing from "../components/Developing.vue";
import {computed, h } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue'
export const routes = [
  // {
  //   path: "/information",
  //   name: "information",
  //   component: InformationView,
  //   // route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import('../views/AboutView.vue')
  // },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
  },
  {
    path: "/help",
    name: "help",
    component: HelpView,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizView,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: '/upcoming',
    name: 'Placeholder',
    component: Developing
  }
];
const items = computed(() => [
  // 其他单独的路由项...
  {
    path: '/dashboard',
    name: 'dashboard',
    label: 'Dashboard',
  },
  {
    path: '/news',
    name: 'news',
    label: 'News',
  },
  {
    path: '/quiz',
    name: 'quiz',
    label: 'Quiz',
  },
  {
    path: '/upcoming',
    name: 'Placeholder',
    component: Developing
  },
  {
    key: 'more',
    label: '',
    icon: h(DownOutlined),
    children: [
      {
        path: '/help',
        name: 'help',
        label: 'Help',
      },
      {
        path: '/about',
        name: 'about',
        label: 'About',
      },
    ]
  }
]);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),/
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    ,
    ...routes,
  ],
});

export default router;
