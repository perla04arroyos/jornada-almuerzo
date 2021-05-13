<template>
    <div id="stock">
        <p class="menu-label title">{{ title }}</p>
        <div class="lista">
        <ul v-for="(item, index) in array" :key="index" >
            <p class="menu-label subtitle">{{ item.name }} -  {{ item.quantity }}</p>
            <li class="item">   
                <p v-for="i in item.quantity" :key="i">
                    <img 
                        :src="require('@/assets/img/ingredients/' + item.name + '.png')" 
                        :alt="item.name"
                        class="icon"
                    >    
                </p>   
                <hr> 
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Table',
    props: {
        title: String, array: Array
    }
}
</script>

<style>
    #stock{
        text-align: center;
        height: 680px;
        border: solid 1px hsl(348, 100%, 61%);
        border-radius:  5px;
        width: 320px !important;
        margin: auto;
    }
    .lista{
        overflow-y: scroll;
        height: 600px;
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
    #stock ul .item{
        list-style: none;
        display: inline !important;
    }
    
    #stock ul .item p{
        display: inline;
    }

    #stock .title{
        border-bottom: solid 1px hsl(348, 100%, 61%);
        padding: 20px;
    }
    #stock .subtitle{
        text-transform: capitalize;
    }
    

</style>