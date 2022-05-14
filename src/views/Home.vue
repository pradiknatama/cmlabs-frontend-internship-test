<template>
  <div class="jumbotron text-center">
    <img
      src="@/assets/bowl.png"
      style="width: 40px; padding-right: 20px"
      alt=""
    />
    <img
      src="@/assets/japanese-food.png"
      style="width: 40px; padding-right: 20px"
      alt=""
    />
    <img
      src="@/assets/cookies.png"
      style="width: 40px; padding-right: 20px"
      alt=""
    />
    <p class="pt-3" style="font-family: Poppins; font-weight: 500">
      mealapp API website
    </p>
    <h1 class="display-4" style="font-family: Poppins; font-weight: 600">
      See All The Delicious Food
    </h1>
  </div>
  <div class="container px-5">
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col" v-for="(category, index) in categories" :key="index">
      <router-link class="nav-link a" :to="{name:'CategoryDetail',params:{categoryName:category.strCategory}}">
        <div class="col">
          <div class="image">
            <img
              class="image__img"
              :src="category.strCategoryThumb"
              alt="Category"
            />
            <div class="image__overlay image__overlay">
              <div class="image__title">{{category.strCategory}}</div>
            </div>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "HomeView",
  setup() {
    //reactive state
    let categories = ref([]);

    onMounted(() => {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((result) => {
          categories.value = result.data.categories;
          console.log("succsess:", result.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return {
      categories,
    };
  },
};
</script>
<style>
.jumbotron {
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  background-color: #f9fafb;
  border-radius: 0.3rem;
}
.image {
  position: relative;
  width: 100%;
}

.image__img {
  display: block;
  width: 100%;
  border-radius: 20px;
}

.image__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 1;
  padding-bottom: 60px;
  transition: opacity 0.25s;
}
.image__overlay > * {
  transform: translateY(20px);
  transition: transform 0.25s;
}
.image__overlay:hover {
  opacity: 1;
}
.image__overlay:hover > * {
  transform: translateY(0);
}
.image__title {
  font-size: 1.5em;
  font-weight: bold;
}
</style>
