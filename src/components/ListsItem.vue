<template>
  <div class="item"
       v-on:click="elemID"
  ><p>
    {{realtitem.tp}}
  </p></div>

</template>

<script>
export default {
  name: 'ListsItem',
  props: {
    realtitem:{
      type: Object,
      requered: true,
    },

  },
  data(){
    return {
    }
  },
  methods: {
    elemID(){
      this.$store.state.massivelist = [...this.$store.state.realtlist];
      this.$store.state.elem2 = this.realtitem.vd;
      this.$store.state.elem = this.realtitem.id;
      console.log(this.$store.state.elem2);
      console.log(this.$store.state.elem);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.firstcolumn{
  border: 2px solid;
  font-size: 1rem;
  font-weight: bold;
}
.secoundcolumn{
  border: 2px solid;
  font-size: 1rem;
  font-weight: bold;
}
.item{
 border: 4px solid;
  font-size: 1rem;
  font-weight: bold;
}
.item:hover{
  color: #0085D1 !important;
}
p{

}

</style>
