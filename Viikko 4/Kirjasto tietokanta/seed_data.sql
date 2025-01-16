use library;

insert into Author (firstName, lastName, bio, dateOfBirth) values
('J.K.', 'Rowling', 'British author, known for the Harry Potter series.', '1965-07-31'),
('George R.R.', 'Martin', 'American novelist and short story writer, famous for A Song of Ice and Fire.', '1948-09-20'),
('Agatha', 'Christie', 'British writer, known for her detective novels and short stories.', '1890-09-15'),
('Isaac', 'Asimov', 'Russian-American author and professor of biochemistry, known for science fiction.', '1920-01-02'),
('Jane', 'Austen', 'English novelist known for her works on romantic fiction.', '1775-12-16');

INSERT INTO Work (idWork, title, genre, publishedYear, idAuthor) VALUES
('Harry Potter and the Philosophers Stone', 'Fantasy', 1997, 1),
('A Game of Thrones', 'Fantasy', 1996, 2),
('Murder on the Orient Express', 'Mystery', 1934, 3),
('Foundation', 'Science Fiction', 1951, 4),
('Pride and Prejudice', 'Romance', 1813, 5);

INSERT INTO AuthorWork (idAuthor, idWork) VALUES
(1, 41), -- J.K. Rowling kirjoitti Harry Potterin
(2, 42), -- George R.R. Martin kirjoitti A Game of Thronesin
(3, 43), -- Agatha Christie kirjoitti Murder on the Orient Expressin
(4, 44), -- Isaac Asimov kirjoitti Foundationin
(5, 45); -- Jane Austen kirjoitti Pride and Prejudicen

INSERT INTO Book (idWork, ShelfLocation, quantity, IsAvailable) VALUES
(41, 'A1', 4, TRUE),
(41, 'A1', 4, FALSE),
(42, 'B3', 4, TRUE),
(43, 'C2', 4, FALSE),
(44, 'D4', 4, TRUE),
(45, 'E1', 4, TRUE);

INSERT INTO AudioBook (idWork, Narrator, Duration, IsAvailable) VALUES
(41, 'Stephen Fry', '08:17:00', TRUE),
(42, 'Roy Dotrice', '33:45:00', TRUE),
(43, 'David Suchet', '06:30:00', FALSE),
(44, 'Scott Brick', '09:00:00', TRUE),
(45, 'Rosamund Pike', '11:15:00', TRUE);

INSERT INTO Customer (Name, Email, Phone) VALUES
('John Doe', 'john.doe@example.com', '123456789'),
('Jane Smith', 'jane.smith@example.com', '987654321'),
('Alice Johnson', 'alice.johnson@example.com', '555123456'),
('Bob Brown', 'bob.brown@example.com', NULL),
('Charlie Davis', 'charlie.davis@example.com', '666777888');

INSERT INTO Borrow (idBook, idCustomer, BorrowDate, ReturnDate) VALUES
(10, 1, '2025-01-01', '2025-01-10'),
(8, 2, '2025-01-05', NULL), -- Kirja on edelleen lainassa
(9, 3, '2024-12-20', '2025-01-02'),
(7, 5, '2025-01-07', NULL); -- Kirja on edelleen lainassa
