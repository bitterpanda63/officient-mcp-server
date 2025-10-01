# Officient API Client (TypeScript)

This directory contains a fully typed TypeScript client for the Officient API.

## Structure

```
api/
├── config.ts                 # API configuration and authentication
├── index.ts                  # Main export file
├── types/                    # TypeScript type definitions
│   ├── budgets.types.ts     # Budget-related types
│   ├── daysoff.types.ts     # Days off types
│   ├── employee.types.ts    # Employee types
│   ├── files.types.ts       # File types
│   ├── people.types.ts      # People/person types
│   └── index.ts             # Type exports
├── services/                 # API service functions
│   ├── budgets.service.ts   # Budget operations
│   ├── daysoff.service.ts   # Days off operations
│   ├── employee.service.ts  # Employee operations
│   ├── files.service.ts     # File operations
│   ├── people.service.ts    # People operations
│   └── index.ts             # Service exports
└── utils/                    # Utility functions
    └── http-client.ts       # HTTP client wrapper
```

## Usage

### Import everything

```typescript
import * as Officient from './api';

// Use services
const people = await Officient.listAllPeople();
const employee = await Officient.getEmployeeDetails();
```

### Import specific services

```typescript
import { listPeople, getPersonDetail } from './api/services/people.service';
import type { Person, PersonDetail } from './api/types/people.types';

const response = await listPeople({ page: 0, perPage: 20 });
const people: Person[] = response.people;

const detail = await getPersonDetail(12345);
const person: PersonDetail = detail.person;
```

## Available Services

### People Service

```typescript
import { listPeople, listAllPeople, getPersonDetail } from './api/services/people.service';

// Get a single page of people
const page = await listPeople({ page: 0, perPage: 10, searchTerm: 'John' });

// Get all people with automatic pagination
const allPeople = await listAllPeople({ searchTerm: 'Developer' });

// Get person details
const personDetail = await getPersonDetail(12345);
```

### Employee Service

```typescript
import { getEmployeeDetails } from './api/services/employee.service';

// Get current logged-in employee details
const employee = await getEmployeeDetails();
```

### Days Off Service

```typescript
import { listCoworkersDaysOff, listOwnDaysOff } from './api/services/daysoff.service';

// Get coworkers' days off for October 2025
const coworkersDaysOff = await listCoworkersDaysOff(2025, 10);

// Get own days off for 2025
const myDaysOff = await listOwnDaysOff(2025);
```

### Files Service

```typescript
import { getAllSalarySlips, getFileDownloadUrl } from './api/services/files.service';

// Get all salary slips
const salarySlips = await getAllSalarySlips();

// Get download URL for a specific file
const downloadUrl = await getFileDownloadUrl(16945305);
console.log(downloadUrl.download_url);
```

### Budgets Service

```typescript
import { getVacationDayBudgets } from './api/services/budgets.service';

// Get vacation day budgets for 2025
const budgets = await getVacationDayBudgets(2025);
```

## Configuration

Set the `OFFICIENT_TOKEN` environment variable in a `.env` file:

```env
OFFICIENT_TOKEN=your_token_here
```

## Type Safety

All API responses are fully typed. TypeScript will provide autocomplete and type checking:

```typescript
import { listPeople } from './api/services/people.service';

const response = await listPeople();

// TypeScript knows the structure
response.people.forEach(person => {
  console.log(person.name);      // ✓ Valid
  console.log(person.email);     // ✓ Valid
  console.log(person.invalid);   // ✗ TypeScript error
});
```

## Error Handling

All services throw errors on failed requests:

```typescript
try {
  const people = await listPeople();
} catch (error) {
  console.error('Failed to fetch people:', error.message);
}
```

## Development

The TypeScript files are compiled to JavaScript in the `dist` directory:

```bash
# Build TypeScript files
npm run build

# Watch mode for development
npm run dev
```
