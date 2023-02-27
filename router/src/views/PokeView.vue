<script setup>

import {useGetData} from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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
</div>
    <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>