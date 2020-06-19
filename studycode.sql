-- Create your SELECT statement here
-- Select age
SELECT age,

-- Returns number of rows for people count
COUNT(*) people_count

-- From people table
FROM people

-- Group by statement groups rows that have same values into summary rows
GROUP BY age

-- For this challenge you need to create a simple GROUP BY statement, 
-- you want to group all the people by their age and count the people who have the same age.
-- people table schema
-- id
-- name
-- age
-- select table schema
-- age [group by]
-- people_count (people count)
-- NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing.
