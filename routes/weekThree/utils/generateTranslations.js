const { commerce, random, lorem } = require('faker');
const { number } = random;
const { word } = lorem;
const locales = ['en', 'es', 'ja', 'pl', 'nl', 'ru', 'fr'];

const generateKeys = () => {
  const translationsCount = random.number({ max: 6, min: 0 });
  const key = word();
  const result = locales.slice(0, translationsCount).map(locale => ({
    // TODO:
  }));
};

const generateTranslations = () => {
  // const result = [...Array(13)].map(() => {
  //   const domain = word();
  //   const domainKeysCount = random.number({ max: 100, min: 10 });
  //   const res = {[domain]: [...Array(domainKeysCount).map(generateKeys)]}
  // });

  // return result;
  return {};
};

module.exports = generateTranslations;
