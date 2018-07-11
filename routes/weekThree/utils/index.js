const { resolve } = require('path');
const generateSelected = require(resolve(__dirname, 'generateSelected'));
const generatePartyGuests = require(resolve(__dirname, 'generatePartyGuests'));
const generateTranslations = require(resolve(
  __dirname,
  'generateTranslations'
));

module.exports = {
  generateSelected,
  generateTranslations,
  generatePartyGuests,
};
