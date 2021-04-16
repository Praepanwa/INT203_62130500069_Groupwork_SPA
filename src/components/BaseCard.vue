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
          <div
            class="bg-dark-rose rounded-full py-3 px-6 flex items-center justify-center hover:bg-green-400"
            @click="addComment(item.name)"
          >
            <div>
              <span class="text-white mr-3">add comments</span>
              <i class="far fa-comment"></i>
            </div>
          </div>
        </div>
        <div class="items-start">
          <form v-if="isCalled" @submit.prevent="submitComment">
            <label for="reviewedMenu">{{ item.name }} : </label
            >
            <input
              type="text"
              id="reviewedMenu"
              v-model="msg"
              placeholder="feedback"
              class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            /><br/><br/>
            <label for="customerName">reviewer : </label>
            <input
              type="text"
              id="customerName"
              v-model="customerName"
              placeholder="enter your name"
              class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              required
            /><br/>
            <button type="submit" class=" p-2 rounded-full bg-green-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class=" p-10 feedBack text-4xl text-slamon-pink">FEEDBACK
    <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae excepturi nihil suscipit facere facilis porro sunt tempora, nam quas, fugit ratione quia exercitationem enim nisi consectetur eligendi earum libero quaerat.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      customerName: "",
      isCalled: false,
      menuName: "",
      comments: [],
    };
  },
  props: ["items", "menu"],
  methods: {
    addComment(name) {
      this.isCalled = !this.isCalled;
      this.menuName = name;
    },
    submitComment() {
      this.comments.push({
        menuName: this.menuName,
        reviewer: this.customerName,
        comment: this.msg,
      });
      (this.menuName = ""), (this.customerName = ""), (this.msg = "");

      console.log(this.comments);
    },
  },
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