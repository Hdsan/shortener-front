<script setup>
import router from '../router/index'
import axios from 'axios'
import DefaultTable from '../components/DefaultTable.vue'
import ModalCreation from '../components/ModalCreation.vue'
import SessionController from '../controllers/SessionController'

</script>

<template>
  <div>
    <ModalCreation
     v-if="creationDialog" @close="creationDialog = false" />

    <div class="greet">
      <span>
        Logado como "Usuário"
      </span>
      <span>
        <v-btn color="red">Logout</v-btn>
      </span>
    </div>
    <v-container class="main-content">


      <v-row>
        Urls criadas
      </v-row>
      <v-row style="flex-wrap: nowrap;">

        <v-col>
          <DefaultTable :items="urls" :mutable="true"/>
          
        </v-col>

        <v-col>
          <v-btn @click="creationDialog = true" color="red">CRIAR ENCURTADOR</v-btn>
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {

  components: {
    'DefaultTable': DefaultTable,
    'ModalCreation': ModalCreation
  },
  data() {
    return {
      Session : new SessionController(),
      creationDialog:false,
      urls: ["Google", "Bing", "DuckDuckGo", "Google", "Bing", "DuckDuckGo", "Google", "Bing", "DuckDuckGo", "noen"],
      headers: [
        {
          align: 'start',
          sortable: false,
          title: 'Top 100',
        },
        { title: 'Nome' },
      ],
    }
  },
  methods: {
    openCreationDialog(){
      this.creationDialog = true;
    },
    send: () => {
      axios
        .get("http://localhost:3000/routes")
        .then((resp) => {

          console.log(resp)

        })

    },
    logout(){
      try{
        this.Session.logout();
        router.push('/')
      }
      catch(err){
        console.log(err)
      }
    }
    
  },
};
</script>
<style scoped>
.greet {
  position: fixed;
  top: 4vh;
  z-index: 1;
}

.card-list {
  width: 50vw;
}

.main-content {
  padding-top: 10vh;
}
</style>