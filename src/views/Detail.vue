<template>
  <div class="container px-5 pt-3">
    <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item"><a href="#">Food</a></li>
        <li class="breadcrumb-item">
          <a href="#">{{ post[0].strCategory }}</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ post[0].strMeal }}
        </li>
      </ol>
    </nav>

    <h2 class="titleMeal">{{post[0].strMeal}}</h2>
    <hr />
    <h5 class="negaraAsal">{{post[0].strArea }} Culinary</h5>
    <div class="row row-cols-1 row-cols-md-2 g-2">
      <div class="col">
        <img
          class="image__img"
          :src="post[0].strMealThumb"
          alt="Bricks"
        />
      </div>
      <div class="col">
        <h3>Instruction</h3>

        <p>
          {{ post[0].strInstructions }}
        </p>
        <h3>Recipes</h3>
        <ul>
            <li >{{post[0].strMeasure1}} {{post[0].strIngredient1}}</li>
            <li >{{post[0].strMeasure2}} {{post[0].strIngredient2}}</li>
            <li >{{post[0].strMeasure3}} {{post[0].strIngredient3}}</li>
            <li >{{post[0].strMeasure4}} {{post[0].strIngredient4}}</li>
            <li >{{post[0].strMeasure5}} {{post[0].strIngredient5}}</li>
            <li >{{post[0].strMeasure6}} {{post[0].strIngredient6}}</li>
            <li >{{post[0].strMeasure7}} {{post[0].strIngredient7}}</li>
            <li >{{post[0].strMeasure8}} {{post[0].strIngredient8}}</li>
            <li >{{post[0].strMeasure9}} {{post[0].strIngredient9}}</li>
        </ul>
      </div>
    </div>
    <div class="col-12 mt-5">
      <div class="text-center">
        <h3 class="tutorial">Tutorial</h3>
        <div class="ratio youtube ratio-16x9">
          <iframe
            :src="post[0].strYoutube"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "DetailMealView",
  data() {
    return {
      post: {},
    };
  },
  created() {
    axios
      .get(
        `http://localhost:8080/api/json/v1/1/lookup.php?i=${this.$route.params.mealId}`
      )
      .then((response) => {
        this.post = response.data.meals;
      });
  },
};
</script>

<style>
.image__img {
  display: block;
  width: 100%;
  border-radius: 20px;
}
.titleMeal {
  padding-bottom: 20px;
}
.negaraAsal {
  padding-top: 20px;
  padding-bottom: 10px;
  color: red;
}
.tutorial {
  font-weight: 400;
  font-size: 42px;
}
.youtube {
  margin-bottom: 30px;
}
</style>
