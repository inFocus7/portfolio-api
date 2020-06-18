// HTTP SERVER
// TODO [Optional] Set up views for general API information.
import express from "express";
import cors from "cors";
import config from "./config.js"
import apolloServer from "./graphql/index.js"

const app = express();

function listen() {
  app.listen(config.port, () => {
    console.log(
      `The server is running and listening at http://localhost:${config.port}`
    );
  });
}

app.use(
  cors({
    origin: config.corsDomain,
    optionsSuccessStatus: 200,
  })
);

app.get("/api", (req, res) => {
  res.send({ status: "ok", message: "Welcome to the portfolio's API! You can access the GraphQL API by sending queries to the '/api/graphql' endpoint!" });
});

// Use the GraphQL Server set-up
apolloServer.applyMiddleware({app, path: '/api/graphql'});

export default {
  getApp: () => app,
  listen,
};
