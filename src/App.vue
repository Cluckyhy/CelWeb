<template>
  <div id="app">
    <router-view/>
    <cel-center/>
    <cel-bottom/>
  </div>
</template>

<script>
import CelCenter from "@/components/CelCenter";
import CelBottom from "@/components/CelBottom";

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {CelCenter,CelBottom}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  position: relative;
  width: 750px;
  height: 3008px;
  margin: 0 auto;
}
</style>
