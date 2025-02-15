const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

const json_books = fs.readFileSync('src/database/books.json', 'utf-8');
let books = JSON.parse(json_books);

router.get('/', (req, res) => {
  res.render('index', { books });
});

router.get('/new-book', (req, res) => {
  res.render('new-book');
});

router.post('/new-book', (req, res) => {

  const { title, author, image, description } = req.body;

  if (!title || !author || !image || !description) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newBook = {
    id: uuidv4(),
    title,
    author,
    image,
    description
  };

  // add a new book to the array
  books.push(newBook);

  // saving the array in a file
  const json_books = JSON.stringify(books);
  fs.writeFileSync('src/database/books.json', json_books, 'utf-8');

  res.redirect('/');
});

router.get('/delete/:id', (req, res) => {
  books = books.filter(book => book.id != req.params.id);

  // saving data
  const json_books = JSON.stringify(books);
  fs.writeFileSync('src/database/books.json', json_books, 'utf-8');

  res.redirect('/')
});

module.exports = router;