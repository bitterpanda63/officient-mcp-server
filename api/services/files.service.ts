import { makeRequest } from '../utils/http-client.js';
import type { EmployeeFilesResponse, FileDownloadResponse } from '../types/index.js';

/**
 * Get all salary slips
 */
export async function getAllSalarySlips(): Promise<EmployeeFilesResponse> {
  return makeRequest<EmployeeFilesResponse>('/employeeFiles', {
    params: {
      document_type: 'SalarySlip',
    },
  });
}

/**
 * Get download URL for a file (e.g., salary slip PDF)
 */
export async function getFileDownloadUrl(fileId: number): Promise<FileDownloadResponse> {
  return makeRequest<FileDownloadResponse>(`/files/${fileId}/download`);
}
