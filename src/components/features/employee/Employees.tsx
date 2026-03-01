import { useState, useEffect } from "react";
import Formcomponents from "../Lab2/formcomponents";
import styles from "./Employees.module.css";
import type { EmployeeRepository } from "../../../apis/employeeRepository";
import type { EmployeeService } from "../../../services/employeeService";
import type { Department } from "../../../types/department";

interface EmployeesProps {
  repository: EmployeeRepository;
  service: EmployeeService;
}

export function Employees({ repository, service }: EmployeesProps) {
    const [departments, setDepartments] = useState<Department[]>([]);

    useEffect(() => {
      const depts = repository.getDepartments();
      setDepartments(depts);
    }, [repository]);

    const handleAddEmployee = (firstName: string, lastName: string, departmentName: string) => {
        const result = service.createEmployee(firstName, lastName, departmentName);
        
        if (result.success) {
          // Update local state from repository
          setDepartments([...repository.getDepartments()]);
        } else {
          console.error('Failed to create employee:', result.errors);
        }
    };

    const departmentListElement = departments.map(d => {
        return <section key={d.name}>
            <h2>{d.name}</h2>
            <ul className={styles.employees}>
                {d.employees.map(e => <li key={`${e.firstName}-${e.lastName}`}>{e.firstName} {e.lastName}</li>)}
            </ul>
        </section>
    });

    return(
        <main>
            <section>
                <h1>Employees by Department</h1>
                {departmentListElement}
                <Formcomponents onAddEmployee={handleAddEmployee} departments={departments} />
            </section>
        </main>
    )
}