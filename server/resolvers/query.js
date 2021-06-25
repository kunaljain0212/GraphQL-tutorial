const { mainCards, animals, categories } = require("../database/db");

const Query = {
  mainCards: () => mainCards,
  animals: () => animals,
  categories: () => categories,
  animal: (parent, args, ctx) => {
    let animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  category: (parent, args, ctx) => {
    let category = categories.find((cate) => cate.slug === args.slug);
    return category;
  },
};

module.exports = Query;
