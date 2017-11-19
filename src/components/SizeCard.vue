<template>
  <div id="SizeCard">
    <h4>{{information.title}}</h4>
    <p>
      Width: {{information.width}}
      Length: {{information.length}}
    </p>
  </div>
</template>
<script>
export default {
  name: "SizeCard",
  props: {
    information: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
#SizeCard {
  border: 2px solid #0D7B35;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 darkgrey;
}
h4 {
  margin: 2rem;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #9B0D0D;
}
p {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>
