import express from 'express';
import { submitRouter } from './routes/submit-route';
export const app = express();

export const routes = express.Router();

app.use(express.json());
app.use(submitRouter);

