<script setup>
import UrlController from '../controllers/UrlController'
</script>
<template>
    <v-card theme="MainTheme" class="mx-auto card-list" max-width="600" min-height="500">
        <v-divider :thickness="7"></v-divider>
        <v-text-field label="Pesquisar por url" single-line></v-text-field>
        <v-list :items="items">
            <v-list-item v-for="(item, i) in items" :key="i">
                {{ i + 1 }}
                <v-btn color="red" v-if="mutable" @click="deleteItem(item.id)" class="mx-6 mdi">
                    X
                </v-btn>
                
                <span v-else class="mx-6">

                </span>
                <span  v-if="mutable">
                    {{ host }}{{ item.shortUrl }}
                </span>
                <span v-else>
                    {{ item.title }}
                </span>
                



            </v-list-item>
        </v-list>

    </v-card>
</template>
<script>
export default {
    props: {
        items: { type: Object, required: true },
        mutable: { type: Boolean, required: true },
    },
    data() {
    return {
        host:'http://localhost:3000',
        UrlController: new UrlController(),
        }
    },
    methods: {

        async deleteItem(id){
            try{
                await this.UrlController.deleteUrl(id);
                this.$emit("update")
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>