use arviointi;
select * from opintojakso;
select * from opiskelija;

select etunimi, sukunimi, arvosana, paivamaara, nimi
from arviointi join opiskelija on opiskelija.idOpiskelija = arviointi.idOpiskelija
join opintojakso on opintojakso.idOpintojakso = arviointi.idOpintojakso;

-- Tehtävä 10 kyselyt

-- 1) Tulosta kaikki opiskelijat, joilla on tietokannassa hylätty arvosana
select o.etunimi, o.sukunimi, op.nimi as kurssi
from opiskelija o join arviointi a on o.idOpiskelija = a.idOpiskelija
join opintojakso op on a.idOpintojakso = op.idOpintojakso
where a.arvosana = 0;

-- 2) Tulosta kaikki Fysiikka 3-kurssin hyväksytysti suorittaneet
select o.etunimi, o.sukunimi
from opiskelija o join arviointi a on o.idOpiskelija = a.idOpiskelija
join opintojakso op on a.idOpintojakso = op.idOpintojakso
where a.arvosana >= 1 and op.nimi = 'Fysiikka 3';

-- 3) Mille kursseille Hessu on osallistunut?
select op.nimi
from opintojakso op join arviointi a on op.idOpintojakso = a.idOpintojakso
join opiskelija o on a.idOpiskelija = o.idOpiskelija
where o.etunimi = 'Hessu' and o.sukunimi = 'Hopo';

-- 4) Mikä on Akun opintosuoritusten keskiarvo?
select avg(a.arvosana) as keskiarvo_arvosana
from arviointi a
join opiskelija o on a.idOpiskelija = o.idOpiskelija
where o.etunimi = 'Roope' and o.sukunimi = 'Ankka';

-- 5) Millä opintojaksoilla ei ole yhtään merkintää?
select op.nimi
from opintojakso op
left join arviointi a on op.idOpintojakso = a.idOpintojakso
where idArviointi is null;