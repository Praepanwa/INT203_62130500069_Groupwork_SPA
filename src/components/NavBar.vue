<template>
  <div id="nav" class="z-50 relative cursor-pointer lg:text-lg md:text-base text-sm font-sans flex flex-row justify-end absoulute lg:pt-12 lg:pr-40 md:pt-8 md:pr-24 pr-6 pt-8 ">

   <router-link to="/" class="transition duration-300 ease-in hover:text-gray-400 mx-5">Home</router-link> |
    <router-link :to="{name:'Drinks'}" class="transition duration-300 ease-in hover:text-gray-400 mx-5 ">Drinks</router-link> |
    <router-link :to="{name:'Donuts'}" class="transition duration-300 ease-in hover:text-gray-400 mx-5 ">Donuts</router-link> |
    <router-link :to="{name:'Cakes'}" class="transition duration-300 ease-in hover:text-gray-400 mx-5 " >Cake</router-link> 
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #A7B4FF;
}
</style>