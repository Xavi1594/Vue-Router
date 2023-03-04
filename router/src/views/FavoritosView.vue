<script setup >
import { storeToRefs } from 'pinia';
import { useFavoritosStore } from '../store/favoritos';
import { useRouter, useRoute, RouterLink } from 'vue-router';

const useFavorito = useFavoritosStore()


const {favoritos} = storeToRefs(useFavorito)
const {remove} = useFavorito

</script>
<template>

       <h2>Favoritos</h2> 
       <p v-if="favoritos.length === 0">Sin favoritos</p>
   <ul class="list-group" v-else > 
       <li class="list-group-item"
              v-for="poke in favoritos"
              :key="poke.id">
              <div>
                     {{ poke.name }}
              </div>
              <div>
                     <router-link
                      class= "btn btn-sm btn-primary me-2"
                       :to="`/pokemon/${poke.name}`"
                       >Más info</router-link>

                     <button  class= "btn btn-sm btn-danger" @click="remove(poke.id)">Eliminar</button>
              </div>

       </li>
   </ul>
</template>
<style>
</style>