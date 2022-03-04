const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db')

dotenv.config({ path: "./config/config.env" })

// connectDB()
// ↑ is not working so ↓ to connect local mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/expense2', {
  useNewUrlParser: true, useUnifiedTopology: true,
})

const app = express();

app.use(express.json())

if (process.env.NODE_ENV === "development") {
  app.use(morgan('dev'));
}

const transactionsRouter = require('./routes/transactions')
app.use('/transactions', transactionsRouter)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));