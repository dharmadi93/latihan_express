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
