import { createStore } from 'vuex'

export default createStore({
  state: {
    menu: [
      {        
        dish: 'Fried chicken',
        img: 'fried-chicken',
        ingredients:[ 
          { name: 'chicken', quantity: 1 }, 
          { name: 'ketchup', quantity: 1 }, 
        ] 
      },
      { 
        dish: 'Fries with ketchup', 
        img: 'fries-ketchup',
        ingredients:[ 
          { name: 'potato', quantity: 1 }, 
          { name: 'ketchup', quantity: 1 }, 
        ] 
      },
      { 
        dish: 'Chicken salad', 
        img: 'chicken-salad',
        ingredients:[ 
          { name: 'chicken', quantity: 1 }, 
          { name: 'tomato', quantity: 1 }, 
          { name: 'lettuce', quantity: 1 }, 
          { name: 'lemon', quantity: 2 }, 
          { name: 'onion', quantity: 1 }, 
        ] 
      },
      { 
        dish: 'Meat with rice', 
        img: 'meat-rice',
        ingredients:[ 
          { name: 'meat', quantity: 2 }, 
          { name: 'rice', quantity: 1 }, 
        ] 
      },
      { 
        dish: 'Burger', 
        img: 'burger',
        ingredients:[ 
          { name: 'meat', quantity: 1 }, 
          { name: 'tomato', quantity: 1 }, 
          { name: 'lettuce', quantity: 1 }, 
          { name: 'ketchup', quantity: 1 }, 
        ] 
      },
      { 
        dish: 'Sushi', 
        img: 'sushi',
        ingredients:[ 
          { name: 'rice', quantity: 2 }, 
          { name: 'meat', quantity: 1 }, 
          { name: 'cheese', quantity: 1 }, 
        ] 
      },
    ],
    stock: [
      { name: 'tomato', quantity: 5 },
      { name: 'lemon', quantity: 5 },
      { name: 'potato', quantity: 5 },
      { name: 'rice', quantity: 5 },
      { name: 'ketchup', quantity: 5 },
      { name: 'lettuce', quantity: 5 },
      { name: 'onion', quantity: 5 },
      { name: 'cheese', quantity: 5 },
      { name: 'meat', quantity: 5 },
      { name: 'chicken', quantity: 5 },
    ],
    kitchen: [],
    cooking: [],
    history: [],
    shoping: []
  },
  mutations: {
    setKitchen(state, payload){
      state.kitchen.push(payload)
    },
    decreaseStock(state, payload){
      for(let i in payload){
        let index = state.stock.findIndex(ingredient => ingredient.name == payload[i].name)
        state.stock[index].quantity -= payload[i].quantity
      }
    },
    addCooking(state, payload){
      state.cooking.push(payload)
    },
    deleteKitchen(state, payload){
      let i = state.kitchen.findIndex(dish => dish == payload)
      state.kitchen.splice(i, 1);
    },
    deleteCooking(state, payload){
      let i = state.cooking.findIndex(dish => dish == payload)
      state.cooking.splice(i, 1);
    },
    addHistory(state, payload){
      state.history.push(payload)
    },
    addShoping(state, payload){
      if(state.shoping.find(ingredient => ingredient.name == payload.name)){
        let index = state.shoping.findIndex(ingredient => ingredient.name == payload.name)
        state.shoping[index].quantity += payload.quantity 
      }else{
        state.shoping.push(payload)
      }     
    },
    increaseStock(state, payload){
      let index = state.stock.findIndex(ingredient => ingredient.name == payload.name)
      state.stock[index].quantity += payload.quantity
    }
  },
  actions: {
    setKitchen({ commit }, order){      
      commit('setKitchen', order)
    },
    decreaseStock({ commit }, ingredients){
      commit('decreaseStock', ingredients)
    },
    addCooking({ commit }, dish){
      commit('addCooking', dish)
    },
    deleteKitchen({ commit }, dish){
      commit('deleteKitchen', dish)
    },
    deleteCooking({ commit }, dish){
      commit('deleteCooking', dish)
    },
    addHistory({ commit }, dish){
      commit('addHistory', dish)
    },
    async buyIngredients({ commit }, ingredient){
      try {
        const res = await fetch(`https://cors-anywhere.herokuapp.com/https://recruitment.alegra.com/api/farmers-market/buy?ingredient=${ingredient.name}`)
        const data = await res.json();
        console.log(data)
        if(data.quantitySold > 0){
          commit('addShoping', { name: ingredient.name, quantity: data.quantitySold })
          commit('increaseStock', { name: ingredient.name, quantity: data.quantitySold })  
        }      
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
