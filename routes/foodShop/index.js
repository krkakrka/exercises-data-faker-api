const path = require("path");
const { NAME } = require(path.resolve(__dirname, "constants"));
// const { generateProducts } = require(path.resolve(__dirname, "utils"));
const generatedProducts = require('./generatedProducts.json');

const routes = app => {
  app.get(`/${NAME}/products`, (req, res) => res.json(generatedProducts));
};

module.exports = routes;
