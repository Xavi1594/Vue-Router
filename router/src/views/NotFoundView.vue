<script setup>

import {  useRouter } from 'vue-router'
const router = useRouter()
const back = () => {
    router.push('/pokemon')
}

</script>




<template>
   <h1>404</h1> 
   <button @click="back">Volver</button>
</template>