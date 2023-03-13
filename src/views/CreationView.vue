<script setup>

</script>

<template>
  <div>

   creation
  </div>
</template>

<script>
export default {

  components: {
    
  },
  data() {
    return {
      
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
  z-index: 1;
}

.card-list {
  width: 50vw;
}

.main-content {
  padding-top: 10vh;
}
</style>