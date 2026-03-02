import type { Department } from "../types/department";
import type { Employee } from "../types/employee";
import departmentData from "../data/departments";

export class EmployeeRepository {
  private departments: Department[];

  constructor() {
    // Initialize with a deep copy of department data
    this.departments = structuredClone(departmentData);
  }

  /**
   * Get all departments
   */
  getDepartments(): Department[] {
    return this.departments;
  }

  /**
   * Get all employees across all departments
   */
  getAllEmployees(): Employee[] {
    return this.departments.flatMap((dept) => dept.employees);
  }

  /**
   * Get employees by department name
   */
  getEmployeesByDepartment(departmentName: string): Employee[] {
    const department = this.departments.find((d) => d.name === departmentName);
    return department ? department.employees : [];
  }

  /**
   * Check if a department exists
   */
  departmentExists(departmentName: string): boolean {
    return this.departments.some((d) => d.name === departmentName);
  }

  /**
   * Create and add an employee to a department
   */
  createEmployee(
    firstName: string,
    lastName: string,
    departmentName: string
  ): Employee | null {
    const department = this.departments.find((d) => d.name === departmentName);

    if (!department) {
      return null;
    }

    const newEmployee: Employee = {
      firstName,
      lastName,
    };

    department.employees.push(newEmployee);
    return newEmployee;
  }
}
