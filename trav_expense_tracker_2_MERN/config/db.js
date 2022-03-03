const mongoose = require('mongoose')

// It must be a promise function to connect db
const connectDB = async () => {
  try {
    console.log(`try`)
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      dbName: 'expense2'
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.syan.underline.bold)
  } catch (error) {
    console.log(`Error: ${error.message}`.red)
    process.exit(1);
  }
}

module.exports = connectDB;