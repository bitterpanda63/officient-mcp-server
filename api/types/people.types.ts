export interface Person {
  id: number;
  name: string;
  avatar: string;
  team_name: string;
  email: string;
  role_name: string;
}

export interface PeopleResponse {
  people: Person[];
}

export interface CustomField {
  cf_name: string;
  value: string | null;
  custom_field_id: number;
  value_name: string | null;
  type: string;
  show_on_object_creation: number;
  priority: number;
  is_soft_required: number;
  expense_visibility: string;
  object_type: string;
  expense_required: string;
}

export interface TeamDetail {
  id: number;
  name: string;
}

export interface ReportsToDetails {
  person_id: number;
  person_name: string;
}

export interface PersonDetail {
  id: number;
  name: string;
  avatar: string;
  role_name: string;
  team_name: TeamDetail;
  reports_to_details: ReportsToDetails;
  department_name: string;
  phone: string;
  email: string;
  custom_fields: CustomField[];
}

export interface PersonDetailResponse {
  person: PersonDetail;
}

export interface ListPeopleOptions {
  page?: number;
  perPage?: number;
  searchTerm?: string;
  teamFilter?: string;
}

export interface ListAllPeopleOptions {
  perPage?: number;
  searchTerm?: string;
  teamFilter?: string;
}
