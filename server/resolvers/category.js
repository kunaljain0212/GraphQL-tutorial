const { animals } = require("../database/db");

const Category = {
  animals: (parent, args, ctx) => {
    const data = animals.filter((animal) => animal.category === parent.id);
    return data;
  },
};

module.exports = Category;
