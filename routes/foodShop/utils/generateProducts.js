const { commerce, random, lorem, finance } = require("faker");

const generateProducts = () => {
  const { price } = commerce;
  const { currencySymbol, currencyCode } = finance;
  const { uuid } = random;
  const { paragraph, words } = lorem;

  const result = [...Array(30)].map(() => {
    const timeStamp = new Date().getTime();
    const id = `${uuid()}${timeStamp}`;

    return {
      name: words(),
      id,
      image: "https://lorempixel.com/400/400/food/",
      description: paragraph(),
      price: price(),
      currencySymbol: currencySymbol(),
      currency: currencyCode()
    };
  });

  return result;
};

module.exports = generateProducts;
