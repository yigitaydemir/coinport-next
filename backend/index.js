import express from "express";
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yusuf..99",
    database: "test"
})

app.use(express.json())

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get("/", (req, res) => {
    res.json("hello this is backend")
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"

    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }

        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)"
    const values = ["title from backend", "desc from backend", "cover pic from backend"]

    db.query(q, [values], (err, data) => {
        if(err){
            return err
        }

        console.log("the book is inserted")
        return res.json("book is created")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend")
})