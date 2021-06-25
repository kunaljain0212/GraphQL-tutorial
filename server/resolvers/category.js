const Category = {
  animals: (parent, args, { animals }) => {
    const data = animals.filter((animal) => animal.category === parent.id);
    return data;
  },
};

module.exports = Category;
