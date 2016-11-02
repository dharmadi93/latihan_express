var express = require('express')
var router = express.Router()

var books = require('../data/data')


module.exports = {
    getPing: (req, res) => {
        res.json({"message":"PONG!"})
    },

    getBooks: (req, res) => {
        res.json(books)
    },

    getBooksById: (req, res) => {
        const book = books.filter(book => {
            return book.id === Number(req.params.id)
        })[0]

        if (!book) res.status(404).json({ 'message': 'no book found'})
        res.status(200).json(book)
    },

    addBook: (req, res) => {
        const book = {
            id: Number(req.body.id),
            name: req.body.name,
            price: Number(req.body.price)
        }
        books.push(book)

        res.json(book)
    },

    deleteBook: (req, res) => {
        // const od = req.params.id
        const book = books.filter(book => {
            return book.id === Number(req.params.id)
        })[0]

        if (!book) res.status(404).json({ 'message': 'no book found'})

        books.splice(books.indexOf(book), 1)
        res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
    },

    updateBook: (req, res) => {
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
    }
}
