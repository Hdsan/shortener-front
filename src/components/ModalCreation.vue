<template>
    <v-row justify="center">
      <v-dialog
        v-model="open"
        persistent
        width="50%"
      >
        <v-card  theme="high-contrast">
          <v-card-title>Nova URL</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 200px;">
            <div>
                <v-text-field
                    name="name"
                    label="Url original"
                    placeholder="www.url-original.com"
                    id="id"
                ></v-text-field>
            </div>
            <div>
                URL gerada
            </div>
            <div class="pl-3 pt-3 ">
            www.asdfg.com
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              variant="outlined"
              color="red-darken-1"
              @click="this.$emit('close')"
            >
              Fechar
            </v-btn>
            <v-btn
              variant="outlined"
              color="red-darken-1"
              @click="this.$emit('close')"
            >
              Criar
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
    data() {
        return{
        open :true
        }
    }
}
</script>