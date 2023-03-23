import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index.router.js'
import chalk from 'chalk';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(chalk.bgMagenta(`Servidor rodando na porta: ${port}`))
);