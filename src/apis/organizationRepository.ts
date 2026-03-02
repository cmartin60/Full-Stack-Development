import type { Employee } from "../types/employee";
import organizationData from "../data/organization";

export class OrganizationRepository {
  private people: Employee[];

  constructor() {
    // Initialize with a deep copy of organization data
    this.people = structuredClone(organizationData);
  }

  /**
   * Get all people in the organization
   */
  getAll(): Employee[] {
    return this.people;
  }

  /**
   * Check if a role is already occupied
   */
  roleExists(role: string): boolean {
    return this.people.some((p) => p.role === role);
  }

  /**
   * Create and add a person to the organization
   */
  create(firstName: string, lastName: string, role: string): Employee | null {
    const newPerson: Employee = {
      firstName,
      lastName,
      role,
    };

    this.people.push(newPerson);
    return newPerson;
  }
}
