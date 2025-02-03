use library;

desc book;

select * from borrow;

-- Kenellä on kirjoja lainassa
select c.name, w.title, brw.borrowDate, brw.returnDate from customer c
join borrow brw on c.idCustomer = brw.idCustomer
join book bk on brw.idBook = bk.idBook
join work w on bk.idWork = w.idWork
where brw.returnDate is null;

-- Lainattavissa olevat äänikirjat
select ab.idAudioBook, w.title, w.genre, w.publishedYear, ab.narrator, ab.duration, ab.quantity from work w
join audioBook ab on w.idWork = ab.idWork
where ab.isAvailable = true;
