<template>
  <div class="description">
    <p>{{ msg }}</p>

  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .description{
    width: 100vw;
    background-color: white;
    color: #1c4ba5;
  }
  p{
    font-size: 2rem;
    text-align: center;
    font-weight: bold;
  }

@media screen and (max-width : 1024px) {
  .description{
    width: 100vw;
    height: max-content;
    background-color: white;
    color: #1c4ba5;
  }
  p{
    
    margin-bottom: 5%;
    font-size: 2.5rem;
    text-align: center;
  }
}
@media screen and (max-width : 540px) {
  .description{
    width: 100vw;
    height: max-content;
    background-color: white;
    color: #1c4ba5;
    padding-bottom:5%;
    padding-top:5%;
  }
  p{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
