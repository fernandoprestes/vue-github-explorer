import { reactive } from 'vue';
import type { Repos } from '~/@types/GithubRepos';
import type { Users } from '~/@types/GithubUsers';

import UserGatewayHttp from '~/infra/gateway/UserGatewayHttp';
import AxiosAdapter from '~/infra/http/AxiosAdapter';

const httpClient = new AxiosAdapter();
const userGateway = new UserGatewayHttp(httpClient);

export const data = reactive({
  isLoading: true,
  user: [] as Users[],
  repos: [] as Repos[],
  searchInput: '',
  optionSelected: 'SearchInputRepos',
});

export const handleSearchGithubUser = async (perPage = 5) => {
  const response = await userGateway.searchGithubUser(data.searchInput, perPage);
  if (response.status) {
    console.log('error');
    return;
  }
  data.user = response.items;
};

export const handleSearchGithubRepos = async (perPage = 5) => {
  const response = await userGateway.searchGithubUserRepos(data.searchInput, perPage);
  if (response.status) {
    console.log('error');
    return;
  }
  data.repos = response.items;
};
