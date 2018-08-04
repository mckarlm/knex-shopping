const express = require('express');
const bodyparser = require('body-parser');
const users = require('./routes/users');
const cart = require('./routes/cart')
const products = require('./routes/products');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use('/users', users);
app.use('/cart', cart);
app.use('/products', products);

app.get('/', (req, res)=>{
  res.send('ooga booga')
});

app.get('/*', (req, res)=>{
  res.send('WILD CARD')
})

app.listen(PORT, () => {
  process.stdout.write(`connected to ${PORT}`)
})