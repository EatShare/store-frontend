<template>
  <div id="TheLandingPage">
      <h3>You want to control the food you eat.</h3>
      <div class="introduction-text">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          <i class="fa fa-cutlery fa-5x" aria-hidden="true"></i>
        </div>
      </div>
      <TheSolution></TheSolution>
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
    grid-column: 2 / 5;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid darkgreen;
    border-radius: 10px;
    padding: 2rem;
    margin-top: 1rem;
  }
  h3 {
    margin: 0px;
  }
  .introduction-text {
    grid-column: 1 / 4;
    display: grid;
    grid-template-columns: repeat(4, 25%);
  }
  .introduction-text p {
    grid-column: 1 / span 2;
  }
  .introduction-text div {
    grid-column: 4 / span 1;
    align-self: center;
  }
</style>
