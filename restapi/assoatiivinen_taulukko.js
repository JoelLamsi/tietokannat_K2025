// 1. Luotuun assosiatiivinen taulukko kirjoille
const books = [
    { book_id: 1, name: "Everything You Ever Wanted to Know", author: "Upton", isbn: "082305649x" },
    { book_id: 2, name: "Photography", author: "Vilppu", isbn: "205711499" },
    { book_id: 3, name: "Drawing Manual Vilppu", author: "Zelanshi", isbn: "1892053039" },
    { book_id: 4, name: "TBA", author: "Zelanshi", isbn: "0534613932" },
    { book_id: 5, name: "Shaping Space", author: "Speight", isbn: "0534613934" },
    { book_id: 6, name: "Art Since 1940", author: "Speight", isbn: "0131839780" },
    { book_id: 7, name: "Make it in Clay", author: "Stokstad", isbn: "0076417011" },
    { book_id: 8, name: "Art History Vol II & ala carte lab", author: "Stokstad", isbn: "205795617" },
    { book_id: 9, name: "Accounting Concepts", author: "Albrecht", isbn: "1111287856" },
    { book_id: 10, name: "Intermediate Accounting", author: "Stice", isbn: "0538479736" },
    { book_id: 11, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" },
    { book_id: 12, name: "Management", author: "Williams", isbn: "9780757524028" },
    { book_id: 13, name: "Leadership Wisdom of Jesus", author: "Manz", isbn: "9781609940041" },
    { book_id: 14, name: "Business Law Today", author: "Miller", isbn: "9780324786156" },
    { book_id: 15, name: "Management Info Systems", author: "Marakas", isbn: "9780073376813" }
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