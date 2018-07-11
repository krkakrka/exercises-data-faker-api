const { resolve } = require('path');
const generateSelected = require(resolve(__dirname, 'generateSelected'));
const generatePartyGuests = require(resolve(__dirname, 'generatePartyGuests'));
const generateTranslations = require(resolve(
  __dirname,
  'generateTranslations'
));
const getMeme = require(resolve(__dirname, 'getMeme'));

module.exports = {
  generateSelected,
  generateTranslations,
  generatePartyGuests,
  getMeme,
};
