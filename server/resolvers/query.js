const Query = {
  mainCards: (parent, args, { mainCards }) => mainCards,
  animals: (parent, args, { animals }) => animals,
  categories: (parent, args, { categories }) => categories,
  animal: (parent, args, { animals }) => {
    let animal = animals.find((animal) => animal.slug === args.slug);
    return animal;
  },
  category: (parent, args, { categories }) => {
    let category = categories.find((cate) => cate.slug === args.slug);
    return category;
  },
};

module.exports = Query;
