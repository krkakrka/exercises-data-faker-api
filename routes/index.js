const path = require('path');
const weekThree = require(path.resolve(__dirname, 'weekThree'));

const routes = app => {
  weekThree(app);
};

module.exports = routes;
