use arviointi;

-- Opintojaksot:

select * from opintojakso;

-- Opiskelijat:

select * from opiskelija;

-- Suoritukset:

select o.etunimi, o.sukunimi, a.arvosana, a.paivamaara, oj.nimi
from arviointi a
join opiskelija o on a.idOpiskelija = o.idOpiskelija
join opintojakso oj on oj.idOpintojakso = a.idOpintojakso;