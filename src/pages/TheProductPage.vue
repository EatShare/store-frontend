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
      
    </div>
  </div>
</template>
<script>
export default {
  name: "TheProductPage",
  // props: {
  //   product: {
  //     type: Object,
  //     required: true
  //   }
  // }
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
</style>
