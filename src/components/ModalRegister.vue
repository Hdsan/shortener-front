<script setup>
import UserController from '../controllers/AuthController'
</script>
<template>
 
    <v-dialog  id="dialog" v-model="open" persistent width="50%">
      <v-card theme="high-contrast">
        <v-card-title>Registrar</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <div>
            <v-text-field v-model="User.user" label="Usuário"></v-text-field>
          </div>
          <div>
            <v-text-field v-model="User.name" label="Nome"></v-text-field>
          </div>
          <div>
            <v-text-field type="password" v-model="User.password" label="Senha"></v-text-field>
          </div>



        </v-card-text>
        <v-row class="mb-0">
          <v-col>
            <v-btn width="100%" variant="tonal" color="red" @click="this.$emit('close')">
            Cancelar
          </v-btn>
          </v-col>
          <v-col>
            <v-btn width="100%" variant="tonal" color="green" @click="create">
            Cadastrar
          </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
 
</template>
<script>
export default {
  data() {
    return {  
      open:true, 
      UserController: new UserController(),
      User: {
        name: "",
        user: "",
        password: ""
      }
    }
  },
  methods: {
    async create() {
     
      try {
        await this.UserController.createUser(this.User);
        alert("Usuário criado")
        this.$emit('close')
      }
      catch (err) {
        console.log(err)
      }

    }
  },
}
</script>
<style>
#dialog {
  position: fixed
}
</style>