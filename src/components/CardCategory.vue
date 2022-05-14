
<template>
  <div class="card shadow card-product">
    {{category.strCategory}}
    
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  props: ["category"],
};
</script>