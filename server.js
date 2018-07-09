const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const startListening = () =>
  app.listen(3000, () => {
    console.log('Server running @ http://127.0.0.1:3000/');
  });

const init = () => {
  routes(app);
  startListening();
};

init();
