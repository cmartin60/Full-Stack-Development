import { useFormInput } from '../../../hooks/useFormInput';
import type { Department } from '../../../types/department';

interface FormComponentsProps {
  onAddEmployee: (firstName: string, lastName: string, department: string) => void;
  departments: Department[];
}

export default function Formcomponents({ onAddEmployee, departments }: FormComponentsProps) {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const department = useFormInput('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isFirstNameValid = firstName.validate((value) =>
      value.trim().length >= 3 ? '' : 'First Name must be at least 3 characters'
    );
    const isDepartmentValid = department.validate((value) =>
      value ? '' : 'Department is required'
    );

    if (isFirstNameValid && isDepartmentValid) {
      onAddEmployee(firstName.value, lastName.value, department.value);
      firstName.reset();
      lastName.reset();
      department.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>
      
      <div>
        <label id="firstName">
          First Name: <input
            id="firstName"
            name="firstName"
            value={firstName.value}
            onChange={firstName.onChange}
          />
        </label>
        {firstName.message && (
          <p className="error-message">{firstName.message}</p>
        )}
      </div>
      <br />
      
      <div>
        <label id="lastName">
          Last Name: <input
            id="lastName"
            name="lastName"
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </label>
      </div>
      <br />
      
      <div>
        <label id="department">Department:</label>
        <select
          id="department"
          name="department"
          value={department.value}
          onChange={department.onChange}
        >
          <option value="">Select a Department</option>
          {departments.map((department) => (
            <option key={department.name} value={department.name}>
              {department.name}
            </option>
          ))}
        </select>
      </div>
        {department.message && (
          <p className="error-message">{department.message}</p>
        )}
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
}
