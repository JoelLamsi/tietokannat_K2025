use employees;

-- a) Tulosta kymmenen aakkosjärjestyksessä ensimmäisen työntekijän tiedot sukunimen mukaan lajiteltuna.
select * from employees order by last_name limit 10;

-- b) Sama kuten edellä, mutta sukunimen ja etunimen mukaan lajiteltuna.
select * from employees order by last_name, first_name limit 10;

-- c) Tulosta viiden viimeksi palkatun työntekijän tiedot.
select * from employees order by hire_date desc limit 5;

-- d) Kenellä on suurin palkka? Tulosta etunimi, sukunimi ja palkka.
select first_name, last_name, salary from employees join salaries
on employees.emp_no = salaries.emp_no
where salaries.salary = (select max(salary) from salaries);

-- e) Kenellä on pienin palkka? Tulosta etunimi, sukunimi ja palkka.
select first_name, last_name, salary from employees join salaries
on employees.emp_no = salaries.emp_no
where salaries.salary = (select min(salary) from salaries);

-- f) Tulosta työntekijät (etunimi, sukunimi, palkka), jotka ansaitsevat yli 150000.
select first_name, last_name, salary from employees
join salaries on employees.emp_no = salaries.emp_no
where salaries.salary > 150000;

-- g) Kuinka monta työntekijää työskentelee myynnissä (Sales)? Entä markkinoinnissa (Marketing)?
select dept_name, count(e.emp_no) as emp_count from departments d
join dept_emp de on d.dept_no = de.dept_no
join employees e on de.emp_no = e.emp_no
where d.dept_name = 'Sales';

select dept_name, count(e.emp_no) as emp_count from departments d
join dept_emp de on d.dept_no = de.dept_no
join employees e on de.emp_no = e.emp_no
where d.dept_name = 'Marketing';

-- h) Tulosta kaikkien osastonjohtajien (Department Managers) etunimi, sukunimi ja osasto, jolla työskentelee.
select e.first_name, e.last_name, d.dept_name from employees e
join dept_manager dm on e.emp_no = dm.emp_no
join departments d on dm.dept_no = d.dept_no;

-- i) Mikä on myynnissä työskentelevien keskipalkka? Entä markkinoinnissa?
select d.dept_name, avg(s.salary) as average_salary
from departments d join dept_emp de on d.dept_no = de.dept_no
join salaries s on de.emp_no = s.emp_no
where d.dept_name in ('Marketing', 'Sales')
group by d.dept_name;