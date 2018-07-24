const { commerce, random, lorem, finance } = require("faker");

const generateProducts = () => {
  const { price } = commerce;
  const { currencySymbol, currencyCode } = finance;
  const { uuid } = random;
  const { paragraph, sentence } = lorem;

  const result = [...Array(30)].map(() => {
    const timeStamp = new Date().getTime();
    const id = `${name.replace(/ /g, "")}${uuid()}${timeStamp}`;
    const price = price();
    const currencySymbol = currencySymbol();

    return {
      name: sentence(),
      id,
      image: "https://lorempixel.com/400/400/food/",
      description: paragraph(),
      price: price(),
      currencySymbol,
      currency: currencyCode()
    };
  });

  return result;
};

module.exports = generateProducts;
