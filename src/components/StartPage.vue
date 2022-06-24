<template>

  <div class="StarterPage">
    <Contacts
    />
    <div class="startitems">
    <div class="textarea">

    <div class="textgroup">

      <div class="textbig"> {{ msg }}</div>
      <div class="textsmall"> Центр права и недвижимости </div>
    </div>
    </div>

   <Form class="formmain" />


  </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Contacts from '@/components/Contacts.vue'
export default {
  name: 'StartPage',
  components:{
    Form,
    Contacts
  },
  props: {
    msg: String,
  },
  data() {
    return {
    }
  },
  methods: {
  showC(){
    this.$emit('ShowContacts')
  }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .startitems{
    display: flex;
    flex-direction: row;
    margin-top: 5%;
    margin-left: 5%;
  }
  p {
    margin: 0;
    text-align: left;
  }

  .StarterPage {
    width: 100vw;
    height: max-content;
    padding-bottom: 2%;
    background-color: #1c4ba5;
    color: white;
    margin: 0;
  }

  .textarea {
    width: 50%;
    align-content: flex-start
  }

  .textgroup {
    text-align: left;
    padding: 0;
    display: flex;
    flex-direction: column;

  }

  .textbig {
    font-size: 12vw;
    font-weight: bold;
  }

  .textsmall {
    font-size: 2.5vw;
    font-weight: bold;
    margin-left: 2%;
    margin-top: -50px;
  }

  .formmain{
    margin-left: 10%;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 40vw;
    float: right;
    padding: 2%;
    background: white;
  }


@media screen and (max-width : 1024px) {
  p{
    margin: 0;
    text-align: left;
  }

  .StarterPage{
    width: 100vw;
    height: min-content;
    background-color: #1c4ba5;
    color: white;
  }
  .textarea{
    width: 100%;
  }
  .textgroup{
    text-align: center;
  }
  .textbig {
    font-size: 20vw;
    font-weight: bold;
  }
  .textsmall{
    font-size: 4.2vw;
    font-weight: bold;
    margin-left: 1%;
    margin-top: -4vh;
  }
  .startitems{
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
  .formmain{
    margin-left: 18%;
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 60vw;
    padding: 2%;
    background: white;
  }


}
@media screen and (max-width : 539px) {
  p{
    margin: 0;
    text-align: center;
  }

  .StarterPage{
    width: 100vw;
    height: max-content;
    padding-bottom: 10%;
    background-color: #1c4ba5;
    color: white;
    margin: 0;
  }

  .textarea{
    margin-left: 0;
  }
  .textgroup{
    text-align: center;
  }
  .textbig {
    font-size: 25vw;
    font-weight: bold;
  }
  .textsmall{
    font-size: 5.3vw;
    font-weight: bold;
    margin-left: 1%;
  }
  .startitems{
    display: flex;
    flex-direction: column;
    margin-left: 0;
  }
  .formmain{
    margin-left: 10%;
    margin-top: 3vw;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 76vw;
    padding: 2%;
    background: white;
  }
}

.contacts{
  display: block;
  float: right;
  padding: 5%;
  height: 50px;
  width: 50px;
  font-weight: 900;
}
.contacts:hover{
  fill: #0085D1;
}
</style>
