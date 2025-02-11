require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/books', async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM Book");
        res.status(200).json({ books: results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/books", async (req, res) => {
    const { name, author, isbn } = req.body;
    try {
        const [result] = await db.query("INSERT INTO Book (name, author, isbn) VALUES (?, ?, ?)", [name, author, isbn]);
        res.json({ id: result.insertId, name, author, isbn });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    const { name, author, isbn } = req.body;
    try {
        await db.query("UPDATE book SET name=?, author=?, isbn=? WHERE id_book=?", [name, author, isbn, id]);
        res.json({ message: "Book updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM book WHERE id_book=?", [id]);
        res.json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/borrowers', async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM Borrower");
        res.status(200).json({ borrowers: results });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/borrowers", async (req, res) => {
    const { fname, lname, streetaddress } = req.body;
    try {
        const [result] = await db.query("INSERT INTO Borrower (fname, lname, streetaddress) VALUES (?, ?, ?)", [fname, lname, streetaddress]);
        res.json({ id: result.insertId, fname, lname, streetaddress });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/borrowers/:id", async (req, res) => {
    const { id } = req.params;
    const { fname, lname, streetaddress } = req.body;
    try {
        await db.query("UPDATE borrower SET fname=?, lname=?, streetaddress=? WHERE id_borrower=?", [fname, lname, streetaddress, id]);
        res.json({ message: "Borrower updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/borrowers/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM borrower WHERE id_borrower=?", [id]);
        res.json({ message: "Borrower deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});