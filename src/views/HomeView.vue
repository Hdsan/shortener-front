<script setup>
// import router from '../router/index'
</script>

<template>
  <div>

    <div class="greet">
      Logado como "Usuário"
    </div>
    <v-container class="main-content">


      <v-row>
        Top 10 Urls mais visitadas
      </v-row>
      <v-row style="flex-wrap: nowrap;">

        <v-col>
          <v-card class="mx-auto card-list" max-width="600">
            <v-list :items="urls"></v-list>
          </v-card>
        </v-col>

        <v-col>
          <v-btn color="red">CRIAR ENCURTADOR</v-btn>
        </v-col>
        <!-- <v-progress-circular indeterminate :size="63" :width="7"></v-progress-circular> -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      urls: ["Google", "Bing", "DuckDuckGo", "Google", "Bing", "DuckDuckGo", "Google", "Bing", "DuckDuckGo", "noen"]

    }
  },
  methods: {
    pushAsLogged: () => {

    },
    pushAsGuest: () => {
      console.log('Text input changed');
    },
  },
};
</script>
<style scoped>
.greet {
  position: fixed;
  top: 4vh;
  color: white;
}

.card-list {
  width: 50vw;
}
.main-content{
  padding-top: 10vh;
}
</style>>