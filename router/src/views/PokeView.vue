<script setup>

import {useGetData} from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router'
import { useFavoritosStore } from '../store/favoritos';

const route = useRoute()
const router = useRouter()
const useFavoritos = useFavoritosStore()
const {add, findPoke} = useFavoritos

const {getData, data, loading, errorData} = useGetData();
const back = () => {
    router.push('/pokemon')
}

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>


<template>
     <p v-if="loading">CARGANDO INFO...</p>
     <div class="alert alert-danger" v-if="errorData">No hay pokemons que mostrar</div>
    <div v-if="data">
    <img :src="data.sprites?.front_default" />
    <h1>Poke name : {{ $route.params.name }} </h1>
    <button  
     :disabled="findPoke(data.name)"
      class="btn btn-primary mb-2"
       @click="add(data)">
       Agregar favoritos
    </button>
</div>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>