const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const users = require('./routes/user')

// Use Routes
app.use('/users', users)

app.use('/uploads', express.static('uploads'))

mongoose
  .connect('mongodb://localhost/linkr')
  .then(() => console.log('Connected to MongoDb...'))
  .catch(err => console.log('Error connecting to MongoDB'))

app.listen(port, () => console.log(`Server running on port ${port}`))
