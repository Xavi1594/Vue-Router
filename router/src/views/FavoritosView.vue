<script setup >
import { storeToRefs } from 'pinia';
import { useFavoritosStore } from '../store/favoritos';

const useFavorito = useFavoritosStore()

const {favoritos} = storeToRefs(useFavorito)
const {remove} = useFavorito
</script>
<template>

       <h2>Favoritos</h2> 
       <p v-if="favoritos.length === 0">Sin favoritos  </p>
   <ul class="list-group" v-else > 
       <li class="list-group-item"
              v-for="poke in favoritos"
              :key="poke.id">
              <div>
                     {{ poke.name }}
              </div>
              <div>
                     <button  class= "btn btn-sm btn-danger" @click="remove(poke.id)">Eliminar</button>
              </div>

       </li>
   </ul>
</template>
<style>
</style>