import express from  'express'
import dotenv from "dotenv";
import colors from "colors"
import connectDB from '../backend/config/db.js';
import productRoutes from './routes/productRoutes.js';
import {notFound,errorHandler} from './middleware/erorrMiddleware.js'
connectDB();
const app = express()
dotenv.config();
app.get('/', (req, res) => {
  res.send("API is running...");
});

app.use("/api/products", productRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server running on port ${PORT}`.yellow.bold))
