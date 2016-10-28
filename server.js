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

router.get('/books/:id', (req, res) => {
    const book = books.filter(book => {
        return book.id === Number(req.params.id)
    })[0]

    if (!book) res.status(404).json({ 'message': 'no book found'})
    res.statusCode(200).json(book)
})

router.post('/books', (req, res) => {
    const book = {
        id: Number(req.body.id),
        name: req.body.name,
        price: Number(req.body.price)
    }
    books.push(book)

    res.json(book)
})

router.delete('/books/:id', (req, res) => {
    // const od = req.params.id
    const book = books.filter(book => {
        return book.id === Number(req.params.id)
    })[0]

    if (!book) res.status(404).json({ 'message': 'no book found'})

    books.splice(books.indexOf(book), 1)
    res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
})

router.put('/books/:id', (req, res) => {
    // const od = req.params.id
    const book = books.filter(book => {
        return book.id === Number(req.params.id)
    })[0]

    if (!book) res.status(404).json({ 'message': 'no book found'})

    Object.keys(req.body).forEach(key => {
        book[key] = req.body[key]
    })

    books[books.indexOf(book)] = book

    res.json(book)
    // res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
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



