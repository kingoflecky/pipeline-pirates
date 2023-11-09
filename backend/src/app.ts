import express from 'express';
import { validatorRouter } from './routes/validator-route';
export const app = express();

export const routes = express.Router();

app.use(express.json());
app.use(validatorRouter);

