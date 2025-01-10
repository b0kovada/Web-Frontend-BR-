<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <router-link to="/tasks">Feladatok</router-link>
        <router-link to="/newtask">Új feladat</router-link>
    </nav>
    <router-view />
</template>

<style scoped>
</style>
