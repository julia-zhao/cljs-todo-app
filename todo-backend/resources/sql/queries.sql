-- :name create-todo! :! :n
-- :doc creates a new user record
INSERT INTO todos
(item, completed)
VALUES (:item, :completed)

-- :name update-todo-item! :! :n
-- :doc updates an existing user record
UPDATE todos
SET item = :item
WHERE id = :id

-- :name update-todo-status! :! :n
-- :doc updates an existing user record
UPDATE todos
SET completed = :completed
WHERE id = :id

-- :name get-todo :? :1
-- :doc retrieves a user record given the id
SELECT * FROM todos
WHERE id = :id

-- :name delete-todo! :! :n
-- :doc deletes a user record given the id
DELETE FROM todos
WHERE id = :id

-- :name get-todos :? :*
-- :doc retrieves all todos
SELECT * FROM todos