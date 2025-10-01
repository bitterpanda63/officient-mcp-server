export interface DayOff {
  name: string;
  employee_id: number;
  country_code: string;
  duration_minutes: number;
  start_minutes: number;
  am_pm_hint: string;
  is_work_type: number;
  is_work_from_home_type: boolean;
}

export interface DayOffEntry {
  date: string;
  days_off: DayOff[];
}

export interface TeamInfo {
  id: number;
  name: string;
}

export interface PersonScheduleData {
  avatar: string;
  name: string;
  group_id: number;
  team: TeamInfo;
  country_code: string;
  company_days_off: any[];
  schedule: Record<string, number>;
}

export interface CoworkersDaysOffResponse {
  days_off_coworkers: DayOffEntry[];
  person_data: Record<string, PersonScheduleData>;
}

export interface CompanyDayOff {
  id: number;
  special_name: string;
  country_code: string;
  date: string;
  is_replacement: number;
  original_date: string;
}

export interface PersonalDayOff {
  id: number;
  date: string;
  type: string;
  custom_type_name: string;
  approved: number;
  start_minutes: number;
  duration_minutes: number;
  pending_deletion: number;
  am_pm_hint: string;
  replanable: number;
  color: string;
  interpretation: string;
  is_work_type: number;
  expose_to_coworkers: number;
}

export interface OwnDaysOffResponse {
  company_days_off: CompanyDayOff[];
  personal_days_off: PersonalDayOff[];
}
