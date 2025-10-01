export interface BudgetType {
  sys_group_id: number;
  type_id: number;
  exception_id: number;
  minutes_approved: string;
  minutes_not_approved: string;
  days_approved: string;
  days_not_approved: string;
  type: string;
  color: string;
  is_work_type: number;
  absence_certificate_required: number;
  max_yearly_amount_days: string;
  max_yearly_amount_minutes: number;
  limitation: string;
  allowed_selfservice: number;
  enable_start_end_limits: number;
  default_enable_start_end_limits: number;
  interpretation: string;
  name: string;
  canonical_name: string;
  approval_needed: number;
  recup_overtime_type_selection: string;
  yearly_parameters_type_id: number;
  default_limitation: string;
  note_required: number;
  employee_allowed_negative_balance: number;
  transfer_unused_amounts: number;
  transfer_amounts_expiry_months: number;
  allowed_request_options: string[];
}

export interface Budgets {
  default_types: any[];
  custom_types: BudgetType[];
  rulesets: any[];
}

export interface BudgetUsageResponse {
  budgets: Budgets;
}
