const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
app.use(cors());
const port = process.env.PORT || 3003;

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
