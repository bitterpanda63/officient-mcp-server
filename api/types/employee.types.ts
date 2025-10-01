export interface CustomBenefit {
  description: string;
  monthly_value: string;
  unity: string;
}

export interface CurrentWage {
  id: number;
  start_date: string;
  end_date: string | null;
  type: string;
  rate: string;
  currency: string;
  registration_country_code: string;
  sociale_lasten: string;
  vakantiegeld: string;
  '13_month': string;
  time_engagement_monday: number;
  time_engagement_tuesday: number;
  time_engagement_wednesday: number;
  time_engagement_thursday: number;
  time_engagement_friday: number;
  time_engagement_saturday: number;
  time_engagement_sunday: number;
  is_dynamic_schedule: number;
  created_at: number;
  updated_at: number;
  contract_uid: string;
  custom_benefits: CustomBenefit[];
  custom_taxes: any[];
  advances: any[];
}

export interface CurrentRole {
  name: string;
  start_date: string;
}

export interface CurrentReportsTo {
  person_id: number;
  person_name: string;
  start_date: string;
}

export interface EmployeeDetails {
  id: number;
  archived: number;
  name: string;
  email: string;
  team_id: number;
  onboarding_finished: number;
  default_assets_requested: number;
  avatar: string;
  synced_via_integration: boolean;
  sync_integration: string;
  place_of_birth: string;
  phone: string;
  emergency_contact_name: string;
  emergency_contact_relation: string;
  emergency_contact_phone: string;
  civil_state: string;
  partners_wage: string;
  nationality_country_code: string;
  preferred_language: string;
  language_dialect: string;
  gender: string;
  address_country_code: string;
  address_line_1: string;
  address_line_2: string;
  address_zipcode: string;
  address_city: string;
  address_state: string;
  bank_account_iban: string;
  bank_account_bic: string;
  bank_account_name: string;
  personal_email: string;
  social_security_nr: string;
  rijks_register_nummer: string;
  dependent_children: number;
  dependent_adults_below_65: number;
  dependent_adults_above_65: number;
  dependent_disabled_children: number;
  dependent_disabled_adults_below_65: number;
  dependent_disabled_adults_above_65: number;
  dependent_adults_needing_care_above_65: number;
  education_level: string;
  dob: string;
  first_name: string;
}

export interface Group {
  id: number;
  name: string;
  status: string;
  reseller_id: number;
  access: string;
  linked_integration_alias: string;
  active_integrations: string[];
  trusted_groups: any[];
  logo: string;
}

export interface EmployeeDetailsResponse {
  details: EmployeeDetails;
  group: Group;
  current_role: CurrentRole;
  current_reports_to: CurrentReportsTo;
  count_people_reporting_to_person: number;
  is_direct_manager: number;
  current_wage: CurrentWage;
  weekly_schedule_exceptions: any[];
  average_weekly_minutes: number;
  current_wage_total_costs: Record<string, any>;
  ess_disable_submit_expense: boolean;
  featureflags: Record<string, any>;
  is_allow_commute: boolean;
}
