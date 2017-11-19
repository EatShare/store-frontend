<template>
  <div id="TheProductPage">
    <h2>Tiny Salsa Farm</h2>
    <div class="product-container">
      <p>
        Everything you need for fresh salsa at home.
      </p>
      <hr />
      <p>
        This kit contains:
      </p>
      <div class="plant-list">
        <div>
          <h3>Tomatoes</h3>
          <img src="../../static/tomatoe.png" alt="tomato">
        </div>
        <div>
          <h3>Jalapenos</h3>
          <img src="../../static/chili.png" alt="chili">
        </div>
        <div>
          <h3>Onions</h3>
          <img src="../../static/onion.png" alt="onion">
        </div>
        <div>
          <h3>Garlic</h3>
          <img src="../../static/garlic.png" alt="garlic">
        </div>
        <div>
          <h3>Cilantro</h3>
          <img src="../../static/cilantro.png" alt="cilantro">
        </div>
      </div>
    </div>
    <div class="tiny-farm-container">
      <div class="farm-model-container" v-for="model in modelArray" :key="model.title">
        <ModelCard :information="model"></ModelCard>
      </div>
    </div>
  </div>
</template>
<script>
import ModelCard from '../components/ModelCard';

export default {
  name: "TheProductPage",
  components: {
    ModelCard
  },
  data() {
    return {
      modelArray: [
        {title: "Outdoor Greenhouse", description: "A portable greenhouse, brought to your house ready to grow. It can be parked anywhere you can provide it electricity and water.", imageURL: "",
        sizeArray: [
          {title: "Small", width: "", length: "", width: "", description: ""},
          {title: "Large", width: "", length: "", width: "", description: ""},
        ]},
        {title: "Indoor Hydroponics", description: "A portable hydroponics cabinet. It can be installed anywhere in your home that has access to electricity.", imageURL: "",
        sizeArray: [
          {title: "Small", width: "", length: "", height: "", description: ""},
          {title: "Large", width: "", length: "", height: "", description: ""},
        ]},
      ]
    }
  }
}
</script>
<style scoped>
  #TheProductPage {
    width: 85vw;
    margin: 0 auto;
  }
  .product-container {
    border: 2px solid #0D7B35;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 darkgrey;
    padding: .5rem;
    min-width: 450px;
  }
  .plant-list {
    display: flex;
    flex-flow: row nowrap;
  }
  .plant-list div {
    width: 20%;
    text-align: center;
  }
  .plant-list img {
    width: 90%;
    height: auto;
  }
  .tiny-farm-container {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-items: center;
  }
</style>
