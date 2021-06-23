const { ApolloServer, gql } = require("apollo-server");
const { mainCards, animals, categories } = require("./database/db");

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    slug: String!
    stock: Int!
    onSale: Boolean
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    categories: [Category!]!
    animal(slug: String!): Animal
    category(slug: String!): Category
  }
`;

const resolvers = {
  Query: {
    mainCards: () => mainCards,
    animals: () => animals,
    categories: () => categories,
    animal: (parent, args, ctx) => {
      let animal = animals.find((animal) => (animal.slug = args.slug));
      return animal;
    },
    category: (parent, args, ctx) => {
      let category = categories.find((cate) => (cate.slug = args.slug));
      return category;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server is up and running on ${url}`);
});
