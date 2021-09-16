import express from "express";
import { serverConfig } from './configs/server.config';
import expressConfig from './configs/express.config';
const app = express();
expressConfig(app);
app.listen(serverConfig.port, () => {
  console.log('Server is listening on port', serverConfig.port);
})

export default app;