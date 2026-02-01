import { Routes, Route, Navigate } from "react-router";
import { Layout } from "./components/layout/Layout.tsx";
import { Employees } from "./components/features/employee/Employees.tsx";
import { Organization } from "./components/features/organization/Organization.tsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/employees" replace />} />
          <Route path="employees" element={<Employees />} />
          <Route path="organization" element={<Organization />} />
        </Route>
      </Routes>
  );
}

export default App
