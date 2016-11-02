'use strict'

require('dotenv').config()

//expres dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

//Initiate express
const app = express()
const router = express.Router()

const apiRoutesBook = require('./routes/books')


//App configuraiton
//req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)


const books = require('./data/data.js')
// console.log(books)


//ROuting







//register routes

app.use('/api', apiRoutesBook)

//run the app
const hostname = process.env.HOST
const port = process.env.PORT

// const hostname = process.env.HOST || "localhos"
// const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
    if (err) console.log(err)
    console.log((`Server is running on ${hostname}:${port }`))
})



