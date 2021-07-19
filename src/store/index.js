import { createStore } from 'vuex';
import axios from 'axios';
import words from '../data/words';

const store = createStore({
    namespaced: true,
    state() {
        return {
          random_word: null,
          word_details: "",
          showDefinition: false,
          spelling: "",
          result: "",
          show_result: false,
          show_word_details: false,
        }
    },
    mutations: {
        updateWordDetails(state, word_details) {
            state.showDefinition = false;
            state.spelling = "",
            state.result = "",
            state.show_result = false,
            state.show_word_details = false,
            state.word_details = word_details;
        },
        showDefn(state) {
            state.showDefinition = !state.showDefinition;
        },
        setSpellingState(state, spelling ){
            state.spelling = spelling
        },
        handleSpellingSubmit(state){
            state.spelling === state.word_details[0].meta.id ? state.result = 'Correct!! :)' : state.result ='Wrong :|';
            state.show_result = true;
            state.show_word_details = true;
        }
    },
    actions: {
        getWordDetails({ commit, state }) {
            const random_index = ((Math.round(Math.random()* words.length)) -1);
            state.random_word = words[random_index].spelling;
            //console.log(state.random_word);
            axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${state.random_word}?key=c89d48f7-9587-4432-8b4f-75b6119b3fb7`)
            .then((result) => {
                commit('updateWordDetails', result.data);
                //console.log(result.data);
            })
            .catch(console.error);
        },
    },
});

export default store;