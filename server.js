const express = require('express')
const mongoose = require('mongoose')

const items = require('./routes/api/items')

const app = express()

// use body-parser middleware
app.use(express.json())

// MongoDB config
const db = require('./config/keys').mongoURI

// connect to db
mongoose
  .connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// use routes
app.use('/api/items', items)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

module.exports = app
