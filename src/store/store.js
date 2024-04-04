// store.js
import Vuex from 'vuex';

export default new Vuex.Store({
    state: {
      isFlipped: false,
      language: 'fr',
      isChecked: false
    },
    mutations: {
      setFlipped(state, isFlipped) {
        state.isFlipped = isFlipped;
      },
      setLanguage(state, language) {
        state.language = language;
      },
      setIsChecked(state, value) {
        state.isChecked = value;
      }
    }
  });
