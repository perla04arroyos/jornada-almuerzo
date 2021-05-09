<template>
  <section class="section">
    <div class="container">
      <!--<p class="subtitle">
        Jornada de Almuerzo ¡<strong>gratis</strong>!
      </p>-->

      <div class="columns">
        <div class="column">
            <div>
              <div class="field is-grouped is-grouped-centered">
                <p class="control">
                  <input 
                    class="input is-warning is-rounded" 
                    type="number" 
                    placeholder="Número de platillos" 
                    v-model="numOrdenes"
                  >  
                </p>
                <p class="control">
                  <button 
                    class="button is-danger is-rounded" 
                    :disabled="enableBtn"
                  >
                    Ordenar
                  </button>
                </p>
              </div>
            </div>

            <Menu />
        </div>

        <div class="column">
          
        </div>
      </div>     
    </div>

    <div class="columns">
      <div class="column">
         
      </div>
      <div class="column">
        
      </div> 
      <div class="column">
        
      </div> 
    </div>

  </section>
</template>

<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu
  },
  data() {
    return {
      numOrdenes: 1
    }
  },
  computed: {
    enableBtn(){
      if(this.numOrdenes > 0){
        return false;
      }
      return true;
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
}

</style>


// colors
// red: #c80003
// salmon: #ff955f
// light-green: #a6c64c
// tree-green: #405d3a
// light-blue: #86c6be
