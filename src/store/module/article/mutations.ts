import { ArticleState, GuardianApiResponse } from '@/types/api/article';

const ARTICLE_UPDATED = (state: ArticleState, response: GuardianApiResponse) => {
  state.response = response;
};

const ARTICLE_ERROR = (state: ArticleState, errorMsg: string) => {
  state.errorMsg = errorMsg;
};

const SET_IS_FETCH_ARTICLE = (state: ArticleState, flag: boolean) => {
  state.isFetching = flag;
};

export default {
  ARTICLE_UPDATED,
  ARTICLE_ERROR,
  SET_IS_FETCH_ARTICLE,
};
