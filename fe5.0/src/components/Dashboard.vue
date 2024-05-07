<!-- <script lang="ts" setup>
import mapboxgl from "mapbox-gl";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import MapVue from "@/components/Map.vue";
import ChartVue from "@/components/Chart.vue";
const store = useStore();
</script>
<template>
  <div class="dashboard-left">
    <div class="dashboard-intro"></div>
    <div class="dashboard-content">
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
      <a-card hoverable class="dashboard-card">
        <template #cover>
          <div class="dashboard-chart">
            <chart-vue></chart-vue>
          </div>
        </template>
        <a-card-meta title="Card title" description="This is the description">
        </a-card-meta>
      </a-card>
    </div>
  </div>
  <div class="dashboard-right">
    <map-vue></map-vue>
  </div>
</template>

<style scoped>
.dashboard-left {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  overflow: auto;
  z-index: 10;
  display: none;
}
.dashboard-right {
  position: relative;
  flex: 1 1 auto;
}
.dashboard-intro {
  width: 100%;
  height: 30vh;
  background-color: #364d79;
}
.dashboard-content {
  flex: 1;
  padding: 0 20px;
  overflow: auto;
  background-color: white;
}
.dashboard-card {
  width: 100%;
  margin: 20px 0;
}
.dashboard-chart {
  position: relative;
  width: 100%;
  height: 40vh;
  padding: 10px;
}
</style> -->
<template>
  <div class="fullScreenViz">
    <div class='tableauPlaceholder' id='viz1714993925918' style='position: relative; width: 100%; height: 100vh'>
      <noscript>
        <a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/Bu/BushfireDashboardByIshan/Dashboard1/1_rss.png' style='border: none' /></a>
      </noscript>
      <object class='tableauViz' id="object" style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='BushfireDashboardByIshan/Dashboard1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Bu/BushfireDashboardByIshan/Dashboard1/1.png' />
        <param name='animate_transition' value='yes' />
        <param name='display_static_image' value='yes' />
        <param name='display_spinner' value='yes' />
        <param name='display_overlay' value='yes' />
        <param name='display_count' value='yes' />
        <param name='language' value='en-GB' />
        <param name='filter' value='publish=yes' />
      </object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Abc',
  mounted() {
    let divElement = document.getElementById('viz1714993925918');
    let vizElement = document.getElementById('object');
    vizElement.style.width = '100%';
    vizElement.style.height = '100vh'; // This ensures that the height is responsive to the viewport height
    let scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }
}
</script>

<style>
.fullScreenViz {
  width: 100%;       /* Full width */
  height: 100vh;     /* Full viewport height */
  overflow: hidden;  /* Hide scrollbars if any */
}
</style>
