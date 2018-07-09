const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8003;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const startListening = () =>
  app.listen(port, () => {
    console.log(`Server running @ http://127.0.0.1:${port}/`);
  });

const init = () => {
  routes(app);
  startListening();
};

init();
