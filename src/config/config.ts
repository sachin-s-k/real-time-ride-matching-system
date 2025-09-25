import dotenv from 'dotenv';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
console.log(env, 'env');

dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
export const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
  },
  redis: {},
  kafka: {},
};
