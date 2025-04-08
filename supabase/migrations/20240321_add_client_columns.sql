-- Добавляем новые колонки в таблицу clients
ALTER TABLE clients
ADD COLUMN IF NOT EXISTS deal_number VARCHAR(50),
ADD COLUMN IF NOT EXISTS tariff VARCHAR(50),
ADD COLUMN IF NOT EXISTS amo_deal_id VARCHAR(50),
ADD COLUMN IF NOT EXISTS amo_client_id VARCHAR(50),
ADD COLUMN IF NOT EXISTS tg_id VARCHAR(50),
ADD COLUMN IF NOT EXISTS avito_id VARCHAR(50),
ADD COLUMN IF NOT EXISTS vk_id VARCHAR(50),
ADD COLUMN IF NOT EXISTS rental_start_date TIMESTAMP,
ADD COLUMN IF NOT EXISTS rental_end_date TIMESTAMP,
ADD COLUMN IF NOT EXISTS passport_number VARCHAR(50),
ADD COLUMN IF NOT EXISTS registration_address TEXT,
ADD COLUMN IF NOT EXISTS last_payment_date TIMESTAMP;

-- Создаем индексы для оптимизации поиска
CREATE INDEX IF NOT EXISTS idx_clients_deal_number ON clients(deal_number);
CREATE INDEX IF NOT EXISTS idx_clients_tg_id ON clients(tg_id);
CREATE INDEX IF NOT EXISTS idx_clients_avito_id ON clients(avito_id);
CREATE INDEX IF NOT EXISTS idx_clients_amo_deal_id ON clients(amo_deal_id); 