import { Router } from 'express';
import { pong } from '../controller/ping';
import getAllDeath from '../controller/Country/getAllDeath';
import getAllConfirmed from '../controller/Country/getAllConfirmed';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

// Country routes
routes.get('/country/death', getAllDeath);
routes.get('/country/confirmed', getAllConfirmed);

export default routes;
