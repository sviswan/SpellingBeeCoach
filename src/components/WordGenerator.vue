<template>
<div>
  <div v-if="availableWord">
    <h5 style="color: green">Your next word is....</h5>
    <audio :src="getaudioURL" controls></audio><br/>
    <br />
    <button type="button" class="btn btn-warning" @click="showDefn"> {{showDefinition? 'Hide':'Show'}} Definition(s)</button>
    <ol v-if="showDefinition"><br/>
      <li v-for="defn in availableWord[0].shortdef" :key="defn"> {{ defn }}</li>
    </ol>
  </div>
  <div v-if="!availableWord">
    <h5>Oops...something went wrong while fetching your word!</h5>
  </div>
</div> 
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'WordGenerator',
  created() {
    this.getWordDetails();
  },
  computed: {
    availableWord() {
      return this.$store.state.word_details;  
    },
    showDefinition() {
     return this.$store.state.showDefinition;
    },
    getaudioURL() {
      return "https://media.merriam-webster.com/audio/prons/en/us/mp3/a/"+this.$store.state.word_details[0].hwi.prs[0].sound.audio+".mp3";
    },
  },
  methods: {
    ...mapActions(['getWordDetails']),
    ...mapMutations(['showDefn']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
ol, ul, dl {
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: -webkit-left;
}
</style>
