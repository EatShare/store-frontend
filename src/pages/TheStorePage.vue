<template>
  <div id="TheStorePage">
    <h2>Peachwood Neighborhood</h2>
    <h4>Next Farm Keeper Visit: 6/14/2018</h4>
    <div class="map-container">
      <button>Farming Help</button>
      <button>Maintenance Request</button>
    </div>
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
        {id: 1, title: "Tomatoes", startPrice: "$0.00", address: "2532 Alpaca Way", description: "Miller Household", imageURL1: "../../static/tomatoe.png", imageURL2: ""},
        {id: 2, title: "Beans", startPrice: "$0.00", address: "4125 Chapmans Lane", description: "Cook Household", imageURL1: "../../static/beans.png", imageURL2: ""},
        {id: 3, title: "Root Veggies", startPrice: "$0.00", address: "2536 Alpaca Way", description: "Curtis Household", imageURL1: "../../static/carrot.png", imageURL2: ""},
        {id: 4, title: "Berries", startPrice: "$0.00", address: "2555 Alpaca Way", description: "Witte Household", imageURL1: "../../static/raspberry.png", imageURL2: ""},
        {id: 5, title: "Squash", startPrice: "$0.00", address: "4229 Ferrell Street", description: "Riley Household", imageURL1: "../../static/squash.png", imageURL2: ""},
        {id: 6, title: "Herb Garden", startPrice: "$0.00", address: "4179 Chapmans Lane", description: "Sanchez Household", imageURL1: "../../static/cilantro.png", imageURL2: ""},
        {id: 6, title: "Lettuce Greens", startPrice: "$0.00", address: "4213 Ferrell Street", description: "Estes Household", imageURL1: "../../static/lettuce.png", imageURL2: ""}
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
  .map-container img {
    width: 80%;
  }
  .store-container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 1.5rem;
  }
  button {
    height: 40px;
    font-size: 1.5rem;
    background-color: #13478E;
    color: white;
    border-radius: 10px;
  }
</style>
