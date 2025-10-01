import { makeRequest } from '../utils/http-client.js';
import type { EmployeeDetailsResponse } from '../types/index.js';

/**
 * Get employee details (current logged-in user)
 */
export async function getEmployeeDetails(): Promise<EmployeeDetailsResponse> {
  return makeRequest<EmployeeDetailsResponse>('/employeeDetails');
}
