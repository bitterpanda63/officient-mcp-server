import { makeRequest } from '../utils/http-client.js';
import type { BudgetUsageResponse } from '../types/index.js';

/**
 * Get vacation day budgets for a specific year
 */
export async function getVacationDayBudgets(year: number): Promise<BudgetUsageResponse> {
  return makeRequest<BudgetUsageResponse>(`/days_off/${year}/listBudgetUsage`);
}
