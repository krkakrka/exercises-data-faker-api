const path = require("path");
const weekThree = require(path.resolve(__dirname, "weekThree"));
const foodShop = require(path.resolve(__dirname, "foodShop"));

const routes = app => {
  weekThree(app);
  foodShop(app);
};

module.exports = routes;
