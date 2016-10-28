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
// console.log(books)


//ROuting




router.get('/ping', (req, res) => {
    res.json({"message":"PONG!"})
})

router.get('/books', (req, res) => {
    res.json(books)
})


//register routes

app.use('/', router)

//run the app
const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port, hostname, (err) => {
    if (err) console.log(err)
    console.log((`Server is running on ${hostname}:${port }`))
})



