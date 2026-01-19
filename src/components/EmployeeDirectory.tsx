import { departments } from './data';

export default function EmployeeDirectory() {

  return (
    <main id="employee-directory">
      {departments.map((department) => (
        <section key={department.name}>
          <h2>{department.name}</h2>
          <ul>
            {department.employees.map((employee) => (
              <li key={`${employee.firstName}-${employee.lastName}`}>
                {employee.firstName} {employee.lastName}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
