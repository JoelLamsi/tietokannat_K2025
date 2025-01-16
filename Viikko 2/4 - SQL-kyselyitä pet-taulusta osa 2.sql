use test;

-- 1) Minkä nimisiä omistajia taulussa on? Tulosta omistajan nimi vain kerran.

select distinct owner from pet;

-- 2) Tulosta lemmikkien nimet aakkosjärjestyksessä.

select name from pet order by name;

-- 3) Tulosta kaikki elossa olevat lemmikit

select * from pet where death is null;

-- 4) Tulosta kaikki omistajat, joiden nimi alkaa kirjaimella H

select distinct owner from pet where owner like 'H%';

-- 5) Tulosta lemmikkien nimet, joiden nimessä esintyy kirjaimet ff

select name from pet where name like '%ff%';

-- 6) Tulosta lemmikkien nimet, joiden nimessä on 4 kirjainta

select name from pet where length(name) = 4;