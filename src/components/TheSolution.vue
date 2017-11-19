<template>
  <div id="TheSolution">
    <div class="step-box">
      <h4>Yard/Basement Before</h4>
    </div>
    <div class="arrow-box">
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <div class="step-box">
      <h4>Us!</h4>
    </div>
    <div class="arrow-box">
      <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <div class="step-box">
      <h4>Yard/Basement After</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheSolution",
}
</script>
<style scoped>
  #TheSolution {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    grid-column: 2 / span 3;
    margin-top: 2rem;
  }
  h4{
    color: #13478E;
  }
  .step-box {
    width: 30%;
    border: 2px solid #0D7B35;
    border-radius: 10px;
    text-align: center;
  }
  .arrow-box {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>
