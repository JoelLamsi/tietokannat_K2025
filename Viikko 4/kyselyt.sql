use arviointi;
select * from opintojakso;
select * from opiskelija;

select etunimi, sukunimi, arvosana, paivamaara, nimi
from arviointi join opiskelija on opiskelija.idOpiskelija = arviointi.idOpiskelija
join opintojakso on opintojakso.idOpintojakso = arviointi.idOpintojakso;