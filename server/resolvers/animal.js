const Animal = {
  category: (parent, args, { categories }) => {
    const data = categories.find((cate) => cate.id === parent.category);
    return data;
  },
};

module.exports = Animal;
