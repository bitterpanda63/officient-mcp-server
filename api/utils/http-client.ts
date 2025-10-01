import { AUTH_TOKEN, BASE_URL } from '../config.js';

if (!AUTH_TOKEN) {
  throw new Error('AUTH_TOKEN is not configured');
}

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, string | number>;
  body?: any;
}

export async function makeRequest<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = 'GET', params = {}, body } = options;

  const timestamp = Date.now();
  const url = new URL(`${BASE_URL}${endpoint}`);

  // Add timestamp and other params
  url.searchParams.append('t', timestamp.toString());
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });

  const headers: HeadersInit = {
    'Authselfservice': AUTH_TOKEN!,
    'Content-Type': 'application/json',
  };

  const requestInit: RequestInit = {
    method,
    headers,
  };

  if (body && method !== 'GET') {
    requestInit.body = JSON.stringify(body);
  }

  const response = await fetch(url.toString(), requestInit);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}
