import {createServer} from 'http';
import next from 'next';
import {APP_PORT} from './config';

const port = parseInt(APP_PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(port);

  // eslint-disable-next-line no-console
  console.log(
      `> Server listening at http://localhost:${port} as ${
      dev ? 'development' : process.env.NODE_ENV
      }`,
  );
});
