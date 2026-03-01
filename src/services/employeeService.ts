import type { Employee } from "../types/employee";
import { EmployeeRepository } from "../apis/employeeRepository";

export interface ValidationError {
  field: string;
  message: string;
}

export interface CreateEmployeeResult {
  success: boolean;
  employee?: Employee;
  errors?: ValidationError[];
}

export class EmployeeService {
  private repository: EmployeeRepository;

  constructor(repository: EmployeeRepository) {
    this.repository = repository;
  }

  createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): CreateEmployeeResult {
    const errors: ValidationError[] = [];

    // Validate firstName
    if (firstName.trim().length < 3) {
      errors.push({
        field: "firstName",
        message: "First Name must be at least 3 characters",
      });
    }

    // Validate department exists
    if (!this.repository.departmentExists(departmentName)) {
      errors.push({
        field: "department",
        message: "Department does not exist",
      });
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    // Create employee if validation passes
    const employee = this.repository.createEmployee(firstName, lastName, departmentName);

    if (!employee) {
      return { success: false, errors: [] };
    }

    return {
      success: true,
      employee,
    };
  }
}
