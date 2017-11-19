<template>
  <div id="ModelCard">
    <h3>{{information.title}}</h3>
    <img :src="information.imageURL" alt="">
    <p>
      {{information.description}}
    </p>
    <div class="card-container">
      <div class="size-card-container" v-for="size in information.sizeArray" :key="size.title">
        <SizeCard :information="size"></SizeCard>
      </div>
    </div>
  </div>
</template>
<script>
import SizeCard from './SizeCard';

export default {
  name: "ModelCard",
  components: {
    SizeCard
  },
  props:{
    information: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
#ModelCard {
  border: 1px solid #13478E;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 darkgrey;
  min-width: 200px;
  align-self: center;
  margin: 0 auto;
  padding: .3rem;
}
h3 {
  margin: 2rem;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #0D7B35;
}
p {
  margin-left: 2rem;
  margin-right: 2rem;
}
img {
  width: 100%;
  height: auto;
}
.card-container {
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
</style>
