var express = require('express')
var router = express.Router()

var books = require('../data/data')
var bookController = require('../controllers/api.books')

router.get('/ping', bookController.getPing)

router.get('/books', bookController.getBooks)

router.get('/books/:id', bookController.getBooksById)

router.post('/books', bookController.addBook)

router.delete('/books/:id', bookController.deleteBook)

router.put('/books/:id', bookController.updateBook)

module.exports = router




// router.get('/ping', (req, res) => {
//     res.json({"message":"PONG!"})
// })
//
// router.get('/books', (req, res) => {
//     res.json(books)
// })
//
// router.get('/books/:id', (req, res) => {
//     const book = books.filter(book => {
//         return book.id === Number(req.params.id)
//     })[0]
//
//     if (!book) res.status(404).json({ 'message': 'no book found'})
//     res.statusCode(200).json(book)
// })
//
// router.post('/books', (req, res) => {
//     const book = {
//         id: Number(req.body.id),
//         name: req.body.name,
//         price: Number(req.body.price)
//     }
//     books.push(book)
//
//     res.json(book)
// })
//
// router.delete('/books/:id', (req, res) => {
//     // const od = req.params.id
//     const book = books.filter(book => {
//         return book.id === Number(req.params.id)
//     })[0]
//
//     if (!book) res.status(404).json({ 'message': 'no book found'})
//
//     books.splice(books.indexOf(book), 1)
//     res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
// })
//
// router.put('/books/:id', (req, res) => {
//     // const od = req.params.id
//     const book = books.filter(book => {
//         return book.id === Number(req.params.id)
//     })[0]
//
//     if (!book) res.status(404).json({ 'message': 'no book found'})
//
//     Object.keys(req.body).forEach(key => {
//         book[key] = req.body[key]
//     })
//
//     books[books.indexOf(book)] = book
//
//     res.json(book)
//     // res.status(200).json({ 'message': `Book ${req.params.id} has been deleted` })
// })