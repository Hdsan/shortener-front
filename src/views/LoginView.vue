<script setup>
import router from '../router/index'
import AuthController from '../controllers/AuthController'
import SessionController from '../controllers/SessionController'
</script>
<template>
    <v-container class="content">
        <v-row class="default-input">
            <v-text-field v-model="user" name="user" label="Usuário" id="id"></v-text-field>
        </v-row>
        <v-row class="default-input">
            <v-text-field v-model="pass" name="password" label="Senha" id="id"></v-text-field>
        </v-row>
        <v-row class="default-button">
            <v-btn @click="pushAsLogged" width="100%" color="red">entrar</v-btn>
        </v-row>
        <v-row class="half-button pt-5">
            <v-btn @click="pushAsGuest" color="grey">entrar como convidado</v-btn>
        </v-row>
    </v-container>
</template>
<script>

export default {
    data() {
        return {
            user: '',
            pass: '',
            authController: new AuthController(),
            Session : new SessionController()
        }
    },
    created() {
    },


    methods: {
        async pushAsLogged() {
            try {
                let userLogin = await this.authController.sendLogin(this.user, this.pass)
                if (userLogin) {
                    router.push('/home')
                    this.Session.setSession(userLogin);
                }
                else {
                    alert("Usuário ou senha incorretos")
                }
            }
            catch (err) {
                console.log(err)
            }
        },
        pushAsGuest: () => {
            console.log('Text input changed');
        },
    },
};
</script>
<style scoped></style>
