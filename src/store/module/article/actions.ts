// import { ArticleApiParams } from '@/types/api/article';
import http from '@/common/http-helper';
// import requestFormat from '@/common/request-format';
import { VUE_APP_RESOURCE_URL, VUE_APP_GUARDIAN_API_KEY } from '@/common/config';
import { ActionContext } from 'vuex';

async function getById(
  context: ActionContext<{}, {}>,
  id: string,
): Promise<void> {
  console.log('Article actions/getById');
  context.commit('SET_IS_FETCH_ARTICLE', true);
  const apiKey = `api-key=${VUE_APP_GUARDIAN_API_KEY}`;
  // const formatFilter = requestFormat.filterFormat(filters);

  try {
    // const response = await http.getRequest(
    // `${VUE_APP_RESOURCE_URL}/${id}?${apiKey}&${formatFilter}`);
    const response = await http.getRequest(`${VUE_APP_RESOURCE_URL}/${id}?${apiKey}`);
    console.log('foobar', response);
    context.commit('ARTICLE_UPDATED', response);
  } catch (error) {
    context.commit('ARTICLE_UPDATED', (error as Error).message);
  }
  context.commit('SET_IS_FETCH_ARTICLE', false);
}

export default {
  getById,
};
