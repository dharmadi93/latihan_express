const express = require('express')
const router = express.Router()

const books = require('../data/data')

const Book = require('../models/books')


module.exports = {
    getPing: (req, res) => {
        res.json({"message":"PONG!"})
    },

    getBooks: (req, res) => {
        // res.json(books)
        Book.find(function (data) {
            res.json(data)
        })
    },

    getBooksById: (req, res) => {

        Book.find({
            _id: req.params.id
        }, function (err, data) {
            req.json(data)
        })

        // const book = books.filter(book => {
        //     return book.id === Number(req.params.id)
        // })[0]
        //
        // if (!book) res.status(404).json({ 'message': 'no book found'})
        // res.status(200).json(book)
    },

    addBook: (req, res) => {


        const book = {
            isbn: req.body.isbn,
            name: req.body.name,
            price: req.body.price
        }

        Book.create(book, function (err, data) {
            res.json(data)
        })

        // const book = {
        //     id: Number(req.body.id),
        //     name: req.body.name,
        //     price: Number(req.body.price)
        // }
        // books.push(book)
        //
        // res.json(book)
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
