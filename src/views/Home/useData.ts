import { reactive } from 'vue';
import type { Repos } from '~/@types/GithubRepos';
import type { Users } from '~/@types/GithubUsers';

import useDialog from '~/composables/useDialog';

import UserGatewayHttp from '~/infra/gateway/UserGatewayHttp';
import AxiosAdapter from '~/infra/http/AxiosAdapter';

const httpClient = new AxiosAdapter();
const userGateway = new UserGatewayHttp(httpClient);

const dialog = useDialog();

export const data = reactive({
  isLoading: true,
  user: [] as Users[],
  repos: [] as Repos[],
  searchInput: '',
  optionSelected: 'SearchInputRepos',
});

export const handleSearchGithubUser = async (perPage = 5) => {
  const response = await userGateway.searchGithubUser(data.searchInput, perPage);
  if (response.status || response.items.length === 0) {
    dialog.open({ component: 'DialogErrorSearchGitHub' });
    return;
  }
  data.user = response.items;
};

export const handleSearchGithubRepos = async (perPage = 5) => {
  const response = await userGateway.searchGithubUserRepos(data.searchInput, perPage);
  if (response.status || response.items.length === 0) {
    dialog.open({ component: 'DialogErrorSearchGitHub' });
    return;
  }
  data.repos = response.items;
};
