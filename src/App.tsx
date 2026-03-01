import { Routes, Route, Navigate } from "react-router";
import { Layout } from "./components/layout/Layout.tsx";
import { Employees } from "./components/features/employee/Employees.tsx";
import { Organization } from "./components/features/organization/Organization.tsx";
import { EmployeeRepository } from "./apis/employeeRepository";
import { EmployeeService } from "./services/employeeService";
import { useMemo } from "react";

function App() {
  const repository = useMemo(() => new EmployeeRepository(), []);
  const service = useMemo(() => new EmployeeService(repository), [repository]);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employees" replace />} />
          <Route path="employees" element={<Employees repository={repository} service={service} />} />
          <Route path="organization" element={<Organization />} />
        </Route>
      </Routes>
  );
}

export default App
