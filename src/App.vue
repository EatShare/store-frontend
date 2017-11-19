<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <!-- <TheLandingPage></TheLandingPage>
    <TheSolution></TheSolution>
    <TheCallToAction></TheCallToAction> -->
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
// import TheLandingPage from '@/pages/TheLandingPage';
// import TheCallToAction from '@/components/TheCallToAction';
// import TheSolution from '@/components/TheSolution';

export default {
  name: 'app',
  components: {
    TheHeader,
    // TheLandingPage,
    // TheCallToAction,
    // TheSolution
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding:0px;
  /*display: grid;
  grid-template-columns: 1rem repeat(3, 1fr) 1rem;
  grid-template-rows: 15vh repeat(3, 1fr);*/
}
</style>
