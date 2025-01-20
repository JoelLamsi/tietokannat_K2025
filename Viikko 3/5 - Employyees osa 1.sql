use employees;

-- a) Minkä nimisiä osastoja Employees-tietokannassa on?

select dept_name from departments order by dept_name;

-- b) Tulosta, (yhden kerran kukin) mitä nimikkeitä tietokannassa on.

select distinct title from titles;

-- c) Mikä on suurin ja pienin palkka?

select min(salary) as min_salary, max(salary) as max_salary from salaries; 

-- d) Mikä on keskimääräinen palkka?

select avg(salary) as avg_salary from salaries;

-- e) Tulosta kaikki työntekijät, joiden sukunimi on Facello.

select * from employees where last_name = 'Facello' order by first_name;

-- f) Kuinka moni työntekijä on syntynyt 1950-luvulla?

select count(*) as amount from employees where birth_date >= '1950-01-01' and birth_date < '1960-01-01';

-- g) Montako miestä ja montako naista työntekijöissä on?

select gender, count(*) as amount from employees group by gender;