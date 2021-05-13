<template>
    <div id="menu">
        <div class="boxes">
            <div class="box red"></div>
            <div class="box yellow"></div>
            <div class="box red"></div>
            <div class="box yellow"></div>
            <div class="box red"></div>
            <div class="box yellow"></div>
            <div class="box red"></div>
            <div class="box yellow"></div>
        </div>

        <div class="list content">
            <div 
                v-for="(menu, index) in menu" 
                :key="index" 
                class="menu"
            >
                <p class="menu-label">
                    <img 
                        :src="require('@/assets/img/dishes/' + menu.img + '.png')" 
                        :alt="menu.dish"
                        class="icon"
                    >
                    <span class="name">{{ menu.dish }}</span>                
                </p>
                <ul class="menu-list">
                    <li 
                        v-for="(item, indexItem) in menu.ingredients" 
                        :key="indexItem" 
                        class="item"
                    >
                        <p v-for="i in item.quantity" :key="i">
                            <img 
                                :src="require('@/assets/img/ingredients/' + item.name + '.png')" 
                                :alt="item.name"
                                class="icon"
                            >    
                        </p>                                     
                    </li>
                </ul>
                <hr>
            </div>
        </div>   
    </div>  
</template>

<script>
import {mapState} from 'vuex'
import {} from 'vue'
export default {
    name: 'Menu',
    computed: {
        ...mapState(['menu'])
    },
}
</script>

<style>
#menu{
    border: solid 1px hsl(348, 100%, 61%);
    border-top: none;
    border-radius: 25px;
    width: 320px !important;
    height: 300px;
    box-shadow: -5px 10px 20px 0px rgba(0, 0, 0, 0.2);
    margin: auto;
    margin-top: 20px;
}
.boxes{
    display: flex;
    margin-bottom: 0;    
}
.box{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: -5px 10px 20px 0px rgba(0, 0, 0, 0.1);
    width: 40px;
    height: 60px;
    display: inline;
}
.red{
    background-color: hsl(348, 100%, 61%);
    margin-bottom: 0 !important;
}
.yellow{
    background-color: hsl(48, 100%, 67%); 
    margin-bottom: 0 !important;
}
.list{
    height: 230px;
    padding: 15px;
	overflow-y: scroll;
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
.menu-label{
    display: flex;
    justify-content: center;
}
.name{
    text-transform: capitalize !important; 
    margin-top: 15px;
    margin-left: 5px;
}
.icon{
    width: 40px;
    height: auto;    
}
.content ul {
    margin: 0;
}
ul .item{
    list-style: none;
    display: inline;
}
ul .item p{
    display: inline;
}
</style>
