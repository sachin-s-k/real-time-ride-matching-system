// src/index.ts
import express from 'express';
import bodyParser from 'body-parser';
import { config } from './config/config';
const app = express();
app.use(bodyParser.json());

app.listen(config.port, () =>
  console.log(`Ride Matching app running on port ${config.port}`),
);
