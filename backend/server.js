import express from  'express'
import dotenv from "dotenv";
import colors from "colors"
import connectDB from '../backend/config/db.js';

import products from  './data/products.js'
connectDB();
const app = express()
dotenv.config();
app.get('/', (req, res) => {
  res.send("API is running...");
});

app.get('/api/products',(req,res)=>{
    res.json(products);
})
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p._id === req.params.id)
    res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server running on port ${PORT}`.yellow.bold))