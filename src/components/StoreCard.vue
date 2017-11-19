<template>
  <div id="StoreCard">
    <h3>{{product.title}}</h3>
    <img :src="product.imageURL" :alt="product.title">
    <p>{{product.description}}</p>
    <p>{{product.startPrice}} / {{product.upkeepPrice}}</p>
    <div>
      <router-link class="details-link" :product="product" :to="{
      name: 'ProductPage',
      params: {
        product: product.title
      }
    }">
             <p class="more-link">More Details</p>
          </router-link>
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
  .details-link {
    text-align: left;
    margin: 2rem;
  }
  .more-link {
    text-decoration: none;
    color: darkgreen;
    font-weight: bold;
  }
</style>
