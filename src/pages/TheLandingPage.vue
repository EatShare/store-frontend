<template>
  <div id="TheLandingPage">
    <div class="hero-content">
      <div class="introduction-text">
        <div>
          <h3>You want to control the food you eat.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <!-- <router-link class="store-link" :to="{ name: 'StorePage'}">Shop Tiny Farms</router-link> -->
        </div>
        <a href="mailto:EMAILADDRESS"><button>Get in touch to learn more!</button></a>
      </div>
      <div>
          <img src="../../static/eat-share-logo.png" alt="EatShare">
      </div>
    </div>

      <!-- <TheSolution></TheSolution> -->
  </div>
</template>
<script>
import TheCallToAction from '../components/TheCallToAction';
import TheSolution from '../components/TheSolution';

export default {
  name: "TheLandingPage",
  components: {
    TheCallToAction,
    TheSolution
  }
}
</script>
<style scoped>
  #TheLandingPage {
    width: 85vw;
    margin: 0 auto;
  }
  .hero-content {
    grid-column: 2 / 5;
    /*display: grid;
    grid-template-columns: repeat(3, 1fr);*/
    border: 2px solid #0D7B35;
    border-radius: 10px;
    padding: 2rem;
    margin-top: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    box-shadow: 0 2px 4px 0 darkgrey;
  }
  h3 {
    margin: 0px;
    color: #9B0D0D;
  }
  img {
    width: 300px;
    hight: auto;
  }
  .introduction-text {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }
  .store-link {
    text-decoration: none;
    font-weight: bold;
    color: #13478E;
    float: right;
    margin-right: 3rem;
  }
  button {
    background-color: #0D7B35;
    border-radius: 10px;
    color:white;
    /*width: 10rem;*/
    font-size: 2rem;
    padding: .5rem;
  }
</style>
