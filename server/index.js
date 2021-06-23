const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type MainCard {
    title: String!
    image: String!
  }

  type Query {
    books: [Book]
    mainCards: [MainCard]
  }
`;

const books = [
  { title: "test1", author: "testName1" },
  { title: "test2", author: "testName2" },
  { title: "test3", author: "testName3" },
];

const mainCards = [
  { title: "card1", image: "lion" },
  { title: "card2", image: "penguin" },
  { title: "card3", image: "cat" },
];

const resolvers = {
  Query: {
    books: () => books,
    mainCards: () => mainCards,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is up and running on ${url}`);
});
