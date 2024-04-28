import cors from 'cors';
import express, { json } from 'express';
import routes from '../router';
import swaggerRoute from '../swagger/swagger';

const app = express();

swaggerRoute("/docs", app);

app.use(cors());
app.use(json());

app.use(routes);

export type ExpressApp = typeof app;
export default app;
