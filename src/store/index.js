import { createStore } from 'vuex';
import coachesModules from './modules/coahces/index.js';

const store = createStore({
  modules: { coaches: coachesModules },
});

export default store;
