import peopleData from "@/content/people.json";
import departmentsData from "@/content/departments.json";
import type { Department, Person } from "@/lib/types";

export const people = peopleData as Person[];
export const departments = departmentsData as Department[];

export function getFeaturedPeople(): Person[] {
  return people.filter((p) => p.featured);
}

export function getDepartment(id: string): Department | undefined {
  return departments.find((d) => d.id === id);
}

export function getPeopleByDepartment(departmentId: string): Person[] {
  return people.filter((p) => p.department === departmentId);
}

export function getPerson(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}
