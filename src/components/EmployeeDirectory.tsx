import { departments, employees } from './data';

export default function EmployeeDirectory() {

  return (
    <main id="employee-directory">
      {departments.map((department) => {
        const deptEmployees = employees.filter(emp => emp.department === department.name);
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
  );
}
