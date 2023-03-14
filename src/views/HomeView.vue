<script setup>
import router from '../router/index'
import DefaultTable from '../components/DefaultTable.vue'
import ModalCreation from '../components/ModalCreation.vue'
import SessionController from '../controllers/SessionController'
import UrlController from '../controllers/UrlController'
</script>

<template>
  <div>
    <ModalCreation
     v-if="creationDialog" @close="closeAndRefresh" />

    <div class="greet">
      <span>
        Logado como
      </span>
      <span class="pr-6">
        {{ User.name }}
      </span>
      <span>
        <v-btn @click="logout" color="red">Logout</v-btn>
      </span>
    </div>


    <v-container class="main-content">

      <v-row style="flex-wrap: nowrap;">

        <v-col>
          <v-tabs color="red-accent-4" align-tabs="center" v-model="tab" bg-color="white">
            <v-tab :value="1" @click="getUserUrls">Minhas Urls</v-tab>
            <v-tab :value="2" @click="getTopUrls" >Urls mais visitadas</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item :value="1" >
              <DefaultTable :items="myUrls" :mutable="true" @update="getUserUrls" />
            </v-window-item>
            <v-window-item :value="2" >
              <DefaultTable :items="topUrls" :mutable="false" @update="getTopUrls" />
            </v-window-item>
          </v-window>

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
      Session: new SessionController(),
      UrlController: new UrlController(),
      tab: null,
      User: {
        user: null,
        name: null,
        id: null
      },
      creationDialog: false,
      myUrls: [],
      topUrls: [],
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
  async created() {
    this.User = await this.Session.getSession();
    console.log(this.User)
    if(!this.User ){
      router.push("/")
    }
    this.getUserUrls();
    this.getTopUrls();
  },
  methods: {
    closeAndRefresh(){
      this.creationDialog = false
      this.getUserUrls()
      this.getTopUrls() 
    },
    async getUserUrls() {
      this.myUrls = await this.UrlController.getAllFromUser(this.User.userId);
    },
    async getTopUrls() {
      this.topUrls = await this.UrlController.getAll();
    },
    openCreationDialog() {
      this.creationDialog = true;
    },
    
    logout() {
      try {
        this.Session.logout();
        router.push('/')
      }
      catch (err) {
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
  padding-top: 18vh;
}
</style>