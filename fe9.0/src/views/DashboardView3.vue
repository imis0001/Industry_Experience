<template>
  <div class="fullScreenViz">
    <div class='tableauPlaceholder' id='viz1715593478783' style='position: relative; width: 100%; height: 100vh'>
      <noscript>
        <a href='#'><img alt='Dashboard 1 ' src='https://public.tableau.com/static/images/He/Heatwave_Victoria_V_1_2/Dashboard1/1_rss.png' style='border: none' /></a>
      </noscript>
      <object class='tableauViz' id="object3" style='display:none;'>
        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
        <param name='embed_code_version' value='3' />
        <param name='site_root' value='' />
        <param name='name' value='Heatwave_Victoria_V_1_2/Dashboard1' />
        <param name='tabs' value='no' />
        <param name='toolbar' value='yes' />
        <param name='static_image' value='https://public.tableau.com/static/images/He/Heatwave_Victoria_V_1_2/Dashboard1/1.png' />
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
  name: 'HeatwaveDashboard',
  mounted() {
    let divElement = document.getElementById('viz1715593478783');
    let vizElement = document.getElementById('object3');
    //  Adjust sizes based on the width of the divElement
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '1366px';
      vizElement.style.height = '795px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '1366px';
      vizElement.style.height = '795px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '1877px';
    }
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
