<template>
  <div class="flex-back">

    <StartPage msg="Pravda"
               class="listspoint"
    />

    <Description
        v-on:click="scrollToElement2"
        style="z-index: 999;"
        msg="Подробнее о наших услугах"/>

    <Lists
        v-on:click="scrollToElement"
        class="listspoint2"

        style="z-index: 999;"
    />
    <Description msg="О компании"/>
    <SwiperSlider
     style="width: 100vw;"
    />





    <Description
        style="z-index: 999;
        background-color: #1c4ba5 !important;
        color: white !important;
"
        msg="Мы находимся здесь"

    />

    <div
        style="z-index: 999;"
        class="gmap">

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8964.022053087494!2d49.1035852!3d55.8278636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0f3987b4e481270!2sPravda!5e0!3m2!1sru!2sru!4v1640068843511!5m2!1sru!2sru" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

    </div>

    <Footer
        style="z-index: 999;"
    />
  </div>
</template>

<script>
import StartPage from './components/StartPage.vue'
import Description from './components/Description.vue'
import Lists from './components/Lists.vue'

import Footer from './components/Footer.vue'
import SwiperSlider from './components/SwiperSlider.vue'

export default {
  name: 'App',
  data(){

   return {
     realtlist:[
       {id:0,type:'Риелторские услуги',title: 'Покупка',completed: false},
       {id:1,type:'Риелторские услуги',title: 'Продажа',completed: false},
       {id:2,type:'Риелторские услуги',title: 'Аренда',completed: false},
       {id:3,type:'Риелторские услуги',title: 'Сопровождение',completed: false},
       {id:4,type:'Риелторские услуги',title: 'Ипотека',completed: false},
       {id:5,type:'Риелторские услуги',title: 'Новостройки',completed: false},
       {id:6,type:'Риелторские услуги',title: 'Комерческая недвижимость',completed: false},
       {id:7,type:'Риелторские услуги',title: 'Дома с землей',completed: false},
     ],
     lawlist:[
       {id:0,type:'Юридические услуги',title: 'Гражданские споры',completed: false},
       {id:1,type:'Юридические услуги',title: 'Земельные споры',completed: false},
       {id:2,type:'Юридические услуги',title: 'Жилищные споры',completed: false},
       {id:3,type:'Юридические услуги',title: 'Наследственные споры',completed: false},
       {id:4,type:'Юридические услуги',title: 'Корпоративные споры',completed: false},
       {id:5,type:'Юридические услуги',title: 'Банкротство',completed: false},
       {id:6,type:'Юридические услуги',title: 'Правовое сопровождение',completed: false},
       {id:7,type:'Юридические услуги',title: 'Судебное сопровождение',completed: false},
     ],
     massivelist:[],
     showModal: false,
     viduslugi: '',
     isHidden: false,
   }
  },

  methods: {
    toggleButtonHandler() {
      this.showModal = !this.showModal
    },
    ShowContacts(){
    this.isHidden = !this.isHidden
    },
    viduslugichange1(){
      this.viduslugi = 'Риэлторские услуги';
      this.massivelist = [...this.realtlist];
    },
    viduslugichange2(){
      this.viduslugi = 'Юридические услуги'
      this.massivelist = [...this.lawlist];
    },
    onStep1Update (newData) {
      if (newData[0] === 'Риэлторские услуги'){
        console.log(this.viduslugi)
        this.massivelist = [...this.$store.state.realtlist]
       }else if (newData[0] === 'Юридические услуги'){
        console.log(this.viduslugi)
        this.massivelist = [...this.$store.state.lawlist]
      }
    },
    scrollToElement() {
      const el = this.$el.getElementsByClassName('listspoint')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
   scrollToElement2() {
      const el = this.$el.getElementsByClassName('listspoint2')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  },

  components: {
    StartPage,
    Description,
    Lists,

    Footer,
    SwiperSlider,
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
}
body{
  background: white;
}

.flex-back {
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100vw;
}
.gmap{
  height: 80vh;
  width: 100vw;
}
.gmaptext{
  width: 100vw;
  height: 10vh;
  background-color: white;
  color: #1c4ba5;
}
.gmaptextp{
  margin-top: 5%;
  font-size: 30px;
  text-align: center;
}
.modalisfalse{
  display: none;
}
.modalistrue{
  display: block;
}
</style>
