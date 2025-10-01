export interface EmployeeFile {
  id: number;
  document_type: string;
  filename: string;
  filesize_bytes: number;
  date_uploaded: number;
  real_name: string | null;
  created_by_employee: number;
  downloads: number;
  date_uploaded_formatted: string;
}

export interface EmployeeFilesResponse {
  files: EmployeeFile[];
}

export interface FileDownloadResponse {
  download_url: string;
}
