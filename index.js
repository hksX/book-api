// Import express
const express = require('express');
const app = express();
const port = 3000;

// Allow JSON in request body
app.use(express.json());

// Home page route (fixes "Cannot GET /")
app.get('/', (req, res) => {
  res.send('✅ Welcome to the Book API! Use /books to get, add, update, or delete books.');
});

// In-memory book list
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" }
];

// GET /books - return all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - add a new book
app.post('/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - update a book by ID
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);
  if (!book) {
    return res.status(404).send("❌ Book not found");
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;

  res.json(book);
});

// DELETE /books/:id - delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);
  if (index === -1) {
    return res.status(404).send("❌ Book not found");
  }

  books.splice(index, 1);
  res.send("✅ Book deleted");
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
