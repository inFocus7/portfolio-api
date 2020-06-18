// HTTP SERVER
import express from "express";
import cors from "cors";
import config from "./config"
import apolloServer from "./graphql/index"

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
    origin: config.corsDomain, // TODO Switch to production domain...
    optionsSuccessStatus: 200,
  })
);

app.get("/api/status", (req, res) => {
  res.send({ status: "ok" });
});

// Use the GraphQL Server set-up
// app.use(GraphQLServer.createHandler({ path: "/api/graphql" }));
apolloServer.applyMiddleware({app});
console.log(apolloServer.graphqlPath);

export default {
  getApp: () => app,
  listen,
};
