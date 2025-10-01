import { makeRequest } from '../utils/http-client.js';
import type { CoworkersDaysOffResponse, OwnDaysOffResponse } from '../types/index.js';

/**
 * Get coworkers' days off for a specific month
 */
export async function listCoworkersDaysOff(
  year: number,
  month: number
): Promise<CoworkersDaysOffResponse> {
  return makeRequest<CoworkersDaysOffResponse>(`/days_off/coworkers/${year}/${month}/listDaysOff`);
}

/**
 * Get own days off for a specific year
 */
export async function listOwnDaysOff(year: number): Promise<OwnDaysOffResponse> {
  return makeRequest<OwnDaysOffResponse>(`/days_off/${year}/listDaysOff`);
}
