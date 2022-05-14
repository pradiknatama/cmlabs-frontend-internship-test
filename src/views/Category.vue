<template>
  <div class="container px-5">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Food</a></li>
        <li class="breadcrumb-item active" aria-current="page">Beef</li>
      </ol>
    </nav>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col" v-for="(category, index) in categories" :key="index">
        <router-link
          class="nav-link a"
          :to="{
            name: 'CategoryDetail',
            params: { categoryName: category.strCategory },
          }"
        >
          <div class="col">
            <div class="image">
              <img
                class="image__img"
                :src="category.strCategoryThumb"
                alt="Category"
              />
              <div class="image__overlay image__overlay">
                <div class="image__title">{{ category.strCategory }}</div>
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
import { reactive, ref } from "vue";
import {useRouter, useRoute} from 'vue-router';
export default {
  name: "CategoryDetailView",
  setup() {
    //data binding
    let cateDetail = ref([]);

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
