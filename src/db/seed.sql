-- Очистка существующих данных
TRUNCATE TABLE clients CASCADE;

-- Вставка тестовых данных
INSERT INTO clients (name, email, phone, created_at, updated_at) VALUES
('Иван Петров', 'ivan@example.com', '+7 (999) 123-45-67', NOW(), NOW()),
('Мария Сидорова', 'maria@example.com', '+7 (999) 234-56-78', NOW(), NOW()),
('Алексей Иванов', 'alex@example.com', '+7 (999) 345-67-89', NOW(), NOW()),
('Елена Смирнова', 'elena@example.com', '+7 (999) 456-78-90', NOW(), NOW()),
('Дмитрий Козлов', 'dmitry@example.com', '+7 (999) 567-89-01', NOW(), NOW()); 