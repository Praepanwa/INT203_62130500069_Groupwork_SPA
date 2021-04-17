<template>
  <div class="content">
    <h1
      class="text-4xl transition duration-500 ease-in-out transform hover:-skew-x-12"
    >
      <span class="text-yellow-500"><slot></slot></span>
      <span class="text-indigo-600"> Menu</span>
    </h1>

    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in items" :key="item.id">
        <div class="list bg-pale-yellow">
          <img :src="item.img" />
          <div
            class="text-sm font-semibold font-serif text-ombre-blue hover:text-green-400"
          >
            {{ item.name }}
          </div>
          <div class="text-sm font-semibold font-serif text-slamon-pink">
            price : {{ item.price }}
          </div>
          
        </div>
        
      </div>
    </div>
  </div>

  
</template>

<script>
export default {
 
  props: ["items", "menu"],
  
};
</script>

<style scoped>
.bgvdo {
  display: block;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  max-width: none;
  opacity: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
#bg-viewport {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.content {
  width: 100%;
  max-width: 100%;
  margin: auto;
  padding: 0;
  position: relative;
  z-index: 2;
}

.list {
  padding: 20px;
  margin: 10px;
}

.list:hover {
  background-color: cornflowerblue;
}
</style>