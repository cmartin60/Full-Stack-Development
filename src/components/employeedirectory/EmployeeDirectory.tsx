import { useState } from 'react';
import { departments, employees as initialEmployees } from '../data';
import type { Employee } from '../../types/datatypes';
import Formcomponents from '../lab2.1/Formcomponents';

export default function EmployeeDirectory() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);

  const handleAddEmployee = (firstName: string, lastName: string, department: string) => {
    const newEmployee: Employee = { firstName, lastName, department };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <>
      <main id="employee-directory">
        {departments.map((department) => {
          const deptEmployees = employees.filter(employees => employees.department === department.name);
          return (
            <section key={department.name}>
              <h2>{department.name}</h2>
              <ul>
                {deptEmployees.map((employee) => (
                  <li key={`${employee.firstName}-${employee.lastName}`}>
                    {employee.firstName} {employee.lastName}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </main>
      <Formcomponents onAddEmployee={handleAddEmployee} departments={departments} />
    </>
  );
}
