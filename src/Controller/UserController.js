import axios from 'axios';

class UserController {
  /**
   * Method responsible for picking up all users
   * @param {*} req
   * @param {*} res
   */
  async getUser(req, res) {
    const { since } = req.query;

    if (!since) {
      return res
        .status(400)
        .json({ error: 'You must pass a parameter to make this query' });
    }

    try {
      const urlGitHub = 'https://api.github.com/users?since=';
      const { data } = await axios.get(urlGitHub + since);

      const users = data.map((dev) => ({
        id: dev.id,
        login: dev.login,
        avatar_url: dev.avatar_url,
      }));

      return res.json(users);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Error when trying to query the github API' });
    }
  }

  /**
   * Method responsible for seeking user information
   * @param {*} req
   * @param {*} res
   */
  async getUserDetails(req, res) {
    const { username } = req.params;

    if (!username) {
      return res
        .status(400)
        .json({ error: 'You must pass a parameter to make this query' });
    }

    try {
      const urlGitHub = 'https://api.github.com/users/';
      const { data } = await axios.get(urlGitHub + username);

      const userInfo = {
        id: data.id,
        login: data.login,
        avatar_url: data.avatar_url,
        name: data.name,
        blog: data.blog ?? 'Sem blog cadastrado',
        location: data.location ?? 'Sem Localizaçāo Cadastrada',
      };

      return res.json(userInfo);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Error when trying to query the github API' });
    }
  }

  /**
   *
   * Method responsible for searching user repositories
   * @param {*} req
   * @param {*} res
   */
  async getUserRepos(req, res) {
    const { username } = req.params;

    if (!username) {
      return res
        .status(400)
        .json({ error: 'You must pass a parameter to make this query' });
    }

    try {
      const urlGitHub = 'https://api.github.com/users/';
      const { data } = await axios.get(`${urlGitHub + username}/repos`);

      const repositories = data.map((dev) => ({
        id: dev.id,
        full_name: dev.full_name,
        html_url: dev.avatar_url,
        description: dev.description,
        stargazers_count: dev.stargazers_count,
      }));

      return res.json(repositories);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Error when trying to query the github API' });
    }
  }
}

export default new UserController();
