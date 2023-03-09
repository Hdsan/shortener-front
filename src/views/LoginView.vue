<script setup>
// import { RouterLink } from 'vue-router'
import router from '../router/index'
</script>
<template>
    <v-container class="content">
        <v-row class="default-input">
            <v-text-field name="user" label="Usuário" id="id"></v-text-field>
        </v-row>
        <v-row class="default-input">
            <v-text-field name="password" label="Senha" id="id"></v-text-field>
        </v-row>
        <v-row class="default-button">
            <v-btn @click="pushAsLogged" width="100%" color="red">entrar</v-btn>
        </v-row>
        <v-row class="half-button pt-5">
            <v-btn @click="pushAsLogged"  color="grey">entrar como convidado</v-btn>
        </v-row>
    </v-container>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        pushAsLogged: () => {
            router.push('/home')
        },
        pushAsGuest: () => {
            console.log('Text input changed');
        },
    },
};
</script>
<style scoped>

</style>
