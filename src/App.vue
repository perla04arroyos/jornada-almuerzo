<template>
  <!--<p class="subtitle">
    Jornada de Almuerzo ¡<strong>gratis</strong>!
  </p>-->
<div class="container is-fluid">
  <div class="columns">

    <div class="column is-4">
      <Table :title="'Stock'" :array="stock"/>   
    </div>

    <div class="column is-4">

      <div>
          <div class="field is-grouped is-grouped-centered">
            <!--<p class="control">
              <input 
                class="input is-warning is-rounded" 
                type="number" 
                placeholder="Número de platillos" 
                v-model.number="orders"
              >  
            </p>-->
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
      <Table :title="'shoping'" :array="shoping"/>   
        
    </div>
  </div>
</div>     
</template>

<script>
import Menu from './components/Menu.vue'
import Cocina from './components/Cocina.vue'
import Table from './components/Table.vue'


import {mapState, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    Menu, Cocina, Table
  },
  data() {
    return {
      orders: 1
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
    ...mapActions(['setKitchen', 'decreaseStock', 'addCooking','deleteKitchen','deleteCooking','addHistory', 'buyIngredients','addShoping','increaseStock']),
    order(){
      //for (let i = 0; i < this.orders; i++) {
        let dishIndex = Math.floor(Math.random() * this.menu.length)
        let dish_ingredients = this.menu[dishIndex].ingredients
        this.setKitchen(dishIndex)
        
        let cont = 0
        for(let j in dish_ingredients){ 
          let dish_ingredient = dish_ingredients[j]        
          let inventary_ingredient = this.stock.find(ingredient => ingredient.name == dish_ingredient.name)   

          if(inventary_ingredient.quantity < dish_ingredient.quantity){
            this.buy({name: dish_ingredient.name, quantity: dish_ingredient.quantity})
            cont++
          }else{
            cont++
          }
          //this.decreaseStock(dish_ingredient)        
        }

        if(dish_ingredients.length == cont){
          this.addCooking(dishIndex)    
          this.decreaseStock(dish_ingredients)      
          setTimeout(() => this.deleteKitchen(dishIndex), 900)
          setTimeout(() => this.deleteCooking(dishIndex), 1100)
          setTimeout(() => this.addHistory(dishIndex), 1200)
        }
      //}
    },
    async buy(ingredient){ 
        try {
          const res = await fetch(`https://cors-anywhere.herokuapp.com/https://recruitment.alegra.com/api/farmers-market/buy?ingredient=${ingredient.name}`)
          const data = await res.json();

          console.log(data.quantitySold)
          if(data.quantitySold > 0){
            this.addShoping({ name: ingredient.name, quantity: data.quantitySold })
            this.increaseStock({ name: ingredient.name, quantity: data.quantitySold })
          }
        } catch (error) {
          console.log(error)
        }

        /*const index = this.stock.findIndex(ingredient_inventary => ingredient_inventary.name == ingredient.name)       
        if(this.stock[index].quantity < ingredient.quantity){
          //this.buy(ingredient)
          console.log("no cocinar")
        }*/
    }
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