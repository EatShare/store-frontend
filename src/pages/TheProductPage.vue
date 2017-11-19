<template>
  <div id="TheProductPage">
    <h2>{{product.title}}</h2>
    <div class="product-container">
      <img />
    </div>
  </div>
</template>
<script>
export default {
  name: "TheProductPage",
  props: [
    product: {
      type: Object,
      required: true
    }
  ]
}
</script>
<style scoped>
</style>
