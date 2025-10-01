import dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = 'https://selfservice.officient.io/api/selfservice/secured';
export const AUTH_TOKEN = process.env.OFFICIENT_TOKEN;

if (!AUTH_TOKEN) {
  throw new Error('OFFICIENT_TOKEN environment variable is required');
}
