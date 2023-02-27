import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      component: () => import('../views/AboutView.vue'),
      path: '/about',
      name: 'about',
      
    },
    {
      path:"/pokemon",
      name:"pokemons",
      component: () => import("../views/PokemonsView.vue")
    },
      {
        path:"/pokemon/:name",
        name:"poke",
        component: () => import("../views/PokeView.vue")
  
      },
      {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFoundView.vue"),
    },
    

  ],
});

export default router
