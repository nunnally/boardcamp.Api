# boardcamp
 

select * from "games" where "name" ilike '%banco%'

select games.*, categories.name as "categoryName" from games inner join "categories" on "games"."categoryId" = "categories"."id"
select "games".*, "categories"."name" as "categoryName" from "games" inner join "categories" on "games"."categoryId" = "categories"."id" where "games"."name" ilike '%Banco%'