import Products from "./products.json";

const getAll = () => {
  return Promise.resolve(Products)
}

const getById = (id) => {
  const product = Products.find(item => item.id === parseInt(id));
  return Promise.resolve(product);
}

export {
  getAll,
  getById
}