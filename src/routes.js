import { Router } from 'express';
import UserController from './Controller/UserController';

const routes = new Router();

routes.get('/api/users/', UserController.getUser);
routes.get('/api/users/:username/details', UserController.getUserDetails);
routes.get('/api/users/:username/repos', UserController.getUserRepos);

export default routes;
