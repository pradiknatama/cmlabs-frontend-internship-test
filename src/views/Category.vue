<template>
  <div class="container px-5">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Food</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ $route.params.categoryName }}
        </li>
      </ol>
    </nav>
    <div class="row row-cols-2 row-cols-md-4 g-4">
      <div class="col" v-for="product in info" :key="product.id">
      
        <router-link class="nav-link a" :to="{name:'Detail',params:{id:product.idMeal}}">
        <div class="col">
          <div class="image">
            <img
              class="image__img"
              :src="product.strMealThumb"
              alt="Category"
            />
            <div class="image__overlay image__overlay">
              <div class="image__title">{{product.strMeal}}</div>
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

export default {
  name: "FoodDetail",

  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
          this.$route.params.categoryName
      )
      .then((response) => (this.info = response.data.meals));
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
  text-align:center;
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
