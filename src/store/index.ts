import Vue from 'vue';
import Vuex from 'vuex';
import articleModule from './module/article';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    article: articleModule,
  },
});
