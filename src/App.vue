<template>
  <div id="app">
    <navbar/>
    <router-view />
  </div>
</template>

<script>
  import navbar from "./components/navbar.vue"
  
  export default {
    name: "root",
  
    components: {
      navbar,
    }
  }
  </script>

<style>
@import url('https://fonts.googleapis.com/css2? family= Montserrat:wght@400;500;600 & display=swap');

  #app{
    font-family: 'Poppins', sans-serif;
    background-color: #7890a8;
  }
  body {
    height: 100vh;
    background-color: #7890a8 !important;
  }
</style>
