import mongoose from "mongoose";
import dotenv from "dotenv";
// import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export default connectDB;

// import mysql from 'mysql';
// import dotenv from 'dotenv';

// // Load environment variables from .env file
// dotenv.config();

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_Password,
//   database: process.env.DB_NAME
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database as id ' + connection.threadId);
// });

// // Test query
// connection.query('SELECT 1+1 AS solution', (err, rows, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('The solution is: ', rows[0].solution);
// });

// connection;