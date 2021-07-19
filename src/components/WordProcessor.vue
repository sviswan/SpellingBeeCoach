<template>
    <div v-if="word_details">
      <input type="text" v-model="spelling" placeholder="Type spelling here..."/><br/>
      <button type="button" class="btn btn-warning" @click="handleSpellingSubmit">Submit</button>
      <span v-if="show_result">
          <p>You entered <u><strong>{{spelling == ""? 'NO ANSWER' : spelling}}</strong></u></p>
          <h5 class="result">{{result}}</h5>
      </span>

    <span v-if="show_word_details">
        <div>
          <p><strong>Spelling</strong> - {{ word_details[0].meta.id }}</p>
          <p><strong>Stem words</strong> -  {{word_details[0].meta.stems}}</p>
          <p><strong>Definition(s)</strong> - {{ word_details[0].shortdef }}</p>
        </div>
      </span>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'WordProcessor',
    computed: {
        ...mapState(['word_details', 'result', 'show_result', 'show_word_details']),
        spelling : {
            get() {
                return this.$store.state.spelling;
            },
            set(spelling) {
                this.$store.commit("setSpellingState", spelling);
            }
        },
    },
    methods : {
        ...mapMutations(['handleSpellingSubmit', 'setSpellingState']),
    },
};
</script>
<style scoped>
p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: large;
}
.result {
        font-size: large;
        font-weight: bold;
        color: orange;
    }
</style>