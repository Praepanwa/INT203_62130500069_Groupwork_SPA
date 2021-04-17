<template>
  <div class="page p-auto">
    <div class="justify-items-center">
      <p class="text-8xl">
        <span class="text-yellow-500">DROP BY</span>
        <span class="italic text-indigo-400"> DOUGH</span>
      </p>
    </div>
    <p class="text-green-600 text-4xl pb-10">catalog and feedback</p>
    <div class="place-items-end">
      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          <div v-for="c in cakePoster" :key="c.id">
            <div
              class="rounded-full h-60 w-60 flex items-center justify-center bg-green-600 posterBox"
            >
              <div class="m-2 item">
                <img class="rounded-full h-44 w-48 m-auto" :src="c.img" />
              </div>
            </div>
          </div>
          <div class="listMenu justify-items-start pr-56">
            <p
              class="text-6xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-purple-lavender"
            >
              CAKE
            </p>
          </div>
        </div>
      </div>

      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          <div v-for="d in drinkPoster" :key="d.id">
            <div
              class="rounded-full h-60 w-60 flex items-center justify-center bg-yellow-500 posterBox"
            >
              <div class="m-2 item">
                <img class="rounded-full h-44 w-48 m-auto" :src="d.img" />
              </div>
            </div>
          </div>
          <div class="listMenu justify-items-start pr-56">
            <p
              class="text-6xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-purple-lavender"
            >
              Drinks
            </p>
          </div>
        </div>
      </div>

      <div class="p-2">
        <div class="grid grid-cols-5 gap-2">
          <div v-for="d in donutPoster" :key="d.id">
            <div
              class="rounded-full h-60 w-60 flex items-center justify-center bg-indigo-400 posterBox"
            >
              <div class="m-2 item">
                <img class="rounded-full h-44 w-48 m-auto" :src="d.img" />
              </div>
            </div>
          </div>
          <div class="listMenu justify-items-start pr-56">
            <p
              class="text-6xl transition duration-500 ease-in-out transform hover:-skew-x-12 text-purple-lavender"
            >
              Donuts
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-10 feedBack text-6xl text-slamon-pink col-2">FEEDBACK</div>
    <div class="pb-10 feedBack text-4xl text-green-600 col-2">
      from customer
    </div>
    <div class="grid grid-cols-2 gap-3 mb-8 mx-6 items-center justify-center">
      <div class="rounded-full h-96 w-96 flex bg-pale-yellow commentBox ml-40">
        <div class="m-auto p-8">
          <form @submit.prevent="addFeedback">
            <div class="pb-6">
              <label for="customerName" class="my-96">reviewer : </label>
              <input
                type="text"
                id="customerName"
                v-model="customerName"
                placeholder="enter your name"
                class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>

            <div class="pb-6">
              <label for="reviewedMenu">Menu : </label>
              <input
                type="text"
                id="reviewedMenu"
                v-model="reviewedmenu"
                placeholder="your menu"
                class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <p class="text-black">Please rating your menu:</p>
              <input
                type="radio"
                id="5"
                v-model="rating"
                name="rating"
                value="5"
              />
              <label for="5" class="p-2">5</label>
              <input
                type="radio"
                id="4"
                v-model="rating"
                name="rating"
                value="4"
              />
              <label for="4" class="p-2">4</label>
              <input
                type="radio"
                id="3"
                v-model="rating"
                name="rating"
                value="3"
              />
              <label for="3" class="p-2">3</label>
              <input
                type="radio"
                id="2"
                v-model="rating"
                name="rating"
                value="2"
              />
              <label for="2" class="p-2">2</label>
              <input
                type="radio"
                id="1"
                v-model="rating"
                name="rating"
                value="1"
              />
              <label for="1" class="p-2">1</label>
            </div>
            <div class="pb-6">
              <label for="comment">Comments : </label>
              <input
                type="text"
                id="comment"
                v-model="comment"
                placeholder="your comment"
                class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              class="p-2 rounded-full bg-green-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <div class="bg-ombre-blue p-6 grid grid-cols-3 gap-4 rounded-lg ">
        <div class="list" v-for="result in feedbackResults" :key="result.id">
          <div class="text-pale-yellow">
            <div class="bg-coral-orange reviewBox m-2 p-2 rounded-lg">
              <div>
                Review from:
                <span class="text-indigo-800">{{ result.customerName }}</span>
              </div>
              <div>
                menu:
                <span class="text-indigo-800">{{ result.reviewedmenu }}</span>
              </div>
              <div>
                rating: <span class="text-indigo-800">{{ result.rating }}</span>
              </div>
              <div v-if="result.comment">
                comments:
                <span class="text-indigo-800">{{ result.comment }}</span>
              </div>
              <div class="p-2">
                <button
                  class="bg-green-emeral p-1.5 m-4 rounded-full"
                  @click="editFeedback"
                >
                  EDIT
                </button>
                <button
                  class="bg-dark-rose p-1.5 m-1 rounded-full"
                  @click="deleteFeedback(result.id)"
                >
                  DELETE
                </button>
              </div>
            </div>

            <div>
              <form @submit.prevent="editSubmit(result)" v-if="isEdit">
                <div class="pb-6">
                  <p>{{ result.customerName }}</p>
                </div>

                <div class="pb-6">
                  <label for="reviewedMenu">Menu : </label>
                  <input
                    type="text"
                    id="reviewedMenu"
                    v-model="newMenuName"
                    placeholder="your menu"
                    class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <p class="text-black">Please rating your menu:</p>
                  <input
                    type="radio"
                    id="5"
                    v-model="newRating"
                    name="rating"
                    value="5"
                  />
                  <label for="5" class="p-2">5</label>
                  <input
                    type="radio"
                    id="4"
                    v-model="newRating"
                    name="rating"
                    value="4"
                  />
                  <label for="4" class="p-2">4</label>
                  <input
                    type="radio"
                    id="3"
                    v-model="newRating"
                    name="rating"
                    value="3"
                  />
                  <label for="3" class="p-2">3</label>
                  <input
                    type="radio"
                    id="2"
                    v-model="newRating"
                    name="rating"
                    value="2"
                  />
                  <label for="2" class="p-2">2</label>
                  <input
                    type="radio"
                    id="1"
                    v-model="newRating"
                    name="rating"
                    value="1"
                  />
                  <label for="1" class="p-2">1</label>
                </div>
                <div class="pb-6">
                  <label for="comment">Comments : </label>
                  <input
                    type="text"
                    id="comment"
                    v-model="newComment"
                    placeholder="your comment"
                    class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  class="p-2 rounded-full bg-green-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      comment: "",
      customerName: "",
      rating: null,
      reviewedmenu: "",
      feedbackResults: [],
      url: "http://localhost:5000/comments",
      isEdit: false,
      newMenuName: "",
      newRating: "",
      newComment: "",
    };
  },
  methods: {
    async addFeedback() {
      const newFeedback = {
        customerName: this.customerName,
        reviewedmenu: this.reviewedmenu,
        rating: this.rating,
        comment: this.comment,
      };
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          customerName: newFeedback.customerName,
          reviewedmenu: newFeedback.reviewedmenu,
          rating: newFeedback.rating,
          comment: newFeedback.comment,
        }),
      });
      const data = await res.json();
      (this.feedbackResults = [...this.feedbackResults, data]),
        (this.comment = ""),
        (this.customerName = ""),
        (this.rating = null),
        (this.reviewedmenu = "");
    },
    async fetchFeedbackResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async deleteFeedback(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.feedbackResults = this.feedbackResults.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
    editFeedback() {
      this.isEdit = true;
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          customerName: editingData.customerName,
          reviewedmenu: this.newMenuName,
          rating: this.newRating,
          comment: this.newComment,
        }),
      });
      const data = await res.json();
      this.feedbackResults = this.feedbackResults.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              customerName: data.customerName,
              reviewedmenu: data.reviewedmenu,
              rating: data.rating,
              comment: data.comment,
            }
          : survey
      );
      this.isEdit = false;
      (this.newMenuName = ""), (this.newRating = null), (this.comment = "");
    },
  },
  async created() {
    this.feedbackResults = await this.fetchFeedbackResult();
  },
};
</script>
<style >
.item img {
  transition: transform 0.3s, filter 1.5s ease-in-out;
  filter: grayscale(100%);
  overflow: hidden;
}
.item img:hover {
  filter: grayscale(0);
  transform: scale(1.05);
}
.commentBox:hover {
  background-color: deeppink;
}
.reviewBox:hover {
  background-color: deeppink;
}
.page {
  background-color: whitesmoke;
}
.posterBox:hover {
  background-color: deeppink;
}
.listMenu {
  writing-mode: vertical-rl;
}
</style>