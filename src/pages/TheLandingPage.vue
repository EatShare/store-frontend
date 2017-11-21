<template>
  <div id="TheLandingPage">
    <div class="hero-content">
      <div class="introduction-text">
        <div>
          <h3>Help us plant the seed for a new urban food revolution.</h3>
          <p>EatShare provides a service to help neighborhoods set up and maintain gardens in their backyards. With 25 at least houses participating, each neighborhood becomes its own food sharing ecosystem. The excess can be sold back to EatShare.</p>
          <ul>
            <li>
              <a href="https://docs.google.com/presentation/d/1eHmfGmkP_EG5TP4G9CfziwH6b-93xeUBFaxtbj8uqL8/edit?usp=sharing" target="_blank">View our pitch slides</a>
            </li>
            <li>
              <a href="https://www.eventbrite.com/e/startup-weekend-boulder-food-tech-tickets-37108363113" target="_blank">Startup Weekend Boulder Participant</a>
            </li>
            <li>

            </li>
          </ul>
          <!-- <router-link class="store-link" :to="{ name: 'StorePage'}">Shop Tiny Farms</router-link> -->
        </div>
        <a href="mailto:jasfeldman@gmail.com"><button>Get in touch to learn more!</button></a>
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
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
