import { Router } from 'express';

import gameController from './controllers/game.js';

const routes = Router();

routes.use('/game', gameController);

export default routes;
