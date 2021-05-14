<template>
  <div class="container is-fluid">
    <div class="columns">

      <div class="column is-4">
        <List :title="'Stock'" :array="stock"/>   
      </div>

      <div class="column is-4">
        <div>
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <input 
                  class="input is-warning is-rounded" 
                  type="number" 
                  placeholder="Número de platillos" 
                  v-model.number="orders"
                >  
              </p>
              <p class="control">
                <button 
                  class="button is-danger is-rounded" 
                  :disabled="enableBtn"
                  @click.prevent="order"
                >
                  Order
                </button>
              </p>
            </div>
          </div>
          <Menu />
          <Cocina />
      </div>      
      
      <div class="column is-4">
        <List :title="'shoping'" :array="shoping"/>       
      </div>
    </div>
  </div>     
</template>

<script>
import Menu from './components/Menu.vue'
import Cocina from './components/Cocina.vue'
import List from './components/List.vue'

import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Menu, Cocina, List
  },
  data() {
    return {
      orders: 1,
      contAvailableIngredients: 0,
      interval: null
    }
  },
  computed: {
    ...mapState(['menu','kitchen', 'stock', 'shoping']),
    enableBtn(){
      if(this.orders > 0){
        return false;
      }
      return true;
    }
  },
  methods: {
    ...mapActions(['setKitchen', 'decreaseStock', 'addCooking','deleteKitchen','deleteCooking','addHistory', 'buyIngredients']),
    watch(){
      this.interval = setInterval(() => {
        this.prepare()
      }, 3000)
    },
    order(){
      for (let i = 0; i < this.orders; i++) {
        let dishIndex = Math.floor(Math.random() * this.menu.length)
        this.setKitchen(dishIndex)
      }
    },
    prepare(){
      for(let i in this.kitchen){
        const dishIndex = this.kitchen[i]
        const dish_ingredients = this.menu[dishIndex].ingredients
        
        for(let j in dish_ingredients){ 
          const dish_ingredient = dish_ingredients[j]        
          const inventary_ingredient = this.stock.find(ingredient => ingredient.name == dish_ingredient.name)   

          if(inventary_ingredient.quantity < dish_ingredient.quantity){
            this.buyIngredients({name: dish_ingredient.name, quantity: dish_ingredient.quantity}) 
          }else{
            this.contAvailableIngredients++
          }
        }

        if(dish_ingredients.length == this.contAvailableIngredients){
          this.addCooking(dishIndex)    
          this.decreaseStock(dish_ingredients)      
          setTimeout(() => this.deleteKitchen(dishIndex), 900)
          setTimeout(() => this.deleteCooking(dishIndex), 1100)
          setTimeout(() => this.addHistory(dishIndex), 1200)    
        }
        this.contAvailableIngredients = 0
      }
    }
  },
  beforeUnmount () {
    clearInterval(this.interval)
  },
  created () {
    this.watch()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
</style>