const express = require('express')

const app = express()

// use body-parser middleware
app.use(express.json())

// // use routes
// app.use('', require(''))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))

module.exports = app
