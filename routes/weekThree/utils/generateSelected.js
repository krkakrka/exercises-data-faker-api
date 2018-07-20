const { commerce, random, lorem } = require("faker");

const generateSelected = () => {
  const { productName, price, color } = commerce;
  const { uuid, boolean, number } = random;
  const { paragraph } = lorem;

  const result = [...Array(50)].map(() => {
    const name = productName();
    const timeStamp = new Date().getTime();
    const id = `${name.replace(/ /g, "")}${uuid()}${timeStamp}`;

    return {
      name,
      id,
      selected: boolean(),
      description: paragraph(),
      price: `$${price()}`,
      color: color(),
      stock: number({ max: 5, min: 0 })
    };
  });

  return result;
};

module.exports = generateSelected;
