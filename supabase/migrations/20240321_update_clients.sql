-- Добавляем новые поля в таблицу clients
ALTER TABLE clients
ADD COLUMN IF NOT EXISTS deal_number VARCHAR(50),
ADD COLUMN IF NOT EXISTS tariff VARCHAR(50),
ADD COLUMN IF NOT EXISTS rental_start_date DATE,
ADD COLUMN IF NOT EXISTS rental_end_date DATE,
ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'active',
ADD COLUMN IF NOT EXISTS notes TEXT;

-- Создаем индекс для поиска по номеру сделки
CREATE INDEX IF NOT EXISTS idx_clients_deal_number ON clients(deal_number);

-- Создаем индекс для поиска по статусу
CREATE INDEX IF NOT EXISTS idx_clients_status ON clients(status);

-- Обновляем существующие записи
UPDATE clients
SET 
    deal_number = CASE 
        WHEN id = 1 THEN 'DEAL-001'
        WHEN id = 2 THEN 'DEAL-002'
        WHEN id = 3 THEN 'DEAL-003'
        ELSE 'DEAL-' || LPAD(id::text, 3, '0')
    END,
    tariff = CASE 
        WHEN id % 3 = 0 THEN 'Premium'
        WHEN id % 3 = 1 THEN 'Standard'
        ELSE 'Basic'
    END,
    rental_start_date = CURRENT_DATE - (id * 30),
    rental_end_date = CURRENT_DATE + ((12 - id) * 30),
    status = CASE 
        WHEN id % 5 = 0 THEN 'inactive'
        ELSE 'active'
    END,
    notes = CASE 
        WHEN id % 2 = 0 THEN 'Клиент с опытом аренды'
        ELSE 'Новый клиент'
    END
WHERE deal_number IS NULL;

-- Добавляем триггер для автоматического обновления updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_clients_updated_at ON clients;
CREATE TRIGGER update_clients_updated_at
    BEFORE UPDATE ON clients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 