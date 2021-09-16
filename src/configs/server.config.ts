import { config } from 'dotenv';
config();

export const serverConfig = {
  port: process.env.APP_PORT
}