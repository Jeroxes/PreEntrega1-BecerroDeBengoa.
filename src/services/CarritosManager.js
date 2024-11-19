
let carts = [];


const createCart = () => {
  const newCart = {
    id: Date.now().toString(), 
    products: []
  };
  carts.push(newCart);
  return newCart;
};


const findCartById = (id) => carts.find(cart => cart.id === id);

module.exports = { createCart, findCartById, carts };

  