<script setup>
import UrlController from '../controllers/UrlController'
</script>
<template>
    <div>
        acessando {{ url.fullPath }} ...
    </div>
</template>
<script>
import router from '../router/index'
export default {
   async created() {
        let splittedUrl = (this.url.fullPath).split("/")[2];
        const ogLink = await this.UrlController.accessUrl(splittedUrl);
        console.log(ogLink.origin)
        if(ogLink){
            window.location.replace(ogLink.origin);

        }
    },
    data() {
        return {
            UrlController: new UrlController(),
            url: router.currentRoute
        }
    }
}
</script>