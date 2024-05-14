<template>
  <div class="fullScreenViz">
    <div class='tableauPlaceholder' id='viz1715608994678' style='position: relative'>
      <noscript>
        <a href='#'>
          <img alt=' ' src='https://public.tableau.com/static/images/Fl/Flood_Dashboard_V_1_0/Dashboard2/1_rss.png' style='border: none' />
        </a>
      </noscript>
      <object class='tableauViz' id="object2" style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='path' value='views/Flood_Dashboard_V_1_0/Dashboard2?:language=en-GB&:embed=true&publish=yes&:sid=' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/Fl/Flood_Dashboard_V_1_0/Dashboard2/1.png' />
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
  name: 'FloodDashboard',
  mounted() {
    let divElement = document.getElementById('viz1715608994678');
    let vizElement = document.getElementById('object2');
    const adjustVizSize = () => {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '1366px';
        vizElement.style.height = '795px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '1366px';
        vizElement.style.height = '795px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '977px';
      }
    };
    adjustVizSize(); 
    window.addEventListener('resize', adjustVizSize); // Adjusts the size on window resize
    // vizElement.style.width = '100%';
    // vizElement.style.height = '100vh';
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
