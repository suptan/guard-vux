import { get } from 'lodash';
import { ArticleState, GuardianApiContent } from '@/types/api/article';

const response = (state: ArticleState) => state.response;
const content = (state: ArticleState): GuardianApiContent | undefined => get(state, ['response', 'content']);
const isFetching = (state: ArticleState) => state.isFetching;

export default {
  response,
  content,
  isFetching,
};
