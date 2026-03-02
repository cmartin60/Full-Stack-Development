import { Routes, Route, Navigate } from "react-router";
import { Layout } from "./components/layout/Layout.tsx";
import { Employees } from "./components/features/employee/Employees.tsx";
import { Organization } from "./components/features/organization/Organization.tsx";
import { EmployeeRepository } from "./apis/employeeRepository";
import { EmployeeService } from "./services/employeeService";
import { OrganizationRepository } from "./apis/organizationRepository";
import { OrganizationService } from "./services/organizationService";

function App() {
  const employeeRepository = new EmployeeRepository();
  const employeeService = new EmployeeService(employeeRepository);
  const organizationRepository = new OrganizationRepository();
  const organizationService = new OrganizationService(organizationRepository);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employees" replace />} />
          <Route path="employees" element={<Employees repository={employeeRepository} service={employeeService} />} />
          <Route path="organization" element={<Organization repository={organizationRepository} service={organizationService} />} />
        </Route>
      </Routes>
  );
}

export default App
