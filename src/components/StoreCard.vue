<template>
  <div id="StoreCard">
    <h3>{{product.title}}</h3>
    <img :src="product.imageURL" :alt="product.title">
    <p>{{product.description}}</p>
    <p>{{product.startPrice}} / {{product.upkeepPrice}}</p>
    <div>
      <router-link class="details-link" :to="{
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
  }
  h3 {
    margin: 2rem;
    margin-top: 5px;
    margin-bottom: 5px;
    color: #9B0D0D;
  }
  img {
    width: 100%;
    height: auto;
  }
  p {
    margin-left: 2rem;
    margin-right: 2rem;
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
