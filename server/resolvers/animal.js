const { categories } = require("../database/db");

const Animal = {
  category: (parent, args, ctx) => {
    const data = categories.find((cate) => cate.id === parent.category);
    return data;
  },
};

module.exports = Animal;
