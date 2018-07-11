const path = require('path');
const { NAME } = require(path.resolve(__dirname, 'constants'));
const {
  generateSelected,
  generateTranslations,
  generatePartyGuests,
} = require(path.resolve(__dirname, 'utils'));

const routes = app => {
  app.get(`/${NAME}/selected`, (req, res) => res.json(generateSelected()));

  app.get(`/${NAME}/translations`, (req, res) =>
    res.json(generateTranslations())
  );

  app.get(`/${NAME}/party`, (req, res) => res.json(generatePartyGuests('vip')));
  app.get(`/${NAME}/wedding`, (req, res) =>
    res.json(generatePartyGuests('plusOne'))
  );
};

module.exports = routes;
