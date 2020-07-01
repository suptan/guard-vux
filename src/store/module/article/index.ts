import { ArticleState } from '@/types/api/article';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

const state: ArticleState = {
  isFetching: false,
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
};
