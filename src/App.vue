<template>

<div class="transition duration-500 bg-gray-50 w-full h-screen">
<nav-bar />
<router-view /> 
 <Footer/>
</div>

</template>
<script>
import Footer from './components/Footer.vue'
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar, Footer },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>