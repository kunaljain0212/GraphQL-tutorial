const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typedefs/schema");
const resolvers = require("./resolvers/index");
const { categories, animals, mainCards } = require("./database/db");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { animals, categories, mainCards },
});

server.listen().then(({ url }) => {
  console.log(`Server is up and running on ${url}`);
});
