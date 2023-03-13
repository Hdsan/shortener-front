<template>
    <v-card theme="MainTheme" class="mx-auto card-list" max-width="600">
    
        <v-list :items="items">
            <v-list-item v-for="item in items" :key="item">
               

                    <v-btn color="red" class="mr-3 mdi mdi-account">
                        X
                    </v-btn>
                    {{ item }}

                
            </v-list-item>
        </v-list>
        <v-pagination :length="10"></v-pagination>
    </v-card>
</template>
<script>
export default {
    props: {
        items: { type: Object, required: true },
        mutable: { type: Boolean, required: true },
    },
    setup() {
        return {
            // size: items.length
        }
    }
}
</script>