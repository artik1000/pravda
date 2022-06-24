<template>

  <swiper :style="{'--swiper-navigation-color': 'white','--swiper-pagination-color': 'white'}" :speed="600" :parallax="true"
          :navigation="true"
          :pagination='{"clickable": true}'
          class="mySwiper">
    <div  class="parallax-bg"  data-swiper-parallax="-23%"></div>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-300"></div>
      <div class="subtitle" data-swiper-parallax="-200"></div>
      <div class="text" data-swiper-parallax="-100">
        <p>Центр права и недвижимости «Правда» одна из немногих организаций в Республике Татарстан, которая оказывает юридические и риелторские услуги.
        </p>
      </div>
    </swiper-slide><swiper-slide>
    <div class="title" data-swiper-parallax="-300"></div>
    <div class="subtitle" data-swiper-parallax="-200"></div>
    <div class="text" data-swiper-parallax="-100">
      <p>Центр права и недвижимости «Правда» - это зарекомендовавшая себя компания, оказывающая высококвалифицированную помощь в различных областях права организациям и гражданам (от консультации – до абонентского обслуживания).
        Также мы оказываем полный спектр услуг на рынке недвижимости: покупка и продажа недвижимости, аренда недвижимости, ипотека, сопровождение сделок с недвижимостью.
      </p>
    </div>
  </swiper-slide><swiper-slide>
    <div class="title" data-swiper-parallax="-300"></div>
    <div class="subtitle" data-swiper-parallax="-200"></div>
    <div class="text" data-swiper-parallax="-100">
      <p>К работе «Центра» привлечены юристы и адвокаты, специализирующиеся в различных отраслях права, а также квалицированные риэлторы. Годами накопленный опыт, позволяет нам оптимально быстро находить пути решения сложных вопросов клиентов, добиваясь положительного результата. </p>
    </div>
  </swiper-slide><swiper-slide>
    <div class="title" data-swiper-parallax="-300"></div>
    <div class="subtitle" data-swiper-parallax="-200"></div>
    <div class="text" data-swiper-parallax="-100">
      <p>Мы постоянно повышаем квалификацию и совершенствуем стандарты обслуживания, что позволяет нам конкурировать на рынке оказания юридических и риелторских услуг.</p>
    </div>
  </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import "swiper/swiper.scss";

import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"

import '../style.css';


// import Swiper core and required modules
import SwiperCore, {
  Parallax,Pagination,Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {


    };
  },
  methods: {

  }

}
</script>