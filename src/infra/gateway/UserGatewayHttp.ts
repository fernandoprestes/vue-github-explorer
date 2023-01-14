/* eslint-disable @typescript-eslint/no-explicit-any */
import type HttpClient from '../http/HttpClient';
import type UserGateway from './UserGateway';

export default class UserGatewayHttp implements UserGateway {
  constructor(readonly httpClient: HttpClient) {}
  async getGithubUser(username: string): Promise<any> {
    const userResponse = await this.httpClient.get(`users/${username}`);
    return userResponse;
  }
  async getGithubUserRepos(username: string): Promise<any> {
    const userReposResponse = await this.httpClient.get(`users/${username}/repos`);
    return userReposResponse;
  }
  async searchGithubUser(username: string, perPage: number): Promise<any> {
    const searchUserResponse = await this.httpClient.get(`search/users?q=${username}&page=1&per_page=${perPage}`);
    return searchUserResponse;
  }
  async searchGithubUserRepos(repoName: string, perPage: number): Promise<any> {
    const searchUserReposResponse = await this.httpClient.get(
      `search/repositories?q=${repoName}&page=1&per_page=${perPage}`,
    );
    return searchUserReposResponse;
  }
}
