use sakila;

-- a) Tulosta DVD-elokuvien kielet aakkosjärjestyksessä.
select distinct l.name as language
from film f join language l on f.language_id = l.language_id
order by l.name;

-- b) Tulosta kaikkien niiden näyttelijöiden elokuvat, joiden sukunimi on Temple
select f.title
from actor a join film_actor fa on a.actor_id = fa.actor_id
join film f on fa.film_id = f.film_id
where a.last_name = 'Temple';

-- c) Tulosta elokuvassa ”Ghost Groundhog” näytelleet näyttelijät.
select a.first_name, a.last_name
from actor a join film_actor fa on a.actor_id = fa.actor_id
join film f on fa.film_id = f.film_id
where f.title = 'Ghost Groundhog';

-- d) Montako kauhuelokuvaa tietokannassa on?
select count(*) as amount_categories
from film f join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id
where c.name = 'Horror';

-- e) Tulosta kaikki kauhuelokuvat.
select f.title
from film f join film_category fc on f.film_id = fc.film_id
join category c on fc.category_id = c.category_id
where c.name = 'Horror';