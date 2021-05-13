<template>
  <div id="kitchen"> 
    <ul id="list-orders">
      <li v-for="i in kitchen" :key="i">
        <img 
          :src="require('@/assets/img/dishes/' + menu[i].img + '.png')" 
          :alt="menu[i].dish"
          class="icon"
        >
      </li>
    </ul>

    <ul id="cooking">
      <li v-for="i in cooking" :key="i">
        <img 
          :src="require('@/assets/img/dishes/' + menu[i].img + '.png')" 
          :alt="menu[i].dish"
          class="icon"
        >
      </li>
    </ul>

    <ul id="list-history">
      <li v-for="i in history" :key="i">
        <img 
          :src="require('@/assets/img/dishes/' + menu[i].img + '.png')" 
          :alt="menu[i].dish"
          class="icon"
        >
      </li>
    </ul>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Cocina',
    computed: {
        ...mapState(['menu','kitchen','cooking','history'])
    },
}
</script>

<style>
  #kitchen{
    text-align: left;
    margin-top: 40px;
  }
  #list-orders{
    text-align: center;
    height: 300px;
    width: 15%;
    border-left: solid 1px hsl(348, 100%, 61%);
	  overflow-y: scroll;

    display:inline;
    float:left;
  }

  ::-webkit-scrollbar {
    width:2px;
  }
  ::-webkit-scrollbar-track {
    background: hsl(348, 100%, 61%,0.1); 
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(348, 100%, 61%,1); 
  }
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(348, 100%, 61%,1.5); 
  }
  #cooking{
    width: 70%;
    height: 300px;

    display:inline;
  }
  #list-history{
    text-align: center;
    height: 300px;
    width: 15%;
    border-left: solid 1px hsl(348, 100%, 61%);
	  overflow-y: scroll;

    display:inline;
    float:right;
  }
</style>