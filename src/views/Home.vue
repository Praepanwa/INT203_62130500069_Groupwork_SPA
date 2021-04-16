<template>
  <p class="text-8xl">
    <span class="text-yellow-500">DROP BY</span
    ><span class="italic text-indigo-400"> DOUGH</span>
  </p>
  
<section>
 <p
    class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-dark-blue"
  >
    CAKE
  </p>
  <div class="p-2 bg-blue-200">
    <div class="grid grid-cols-4 gap-2">
      <div v-for="c in cakePoster" :key="c.id">
        <div class="m-2 item">
          <img class="w-1/2" :src="c.img" />
        </div>
      </div>
    </div>
  </div>

  <p
    class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-dark-blue"
  >
    Drinks
  </p>
  <div class="p-2 bg-blue-200">
    <div class="grid grid-cols-4 gap-2">
      <div v-for="d in drinkPoster" :key="d.id">
        <div class="m-2 item">
          <img class="w-1/2" :src="d.img" />
        </div>
      </div>
    </div>
  </div>

  <p class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-dark-blue">
    Donuts
  </p>
  <div class="p-2 bg-blue-200">
    <div class="grid grid-cols-4 gap-2">
      <div v-for="d in donutPoster" :key="d.id">
        <div class="m-2 item">
          <img class="w-1/2" :src="d.img" />
        </div>
      </div>
    </div>
  </div>
</section>
 


</template>

<script>
// @ is an alias to /src



export default {
  name: "Home",
  data() {
    return {
      cakePoster: [
        { id: 1, img: require("../assets/Poster/CakePoster/1.jpg") },
        { id: 2, img: require("../assets/Poster/CakePoster/2.jpg") },
        { id: 3, img: require("../assets/Poster/CakePoster/3.jpg") },
        { id: 4, img: require("../assets/Poster/CakePoster/4.jpg") },
      ],
      drinkPoster: [
        { id: 1, img: require("../assets/Poster/DrinkPoster/1.jpg") },
        { id: 2, img: require("../assets/Poster/DrinkPoster/2.jpg") },
        { id: 3, img: require("../assets/Poster/DrinkPoster/3.jpg") },
        { id: 4, img: require("../assets/Poster/DrinkPoster/4.jpg") },
      ],
      donutPoster: [
        { id: 1, img: require("../assets/Poster/DonutPoster/1.jpg") },
        { id: 2, img: require("../assets/Poster/DonutPoster/2.jpg") },
        { id: 3, img: require("../assets/Poster/DonutPoster/3.jpg") },
        { id: 4, img: require("../assets/Poster/DonutPoster/4.jpg") },
      ],
    };
  },
  methods: {
    // onHoverimg() {
    //     this.$emit("on-Hv",index);
    //     //  console.log(this.members[index])
    //   },
    //   onUnhover() {
    //     this.$emit("un-Hv",index);
    //   },
  },
};
</script>
<style scoped>
.item img {
  transition: transform 0.3s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
  overflow: hidden;
}
.item img:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}

</style>