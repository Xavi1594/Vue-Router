<script setup>
import { useCounterStore } from '../store/counter';

const useCounter = useCounterStore()
</script>

<template>
<h2>Pokemon</h2>
<img class="pokemon" src="../assets/SI_Pokemon.jpg" alt="">
</template>
<style>

.pokemon{
    margin: 0 auto;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;

}
</style>