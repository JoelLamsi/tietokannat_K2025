use test;

select * from pet;

-- 1) Poistetaan Puffballin tiedot taulusta

delete from pet where name = 'Puffball';

-- 2) Muuta Bowserin syntymäajaksi 31.8.1998

update pet set birth = '1998-08-31' where name = 'Bowser';

-- 3) Chirpy on kuollut 15.9.2000. Lisää tämä tieto tauluun.alter

update pet set death = '2000-09-15' where name = 'Chirpy';

-- 4) Tulosta kaikki lemmikit, jotka ovat syntyneet 1990-luvulla

select * from pet where birth >= '1990-01-01' and birth < '2000-01-01';

-- 5) Tulosta kaikki miespuoliset koirat

select * from pet where sex = 'm' and species = 'dog';

-- 6) Tulosta ainoastaan kaikkien miespuolisten koirien nimet

select name from pet where sex = 'm' and species = 'dog';

-- 7) Tulosta kaikkien miespuolisten koirien nimi ja omistajan nimi

select name, owner from pet sex = 'm' and species = 'dog';