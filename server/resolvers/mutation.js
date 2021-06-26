const { animal } = require("./query");

const Mutation = {
  addAnimal: (
    parent,
    { image, title, rating, price, description, slug, stock, onSale, category },
    { animals }
  ) => {
    const newAnimal = {
      id: Date.now(),
      image,
      title,
      rating,
      price,
      description,
      slug,
      stock,
      onSale,
      category,
    };
    animals.push(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    const index = animals.findIndex((animal) => animal.id === id);
    animals.splice(index, 1);
    return true;
  },
};

module.exports = Mutation;
