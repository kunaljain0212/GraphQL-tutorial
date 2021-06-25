const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typedefs/schema");
const resolvers = require("./resolvers/index");

const server = new ApolloServer({ typeDefs, resolvers: resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is up and running on ${url}`);
});
