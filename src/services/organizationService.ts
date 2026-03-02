import type { Employee } from "../types/employee";
import { OrganizationRepository } from "../apis/organizationRepository";

export interface ValidationError {
  field: string;
  message: string;
}

export interface CreatePersonResult {
  success: boolean;
  person?: Employee;
  errors?: ValidationError[];
}

export class OrganizationService {
  private repository: OrganizationRepository;

  constructor(repository: OrganizationRepository) {
    this.repository = repository;
  }

  createPerson(
    firstName: string,
    lastName: string,
    role: string
  ): CreatePersonResult {
    const errors: ValidationError[] = [];

    // Validate firstName
    if (firstName.trim().length < 3) {
      errors.push({
        field: "firstName",
        message: "First Name must be at least 3 characters",
      });
    }

    // Validate role is not already occupied
    if (this.repository.roleExists(role)) {
      errors.push({
        field: "role",
        message: "This role is already occupied",
      });
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    // Create person if validation passes
    const person = this.repository.create(firstName, lastName, role);

    if (!person) {
      return { success: false, errors: [] };
    }

    return {
      success: true,
      person,
    };
  }
}
