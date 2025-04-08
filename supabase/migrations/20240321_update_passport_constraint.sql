-- Удаляем ограничение NOT NULL для поля passport_number
ALTER TABLE clients ALTER COLUMN passport_number DROP NOT NULL;

-- Обновляем существующие записи, где passport_number is NULL
UPDATE clients 
SET passport_number = '0000000000' 
WHERE passport_number IS NULL; 