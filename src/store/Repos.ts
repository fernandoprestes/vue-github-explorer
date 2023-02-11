import { defineStore } from 'pinia';
import type { Repos } from '~/@types/GithubRepos';

export const useReposStore = defineStore('repos', {
  state: () => {
    return {
      favoritesRepos: [] as Repos[],
    };
  },

  getters: {
    favoritesReposList: state => state.favoritesRepos,
    hasRepoInFavoritesRepos(state) {
      return (id: number) => state.favoritesRepos.some(repo => repo.id === id);
    },
    isFavoritesReposEmpty: state => state.favoritesRepos.length === 0,
  },

  actions: {
    toggleFavoriteRepo(repo: Repos) {
      const hasRepo = this.hasRepoInFavoritesRepos(repo.id);
      if (hasRepo) {
        this.removeFromFavoriteRepo(repo.id);
        return;
      }
      this.favoritesRepos.push(repo);
    },

    removeFromFavoriteRepo(repoId: number) {
      this.favoritesRepos = this.favoritesRepos.filter(favRepo => favRepo.id !== repoId);
    },
  },
});
