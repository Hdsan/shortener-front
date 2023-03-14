<script setup>
import router from '../router/index'
import AuthController from '../controllers/AuthController'
import SessionController from '../controllers/SessionController'
import ModalRegister from '../components/ModalRegister.vue'
</script>
<template>
    <ModalRegister
    v-if="register" @close="register=false" />
    <v-container class="content">
        <v-row class="default-input">
            <v-text-field v-model="user" name="user" label="Usuário" id="id"></v-text-field>
        </v-row>
        <v-row class="default-input">
            <v-text-field type="password" v-model="pass" name="password" label="Senha" id="id"></v-text-field>
        </v-row>
        <v-row class="default-button">
            <v-btn @click="pushAsLogged" width="100%" color="red">entrar</v-btn>
        </v-row>
        <v-row class="default-button py-5">
            <v-btn @click="pushAsGuest" width="100%" color="grey">entrar como convidado</v-btn>
        </v-row>
        <v-row class="default-button">
            <v-btn @click="register = true" width="100%" color="green">registrar</v-btn>
        </v-row>
    </v-container>
</template>
<script>

export default {
    components: {
    
    'ModalRegister': ModalRegister
  },
    data() {
        return {
            user: '',
            pass: '',
            register:false,
            authController: new AuthController(),
            Session: new SessionController()
        }
    },
 


    methods: {
        async pushAsLogged() {
            try {
                let userLogin = await this.authController.sendLogin(this.user, this.pass)
                if (userLogin) {
                    this.Session.setSession(userLogin);
                    router.push('/home')
                }
                else {
                    alert("Usuário ou senha incorretos")
                }
            }
            catch (err) {
                console.log(err)
            }
        },
        pushAsGuest() {
            try {

                let userLogin = {
                    logged: true,
                    user: null,
                    name: 'Convidado',
                    id: 0,
                }
                this.Session.setSession(userLogin);
                router.push('/home')
            }
            catch (err) {
                console.log(err)
            }
        },
    },
};
</script>
<style scoped></style>
