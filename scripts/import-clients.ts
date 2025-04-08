import { google } from 'googleapis';
import { supabase } from '../src/lib/supabase';
import dotenv from 'dotenv';

dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;
const RANGE = 'Clients!A2:Z'; // Предполагаем, что данные начинаются со второй строки

async function getAuthClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: SCOPES,
  });
  return auth;
}

async function importClients() {
  try {
    const auth = await getAuthClient();
    const sheets = google.sheets({ version: 'v4', auth });
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      console.log('Нет данных для импорта');
      return;
    }

    const clients = rows.map(row => ({
      deal_number: row[0] || null,
      tariff: row[1] || null,
      amo_deal_id: row[2] || null,
      amo_client_id: row[3] || null,
      telegram_id: row[4] || null,
      avito_id: row[5] || null,
      vk_id: row[6] || null,
      phone: row[7] || null,
      name: row[8] || null,
      rental_start_date: row[9] ? new Date(parseInt(row[9]) * 1000).toISOString() : null,
      rental_end_date: row[10] ? new Date(parseInt(row[10]) * 1000).toISOString() : null,
      rental_end_date_normal: row[11] ? new Date(row[11]).toISOString() : null,
      passport_number: row[12] || null,
      address: row[13] || null,
      payment_date: row[14] ? new Date(row[14]).toISOString() : null,
    }));

    const { data, error } = await supabase
      .from('clients')
      .upsert(clients, {
        onConflict: 'deal_number',
        ignoreDuplicates: false,
      });

    if (error) {
      throw error;
    }

    console.log(`Успешно импортировано ${clients.length} клиентов`);
  } catch (error) {
    console.error('Ошибка при импорте:', error);
  }
}

importClients(); 