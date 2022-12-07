<template>
  <div id="app">

    <router-view/>
    <FooterCom />
  </div>
</template>

<script>

import FooterCom from "@/components/Mainpage/FooterCom";

export default {
  components: {
    FooterCom,
  },

};


</script>


<style>

</style>
