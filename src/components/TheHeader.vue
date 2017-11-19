<template>
  <div id="TheHeader">
    <div>
      <H1>EatShare</H1>
    </div>
    <div>
      <ul>
        <li>
          Who Are we?
        </li>
        <li>
          What are we doing?
        </li>
        <li>
          Get Involved
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheHeader",
}
</script>
<style scoped>
  #TheHeader {
    grid-column: 1 / span 6;
    grid-row: 1;
    display: flex;
    justify-content: space-around;
    max-height:100px;
  }
  h1{
    margin-left: 2rem;
    color: #0D7B35;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    padding: 1rem;
  }
</style>
