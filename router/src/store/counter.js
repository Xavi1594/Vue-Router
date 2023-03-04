import {defineStore} from 'pinia'
import { ref, computed } from 'vue'


export const useCounterStore = defineStore('counter', () => {

    const increment = () => count.value ++
    const double = computed(() => count.value * 2)

    const count = ref(0)
    return {
count,
increment,
double,

    }
})
