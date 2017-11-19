<template>
  <div id="TheStorePage">
    <h2>Tiny Farms</h2>
    <div class="store-container">
      <div v-for="garden in gardens" :key="garden.id">
        <StoreCard :product="garden"></StoreCard>
      </div>
    </div>
  </div>
</template>
<script>
import StoreCard from '../components/StoreCard';

export default {
  name: "TheStorePage",
  components: {
    StoreCard
  },
  data() {
    return {
      gardens: [
        {id: 1, title: "Salsa Garden", startPrice: "$0.00", upkeepPrice: "$0.00", description: "Everything you need for fresh salsa at home.", imageURL: "../../static/salsa-garden.png", plantList:["Six Onion Plants", "Two Tomato Plants", "Three Garlic Platnts", "Two Jalapeno Plants", "One Cilantro Plants"]},
        {id: 2, title: "Salad Filler", startPrice: "$0.00", upkeepPrice: "$0.00", description: "Lettuce, tomatoes, and more to keep your salads fresh and interesting.", imageURL: "../../static/salad-garden.png", plantList:[""]},
        {id: 3, title: "Root Veggies", startPrice: "$0.00", upkeepPrice: "$0.00", description: "Wholesome, filling root vegetables, perfect for fall and winter.", imageURL: "../../static/root-garden.png", plantList:[""]},
        {id: 4, title: "Berries", startPrice: "$0.00", upkeepPrice: "$0.00", description: "Berry bushes for the sweet lovers.", imageURL: "../../static/berry-garden.png", plantList:[""]},
        {id: 5, title: "Pasta Lover", startPrice: "$0.00", upkeepPrice: "$0.00", description: "Garlic, basil, and lots of bright red tomatoes.", imageURL: "../../static/italian-garden.png", plantList:[""]},
        // {id: 6, title: "Herb Garden", startPrice: "$0.00", upkeepPrice: "$0.00", description: "A wide variety of herbs, for the adventurous cook.", imageURL: "../../static/herb-garden.png", plantList:[""]}
      ]
    }
  }
}
</script>
<style scoped>
  #TheStorePage {
    width:80vw;
    margin: 0 auto;

  }
  .store-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
</style>
