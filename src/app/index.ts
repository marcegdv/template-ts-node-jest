import cors from 'cors';
import express, { json } from 'express';

import routes from '../router';

const app = express();
app.use(cors());
app.use(json());

app.use(routes);

export default app;