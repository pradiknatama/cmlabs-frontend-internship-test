<template>
<nav class="navbar navbar-expand-lg navbar-light " style="background: #FFFFFF; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04);">
    <div class="container" >
        <router-link class="navbar-brand" to="/" style="font-family: Poppins; font-weight: 600">Mealapp</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item d-none">
                    <router-link class="nav-link active" aria-current="page" to="/">Mealapp</router-link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link a" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link a" to="/">Food</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link a" to="/">Ingredient</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link a" to="/">Local Culinary</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>

</template>
<style>
    li a{
        font-family: Poppins; font-weight: 500;
    }
</style>

<script>
    export default {
    name: 'NavbarItem'
    }
</script>