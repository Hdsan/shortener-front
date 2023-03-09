<script setup>
import {RouterView } from 'vue-router'
// import Login from './views/LoginView.vue'
</script>

<template>

  <RouterView/>
  <!-- <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink> -->
      
</template>

<style scoped>


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


}
</style>
