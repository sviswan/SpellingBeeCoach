<template>
    <div v-if="availableWord">
      <input type="text" v-model="spelling" placeholder="Type spelling here..."/><br/>
      <button type="button" class="btn btn-warning" @click="handleSpellingSubmit">Submit</button>
      <span v-if="show_result">
          <p>You entered <u><strong>{{spelling}}</strong></u></p>
          <h5 class="result">{{result}}</h5>
      </span>

    <span v-if="show_word_details">
        <div>
          <p><strong>Spelling</strong> - {{ availableWord[0].meta.id }}</p>
          <p><strong>Stem words</strong> -  {{availableWord[0].meta.stems}}</p>
          <p><strong>Definition(s)</strong> - {{ availableWord[0].shortdef }}</p>
        </div>
      </span>
    </div>
</template>

<script>
export default {
    name: 'WordProcessor',
    created() {
        this.spelling = "";
        this.show_word_details = false;
        this.show_result = false;
        this.result = "";
    },
    data(){
        return {
            spelling: "",
            word_details : this.$store.state.word_details,
            show_word_details: false,
            show_result: false,
            result: ""
        }
    },
    computed: {
        availableWord() {
            return this.$store.state.word_details;  
        },
    },
    methods : {
        handleSpellingSubmit() {
            this.spelling === this.$store.state.word_details[0].meta.id ? this.result = 'Correct!! :)' : this.result ='Wrong :|';
            this.show_result = true;
            this.show_word_details = true;
        },
    }
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