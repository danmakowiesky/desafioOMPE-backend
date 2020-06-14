class UserController {
  async getUser(req, res) {
    return res.json({ message: 'hello' });
  }

  async getUserDetails(req, res) {
    return res.json({ message: 'hello' });
  }

  async getUserRepos(req, res) {
    return res.json({ message: 'hello' });
  }
}

export default new UserController();
