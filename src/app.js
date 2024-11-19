import express from 'express';
import productsRouter from './routes/products.router.js'
import cartRouter from './routes/carritos.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));








app.use('/api/products', productsRouter)
app.use('/api/carts', cartRouter);







const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});