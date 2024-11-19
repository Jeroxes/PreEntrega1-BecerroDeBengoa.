const express = require('express');
const { createCart, findCartById, carts } = require('../services/CarritosManager');
const { findProductById } = require('../routes/products.router');
const router = express.Router();

router.post('/', (req, res) => {
  const newCart = createCart();
  res.status(201).json({ message: 'Carrito creado', cartId: newCart.id });
});


router.get('/:cid', (req, res) => {
  const { cid } = req.params;
  const cart = findCartById(cid);
  if (!cart) {
    return res.status(404).json({ message: 'Carrito no encontrado' });
  }
  res.status(200).json(cart.products);
});


router.post('/:cid/product/:pid', (req, res) => {
  const { cid, pid } = req.params;
  const cart = findCartById(cid);
  if (!cart) {
    return res.status(404).json({ message: 'Carrito no encontrado' });
  }

  
  const product = findProductById(Number(pid));
  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  
  cart.products.push({ productId: product.id });
  res.status(200).json({ message: 'Producto agregado al carrito', cart });
});

module.exports = router;
