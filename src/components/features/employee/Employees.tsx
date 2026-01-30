import { useState } from "react";
import Formcomponents from "../Lab2/formcomponents";
import departmentData from "../../../data/departments";
import styles from "./Employees.module.css";

export function Employees() {
    const [departments, setDepartments] = useState(departmentData);

    const handleAddEmployee = (firstName: string, lastName: string, departmentName: string) => {
        if (!departmentName) {
            return;
        }

        setDepartments(prev => prev.map(d => (
            d.name === departmentName
                ? { ...d, employees: [...d.employees, { firstName, lastName }] }
                : d
        )));
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