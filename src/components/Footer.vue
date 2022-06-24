<template>
  <div class="area">
    <div class="item"><p>ООО Центр права и недвижимости Правда</p></div>
    <div ><p>ОГРН 1211600070131</p></div>
    <div ><p>📞 8 (843) 2 060 757</p></div>
    <div><p>📍 пр-т. Хусаина Ямашева, 36, 419 офис; 4 этаж Казань Респ. Татарстан 420044</p></div>
    <div ><p>🕗 Пн - пт 9:00 - 18:00</p></div>
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
@media screen and (max-width : 2444px) {
  .area{
    width: 100vw;
    height: max-content;
    background-color: #eee;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .item{
    margin-top: 2%;
  }
  p{
    margin-top: 0;
    margin-left: 2%;
    text-align: left;
    font-size: 10pt;
  }
}
@media screen and (max-width : 1024px) {
  .area{
    width: 100vw;
    height: max-content;
    background-color: #eee;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .item{
    margin-top: 2%;
  }
  p{
    margin-top: 0;
    margin-left: 2%;
    text-align: left;
    font-size: 10pt;
  }
}
@media screen and (max-width : 539px) {
  .area{
    width: 100vw;
    height: max-content;
    background-color: #eee;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .item{
    margin-top: 5%;
  }
  p{
    margin-top: 0;
    margin-left: 2%;
    text-align: left;
    font-size: 8pt;
  }
}

</style>
