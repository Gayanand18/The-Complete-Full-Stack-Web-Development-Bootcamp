import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { yourUser, yourHost, yourDatabase, yourPassword, yourPort } from "./config.js";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: yourUser,
  host: yourHost,
  database: yourDatabase,
  password: yourPassword,
  port: yourPort,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// app.get("/", async (req, res) => {
//   try {
//     const result = await db.query("SELECT * FROM items ORDER BY id ASC");
//     items = result.rows;

//     res.render("index.ejs", {
//       listTitle: "Today",
//       listItems: items,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });
app.get("/", async (req, res) => {
  try {
      const sortBy = req.query.sort || 'best';
      const searchQuery = req.query.search || '';
      
      let orderBy;
      switch(sortBy) {
          case 'title':
              orderBy = 'book_name ASC';
              break;
          case 'newest':
              orderBy = 'date DESC';
              break;
          case 'best':
          default:
              orderBy = 'recommendation DESC, book_name ASC';
      }

      let query = `SELECT b.id, b.book_name, b.author, b.isbn, b.descriptions, 
                          b.date, b.recommendation
                   FROM books b`;
      
      let params = [];
      
      if (searchQuery) {
          query += ` WHERE b.book_name ILIKE $1 OR b.author ILIKE $1 OR b.descriptions ILIKE $1`;
          params.push(`%${searchQuery}%`);
      }
      
      query += ` ORDER BY ${orderBy}`;

      const result = await db.query(query, params);
      
      const books = result.rows.map(book => ({
          ...book,
          coverUrl: `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`,
          formatted_date: book.date ? book.date.toISOString().split('T')[0] : 'Not specified'
      }));
      
      res.render("index.ejs", {
          listBooks: books,
          currentSort: sortBy,
          searchQuery: searchQuery
      });
  } catch (err) {
      console.error("Database error:", err);
      res.status(500).send("Error loading books");
  }
});

app.get("/:id-notes", async (req, res) => {
    try {
        const bookId = req.params.id.split('-')[0];
        
        // Get book details
        const bookQuery = `SELECT id, book_name, author, isbn, date, recommendation 
                          FROM books WHERE id = $1`;
        const bookResult = await db.query(bookQuery, [bookId]);
        
        if (bookResult.rows.length === 0) {
            return res.status(404).send("Book not found");
        }
        
        const book = bookResult.rows[0];
        book.coverUrl = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`;
        book.formatted_date = book.date ? book.date.toISOString().split('T')[0] : 'Not specified';
        
        // Get all notes for this book
        const notesQuery = `SELECT note, created_at 
                           FROM notes 
                           WHERE book_id = $1 
                           ORDER BY created_at DESC`;
        const notesResult = await db.query(notesQuery, [bookId]);
        
        res.render("book-notes.ejs", {
            book: book,
            notes: notesResult.rows
        });
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send("Error loading book notes");
    }
});



// app.post("/add", async (req, res) => {
//   const item = req.body.newItem;
//   // items.push({title: item});
//   try {
//     await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/edit", async (req, res) => {
//   const item = req.body.updatedItemTitle;
//   const id = req.body.updatedItemId;

//   try {
//     await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.post("/delete", async (req, res) => {
//   const id = req.body.deleteItemId;
//   try {
//     await db.query("DELETE FROM items WHERE id = $1", [id]);
//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
