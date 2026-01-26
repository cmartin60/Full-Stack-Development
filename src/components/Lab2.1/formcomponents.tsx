import { useState } from 'react';
import type { Department } from '../data';

interface FormComponentsProps {
  onAddEmployee: (firstName: string, lastName: string, department: string) => void;
  departments: Department[];
}

export default function formcomponents({ onAddEmployee, departments }: FormComponentsProps) {
  const [form, setForm] = useState({ firstName: '', lastName: '', department: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (form.firstName.length < 3) {
      newErrors.firstName = 'First Name must be at least 3 characters';
    }
    
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onAddEmployee(form.firstName, form.lastName, form.department);
      setForm({ firstName: '', lastName: '', department: '' });
    }
  };

  const errorMessage = (field: string) => errors[field] && (
    <p className="error-message">{errors[field]}</p>
  );

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Employee</h3>
      
      <div>
        <label id="firstName">
          First Name: <input
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
          />
        </label>
        {errorMessage('firstName')}
      </div>
      <br />
      
      <div>
        <label id="lastName">
          Last Name: <input
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      
      <div>
        <label id="department">Department:</label>
        <select
          id="department"
          name="department"
          value={form.department}
          onChange={handleChange}
        >
          <option value="">Select a Department</option>
          {departments.map((dept) => (
            <option key={dept.name} value={dept.name}>
              {dept.name}
            </option>
          ))}
        </select>
      </div>
      <br />
      
      <button type="submit">Submit</button>
    </form>
  );
}
