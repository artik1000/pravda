import { createStore } from 'vuex'

export default createStore({

  state: {
    elem:0,
    elem2: 'Риелторские услуги',
    update: true,
    realtlist:[
      {id:0,vd:'Риелторские услуги',tp: 'Покупка',completed: false},
      {id:1,vd:'Риелторские услуги',tp: 'Продажа',completed: false},
      {id:2,vd:'Риелторские услуги',tp: 'Аренда',completed: false},
      {id:3,vd:'Риелторские услуги',tp: 'Сопровождение',completed: false},
      {id:4,vd:'Риелторские услуги',tp: 'Ипотека',completed: false},
      {id:5,vd:'Риелторские услуги',tp: 'Новостройки',completed: false},
      {id:6,vd:'Риелторские услуги',tp: 'Комерческая недвижимость',completed: false},
      {id:7,vd:'Риелторские услуги',tp: 'Дома с землей',completed: false},
    ],
    lawlist:[
      {id:0,vd:'Юридические услуги',tp: 'Гражданские споры',completed: false},
      {id:1,vd:'Юридические услуги',tp: 'Земельные споры',completed: false},
      {id:2,vd:'Юридические услуги',tp: 'Жилищные споры',completed: false},
      {id:3,vd:'Юридические услуги',tp: 'Наследственные споры',completed: false},
      {id:4,vd:'Юридические услуги',tp: 'Корпоративные споры',completed: false},
      {id:5,vd:'Юридические услуги',tp: 'Банкротство',completed: false},
      {id:6,vd:'Юридические услуги',tp: 'Правовое сопровождение',completed: false},
      {id:7,vd:'Юридические услуги',tp: 'Судебное сопровождение',completed: false},
    ],
    massivelist:[
      {id:0,vd:'Риелторские услуги',tp: 'Покупка',completed: true},
      {id:1,vd:'Риелторские услуги',tp: 'Продажа',completed: false},
      {id:2,vd:'Риелторские услуги',tp: 'Аренда',completed: false},
      {id:3,vd:'Риелторские услуги',tp: 'Сопровождение',completed: false},
      {id:4,vd:'Риелторские услуги',tp: 'Ипотека',completed: false},
      {id:5,vd:'Риелторские услуги',tp: 'Новостройки',completed: false},
      {id:6,vd:'Риелторские услуги',tp: 'Комерческая недвижимость',completed: false},
      {id:7,vd:'Риелторские услуги',tp: 'Дома с землей',completed: false},
    ],
  },
  getters:{

  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
