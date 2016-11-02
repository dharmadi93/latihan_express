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
        Book.find(function (err, data) {
            if (err) res.status(400).json({'message': 'error'})
            if (!data) res.status(404).json({'message': 'buku tidak ada'})

            res.status(200).json(data)
        })
    },

    getBooksByIsbn: (req, res) => {

        Book.findOne({
            isbn: req.params.isbn
        }, function (err, data) {
            if (err) res.status(400).json({'message': 'error'})
            if (!data) res.status(404).json({'message': 'buku tidak ada'})

            res.status(200).json(data)
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
            if (err) res.status(400).json({'message': 'error'})
            if (!data) res.status(304).json({'message': 'failed to post'})
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

        Book.findOneAndRemove({
            isbn: req.params.isbn
        }, function (err, data) {
            if (err) res.status(400).json({'message': 'error'})
            if (!data) res.status(404).json({'message': 'ga ketemu'})
            res.status(200).json({
                'message': 'buku sudah di hapus'
            })
        })

        // const od = req.params.id
        // const book = books.filter(book => {
        //     return book.id === Number(req.params.id)
        // })[0]
        //
        // if (!book) res.status(404).json({ 'message': 'no book found'})
        //
        // books.splice(books.indexOf(book), 1)
        // res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
    },

    updateBook: (req, res) => {


        Book.findOneAndUpdate({
            isbn: req.params.isbn
        }, {
            name: req.body.name,
            price: req.body.price
        }, {
            new: true,
            upsert: true
        }, function (err, data) {
            if (err) res.status(400).json({'message': 'error'})
            if (!data) res.status(404).json({'message': 'ga ketemu'})
            res.status(200).json({
                'message': 'buku sudah di update'
            })
        })

        // const od = req.params.id
        // const book = books.filter(book => {
        //     return book.id === Number(req.params.id)
        // })[0]
        //
        // if (!book) res.status(404).json({ 'message': 'no book found'})
        //
        // Object.keys(req.body).forEach(key => {
        //     book[key] = req.body[key]
        // })
        //
        // books[books.indexOf(book)] = book
        //
        // res.json(book)
        // res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
    }
}
