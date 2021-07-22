<template>
<div>
  <div v-if="availableWord">
    <h3>Your next word is...</h3>
    <div>
    <audio :src="getaudioURL" controls></audio><br/>
    </div>
    <br />
    <button type="button" class="btn btn-warning" @click="showDefn"> {{showDefinition? 'Hide':'Show'}} Definition(s)</button>
    <ol v-if="showDefinition"><br/>
      <li v-for="defn in availableWord.shortdef" :key="defn"> {{ defn }}</li>
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
      return this.$store.state.word_details[0];  
    },
    showDefinition() {
     return this.$store.state.showDefinition;
    },
    getaudioURL() {
      const word_detail = this.$store.state.word_details[0];
      var audio = "";
      word_detail.hwi.prs[0] && word_detail.hwi.prs[0].sound.audio? audio = word_detail.hwi.prs[0].sound.audio:console.log('no audio...');
        console.log('audio: '+ audio);
        console.log('random= meta?? '+ this.$store.state.random_word === word_detail.meta.id.split(':')[0]);
        var sub_dir = "";
        audio.substring(0,3) === 'bix'? sub_dir = 'bix':
          audio.substring(0,3) === 'gg'? sub_dir = 'gg':
            audio.substring(0,1).includes('^(?=.*?[1-9])[0-9()-]+$_')? sub_dir = audio.substring(0,1):
        sub_dir = word_detail.meta.id.charAt(0).toLowerCase();
         console.log('audio: '+ audio + '.....'+'sub_dir: '+sub_dir );
        return "https://media.merriam-webster.com/audio/prons/en/us/mp3/"+sub_dir+"/"+audio+".mp3";
        }
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
