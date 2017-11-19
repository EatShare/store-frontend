<template>
  <div id="StoreCard">
    <div class="image-container">
      <h3>{{product.title}}</h3>
      <img :src="product.imageURL1">
      <h4>{{product.description}}</h4>
      <p>{{product.address}}</p>
    </div>
      <!-- <img :src="product.imageURL2"> -->
    <!-- <p>{{product.description}}</p>
    <p>{{product.startPrice}} / {{product.upkeepPrice}}</p> -->
    <!-- <div>
      <router-link class="details-link" :to="{
      name: 'ProductPage',
      params: {
        product: product.title
      }
    }">
             <p class="more-link">More Details</p>
          </router-link> -->
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
  },
  data() {
    return {
      singleProduct: this.product
    }
  }
}
</script>
<style scoped>
  #StoreCard {
    border: 2px solid #0D7B35;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 darkgrey;
    padding: .5rem;
  }
  h3 {
    margin: 2rem;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #9B0D0D;
    align-self: center;
  }
  h4 {
    align-self: center;
  }
  .image-container {
    display: flex;
    flex-flow: column nowrap;
  }
  img {
    width: 50%;
    height: auto;
    align-self: center;
  }
  p {
    margin-left: 2rem;
    margin-right: 2rem;
    align-self: center;
  }
  .details-link {
    text-align: left;
    text-decoration: none;
  }
  .more-link {
    color: #13478E;
    font-weight: bold;
  }
</style>
