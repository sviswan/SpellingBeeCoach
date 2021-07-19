<template>
       <button type="button" class="btn btn-success" @click="getNextWord">Next Word</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'WordStatistics',
    methods: {
        ...mapActions(['getWordDetails']),
        getNextWord() {
            this.getWordDetails();
        }
    },
}
</script>
<style scoped>
.btn-success {
    font-size: x-large;
}
</style>