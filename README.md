Book API 
A simple REST API for managing a list of books using Node.js and Express
Book API - Node.js & Express

Introduction
This is a **REST API** built using **Node.js** and **Express** to manage a list of books. The data is stored **in-memory** (no database) and the API supports basic **CRUD** operations: **Create**, **Read**, **Update**, and **Delete** books.

Features

**GET /books** - Retrieve a list of all books.
 **POST /books** - Add a new book.
 **PUT /books/:id** - Update an existing book by ID.
 **DELETE /books/:id** - Delete a book by ID.

Install Dependencies
Navigate into the project folder and install the dependencies by running:
cd book-api
npm install
This will install Express and other required dependencies.

3. Run the Server
To start the API server, run the following command:

**node index.js**
Your server will be running at http://localhost:3000.

API Endpoints
Here’s a summary of the API endpoints and how to interact with them:

**GET /books**
Description: Get a list of all books.

Example Request: GET http://localhost:3000/books
Response Example:

[
  { "id": 1, "title": "Harry Potter", "author": "J.K. Rowling" }
]

**POST /books
Description: Add a new book to the list.

Example Request:

URL: POST http://localhost:3000/books

Request Body:
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
Response Example:

{ "id": 2, "title": "The Hobbit", "author": "J.R.R. Tolkien" }

**PUT /books/:id**
Description: Update an existing book by ID.

Example Request:

URL: PUT http://localhost:3000/books/1

Request Body:
{
  "title": "Harry Potter and the Chamber of Secrets"
}
Response Example:

{ "id": 1, "title": "Harry Potter and the Chamber of Secrets", "author": "J.K. Rowling" }

**DELETE /books/:id**
Description: Delete a book by ID.

Example Request: DELETE http://localhost:3000/books/1

Response Example:

✅ Book deleted

<img width="755" height="330" alt="Capture" src="https://github.com/user-attachments/assets/a5783066-4ebc-4d47-ac06-532a551549ad" />
<img width="629" height="202" alt="Capture0" src="https://github.com/user-attachments/assets/3b8463a5-5661-40a0-b56a-7966f2419f9e" />
<img width="664" height="459" alt="Captureoo" src="https://github.com/user-attachments/assets/6b255a91-539b-4094-b0f8-4a91056cd050" />
<img width="927" height="501" alt="Capturexx" src="https://github.com/user-attachments/assets/26f2a01c-e3f3-4c8f-8b01-db65f4743224" />



Testing the API
You can test the API using Postman or cURL.

Testing with Postman:
Open Postman.

Create a GET, POST, PUT, or DELETE request to the appropriate URL (http://localhost:3000/books or http://localhost:3000/books/:id).

Send the request and observe the response.

Testing with cURL:
You can also use cURL commands in the terminal for testing:

**GET:**
GET http://localhost:3000/books
**POST:**
POST http://localhost:3000/books -H "Content-Type: application/json" -d '{"title": "The Hobbit", "author": "J.R.R. Tolkien"}'
**PUT:**
PUT http://localhost:3000/books/1 -H "Content-Type: application/json" -d '{"title": "Harry Potter and the Chamber of Secrets"}'
**DELETE:**
DELETE http://localhost:3000/books/1








