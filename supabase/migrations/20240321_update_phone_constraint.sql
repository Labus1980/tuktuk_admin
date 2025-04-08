-- Удаляем ограничение NOT NULL для поля phone
ALTER TABLE clients ALTER COLUMN phone DROP NOT NULL;

-- Обновляем существующие записи, где phone is NULL
UPDATE clients 
SET phone = '00000000000' 
WHERE phone IS NULL; 