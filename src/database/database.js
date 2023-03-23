import pg from 'pg';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production" && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};

export const db = new Pool(configDatabase);

db.connect((err) => {
  if (err) {
    console.error(chalk.red('Erro de conexão no Database:'), err.stack);
  } else {
    console.log(chalk.green('Conectado com sucesso no Database!'));
  }
});

export default db;