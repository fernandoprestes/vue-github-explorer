/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface UserGateway {
  getGithubUser(user: string): Promise<any>;
  getGithubUserRepos(user: string): Promise<any>;
  searchGithubUser(user: string, perPage: number): Promise<any>;
  searchGithubUserRepos(user: string, perPage: number): Promise<any>;
}
