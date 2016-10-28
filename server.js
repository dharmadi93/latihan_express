'use strict'

//expres dependencies
const express = require('express')
const bodyParser = require('body-parser')
const  cors = require('cors')

//Initiate express
const app = express()
const router = express.Router()


//App configuraiton
//req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const books = require('./data.js')
console.log(books)

