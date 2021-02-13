 import mongoose from "mongoose";
import dotenv from "dotenv";

 const connectDB = async () =>{
     try {
         const conn = await mongoose.connect(
           "mongodb+srv://ezekiel:Password!2@cluster0.ethbk.mongodb.net/tech-store?retryWrites=true&w=majority",
           {
             useUnifiedTopology: true,
             useNewUrlParser: true,
             useCreateIndex: true,
           }
         );
         console.log(`MongoDB Connect: ${conn.connection.host}`.cyan.underline);
     } catch (error) {
         console.error(`Error:: ${error.message}`.red.underline.bold);
         process.exit(1);

     }
 }
export default connectDB;