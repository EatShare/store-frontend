<template>
  <div id="StoreCard">
    <h3>{{product.title}}</h3>
    <img :src="product.imageURL" :alt="product.title">
    <p>{{product.description}}</p>
    <p>{{product.startPrice}} / {{product.upkeepPrice}}</p>
    <div class="details-link">
      <a href="#">More Details</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "StoreCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
  #StoreCard {
    border: 2px solid darkgreen;
    border-radius: 10px;
  }
  h3 {
    margin: 2rem;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin: 2rem;
  }
  .details-link{
    text-align: left;
    margin: 2rem;
  }
  a {
    text-decoration: none;
    color: darkgreen;
    font-weight: bold;
  }
</style>
