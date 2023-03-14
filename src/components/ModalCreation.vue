<script setup>
import SessionController from '../controllers/SessionController'
import UrlController from '../controllers/UrlController'
</script>
<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent width="50%">
      <v-card theme="high-contrast">
        <v-card-title>Nova URL</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px">
          <div>
            <v-text-field v-model="url.title" name="name" label="Titulo" placeholder=""></v-text-field>
          </div>
          <div>
            <v-text-field v-model="url.origin" name="name" label="Url original" placeholder="www.url-original.com"
              id="id"></v-text-field>
          </div>
          <div>
            URL gerada
          </div>
          <div v-if="created" class="pl-3 pt-3 ">
            {{ host }}{{ generated.shortUrl }}
          </div>
          <div class="pl-3 pt-3 " v-else>
            <v-btn color="success" @click="create">gerar</v-btn>
          </div>


        </v-card-text>
        <v-card-actions>
          <v-btn variant="outlined" color="red-darken-1" @click="this.$emit('close')">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    // open: { type: Boolean }
  },
  async created() {
    this.User = await this.Session.getSession();
  },
  data() {
    return {
      UrlController: new UrlController(),
      Session: new SessionController(),
      host: 'http://localhost:3000',
      User: {},
      url: {
        title: "",
        origin: "",
        userId: ""
      },
      created: false,
      generated: "",
      open: true,
      pending: false
    }
  },
  methods: {
    async create() {
      this.url.userId = this.User.userId
      try {
        this.generated = await this.UrlController.createUrl(this.url);
        this.created = true;
      }
      catch (err) {
        console.log(err)
      }

    }
  },
}
</script>