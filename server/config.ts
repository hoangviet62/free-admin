import * as dotenv from 'dotenv';

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env`;
}
dotenv.config({path: path});

export const APP_PORT = process.env.APP_PORT;
export const APP_API = process.env.APP_API;
