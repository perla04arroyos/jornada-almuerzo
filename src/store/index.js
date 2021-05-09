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
          { name: 'potato', quantity: 2 }, 
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
      { name: 'potato ', quantity: 5 },
      { name: 'rice', quantity: 5 },
      { name: 'ketchup', quantity: 5 },
      { name: 'lettuce', quantity: 5 },
      { name: 'onion', quantity: 5 },
      { name: 'cheese', quantity: 5 },
      { name: 'meat', quantity: 5 },
      { name: 'chicken', quantity: 5 },
    ],
    shoping: [],
    kitchen:[],
    history: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
