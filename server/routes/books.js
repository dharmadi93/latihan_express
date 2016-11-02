var express = require('express')
var router = express.Router()

var books = require('../data/data')
var bookController = require('../controllers/api.books')

router.get('/ping', bookController.getPing)

router.get('/books', bookController.getBooks)

router.get('/books/:isbn', bookController.getBooksByIsbn)

router.post('/books', bookController.addBook)

router.delete('/books/:isbn', bookController.deleteBook)

router.put('/books/:isbn', bookController.updateBook)

module.exports = router
