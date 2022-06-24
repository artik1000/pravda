<template>
    <form
        style="-webkit-appearance: none;"
        onsubmit="return false"
    >

      <label for="name">Фио</label>
    <input
        id="name"
        type="text"
        v-model.trim="formdata.name"
        required
    >

      <label for="vd">Вид услуги</label>
    <select
        id="vd"
        name="vd"
        v-model.trim="formdata.vd"
        v-on:change="vid"
        required
    >
        <option
             v-for:="(vd, index) in vidy"
             :value="vd.label"
             :key="index"
        >

           {{vd.label}}

        </option>
    </select>

      <label for="tp">Тип Услуги</label>
    <select
        value="this.$store.state.massivelist[this.$store.state.elem].vd"
        id="tp"
        name="tp"
        v-model.trim="formdata.tp"
        required
    >
       <option
           v-for:="(tp, index) in this.$store.state.massivelist"
           :value="tp.tp"
           :key="index"
       >
        {{tp.tp}}
       </option>
    </select>

      <label for="email">Почта</label>
    <input
        id="email"
        name="email"
        
        v-model.trim="formdata.email"
        required

    >

      <label for="tel" type="tel" name="tel">Телефон</label>
    <input
        id="tel"
        name="tel"
        pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
        v-model.trim="formdata.tel"
        required
    >
<button
v-on:click="postRequest"
>Отправить заявку</button>
    </form>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name: 'Form',
  props: {

  },
  beforeMount(){
  return{
 }
  },
  data() {

    return {

      formdata: {
        name: '',
        vd: this.$store.state.elem2,
        tp: this.$store.state.massivelist[this.$store.state.elem].tp,
        email: '',
        tel: '+7',
      },

      vidy: [
        {
          label: 'Риелторские услуги',
          value: 'realt',
        },
        {
          label: 'Юридические услуги',
          value: 'law',
        },
      ],

      val:'Продажа',
    }
    },

  methods: {
     postRequest() {
      axios({
          method: 'post',
          url: 'https://pravda116.ru:3000/',
          data: {
            name: this.formdata.name,
            vd:this.formdata.vd,
            tp:this.formdata.tp,
            email:this.formdata.email,
            tel:this.formdata.tel,
          },
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(function(response) {
          console.log('Ответ сервера успешно получен!');
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });

    },
    vid(){
      if (this.formdata.vd == 'Риелторские услуги'){
       this.$store.state.massivelist = [...this.$store.state.realtlist];
       this.formdata.tp = this.$store.state.massivelist[this.$store.state.elem].tp;
       this.$store.state.elem2 = this.formdata.vd;
      } else if (this.formdata.vd == 'Юридические услуги'){
        this.$store.state.massivelist = [...this.$store.state.lawlist];
        this.$store.state.elem2 = this.formdata.vd;
        this.formdata.tp = this.$store.state.massivelist[this.$store.state.elem].tp;
      }
    }
    },

    computed:{
      ...mapState(['elem'],['elem2'])
    },
    mounted: function () {
      this.$store.watch(
          (state) => state.elem2,
          (newValue) => {
            this.formdata.vd = newValue;
            this.formdata.tp = this.$store.state.massivelist[this.$store.state.elem].tp;
          })
      this.$store.watch(
          (state) => state.elem,
          (newValue) => {
            this.formdata.vd = this.$store.state.elem2;
            this.formdata.tp = this.$store.state.massivelist[newValue].tp;
          })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  label {
    margin-top: 1.5%;
    margin-bottom: 1.5%;
    text-align: left;
    margin-left: 5%;
    color: gray;
    font-size: 0.9rem;
  }

  input {
    -webkit-appearance: none;
    height: 5vh;
    border: 10px;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 1px 1px 1px rgba(196, 196, 196, 69%);
    box-shadow: 0px 1px 1px 1px rgba(196, 196, 196, 69%);
    font-size: 1.1rem;
    padding-left: 5%;
  }

  select {
    -webkit-appearance: none;
    height: 5vh;
    border: 10px;
    border-radius: 0.5rem;
    -webkit-box-shadow: 0px 1px 1px 1px rgba(196, 196, 196, 0.69);
    box-shadow: 0px 1px 1px 1px rgba(196, 196, 196, 0.69);
    font-size: 1.1rem;
    padding-left: 5%;
    padding-right: 5%;
    background: white !important;
    background-color: white !important;
  }

  button {
    margin-top: 5vh;
    background:linear-gradient(to bottom, #1c4ca5 5%, #0416ba 100%);
    color: white;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    float: right;
    font-size: 1.1rem;
    padding-top: 2.7%;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 2.7%;
  }
  button:hover{
    background:white;
    color: #1c4ba5;
    box-shadow:inset 0px 0px 15px 3px #abbbd6;
  }

@media screen and (max-width : 1024px) {
select{
font-size: 1.5rem;
}
input{
font-size: 1.5rem;
}
label{
font-size: 1rem;
}
button{
font-size: 1.5rem;
}

}
@media screen and (max-width : 539px) {
select{
font-size: 1rem;
}
input{
font-size: 1rem;
}
label{
font-size: 0.8rem;
}
button{
font-size: 1rem;
}
}
</style>
