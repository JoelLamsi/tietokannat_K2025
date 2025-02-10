class Book {
    constructor(book_id, name, author, isbn) {
        this.book_id = book_id;
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}

// 1. Luotuun assosiatiivinen taulukko kirjoille
const books = [
    new Book(1, "Everything You Ever Wanted to Know", "Upton", "082305649x"),
    new Book(2, "Photography", "Vilppu", "205711499"),
    new Book(3, "Drawing Manual Vilppu", "Zelanshi", "1892053039"),
    new Book(4, "TBA", "Zelanshi", "0534613932"),
    new Book(5, "Shaping Space", "Speight", "0534613934"),
    new Book(6, "Art Since 1940", "Speight", "0131839780"),
    new Book(7, "Make it in Clay", "Stokstad", "0076417011"),
    new Book(8, "Art History Vol II & ala carte lab", "Stokstad", "205795617"),
    new Book(9, "Accounting Concepts", "Albrecht", "1111287856"),
    new Book(10, "Intermediate Accounting", "Stice", "0538479736"),
    new Book(11, "Management Info Systems", "Marakas", "9780073376813"),
    new Book(12, "Management", "Williams", "9780757524028"),
    new Book(13, "Leadership Wisdom of Jesus", "Manz", "9781609940041"),
    new Book(14, "Business Law Today", "Miller", "9780324786156"),
    new Book(15, "Management Info Systems", "Marakas", "9780073376813")
];

// 2. Taulukon books tietotyyppi .. object
console.log(typeof books);

// 3. Tulostetaan taulukon books sisältö
console.log(books);

// 4. Tulostetaan books taulukon ensimmäinen tietue
console.log(books[0].book_id + " " + books[0].name + " " + books[0].author + " " + books[0].isbn);

// 5. Tulostetaan books taulukon ensimmäisen kirjan nimi
console.log(books[0].name);

// 6. Tulosta books-listan tietueiden määrä
console.log(books.length);

// 7. Tulosta kaikkien kirjojen nimet
books.forEach(book => {
    console.log(book.name);
});