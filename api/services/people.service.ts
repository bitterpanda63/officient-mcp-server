import { makeRequest } from '../utils/http-client.js';
import type {
  PeopleResponse,
  Person,
  PersonDetailResponse,
  ListPeopleOptions,
  ListAllPeopleOptions,
} from '../types/index.js';

/**
 * Get people from Officient (single page)
 */
export async function listPeople(options: ListPeopleOptions = {}): Promise<PeopleResponse> {
  const { page = 0, perPage = 10, searchTerm = '', teamFilter = '' } = options;

  return makeRequest<PeopleResponse>('/who_is_who/listPeople', {
    params: {
      page,
      per_page: perPage,
      search_term: searchTerm,
      team_filter: teamFilter,
    },
  });
}

/**
 * Get all people from Officient with pagination
 */
export async function listAllPeople(options: ListAllPeopleOptions = {}): Promise<Person[]> {
  const { perPage = 100, searchTerm = '', teamFilter = '' } = options;

  const allPeople: Person[] = [];
  let page = 0;
  let hasMore = true;

  while (hasMore) {
    const response = await listPeople({ page, perPage, searchTerm, teamFilter });

    if (response.people && response.people.length > 0) {
      allPeople.push(...response.people);
      page++;

      // If we got fewer results than perPage, we've reached the end
      if (response.people.length < perPage) {
        hasMore = false;
      }
    } else {
      hasMore = false;
    }
  }

  return allPeople;
}

/**
 * Get details of a specific person
 */
export async function getPersonDetail(personId: number): Promise<PersonDetailResponse> {
  return makeRequest<PersonDetailResponse>(`/who_is_who/${personId}/detailPerson`);
}
