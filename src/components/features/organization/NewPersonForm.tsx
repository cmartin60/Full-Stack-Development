import { useFormInput } from '../../../hooks/useFormInput';
import type { OrganizationService } from '../../../services/organizationService';

interface NewPersonFormProps {
  service: OrganizationService;
  onPersonAdded: () => void;
}

export default function NewPersonForm({ service, onPersonAdded }: NewPersonFormProps) {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const role = useFormInput('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = service.createPerson(firstName.value, lastName.value, role.value);

    if (!result.success && result.errors) {
      result.errors.forEach((error) => {
        if (error.field === 'firstName') {
          firstName.validate(() => error.message);
        } else if (error.field === 'role') {
          role.validate(() => error.message);
        }
      });
      return;
    }

    if (result.success) {
      firstName.reset();
      lastName.reset();
      role.reset();
      onPersonAdded();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Member</h3>

      <div>
        <label>
          First Name:{' '}
          <input
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
        <label>
          Last Name:{' '}
          <input
            name="lastName"
            value={lastName.value}
            onChange={lastName.onChange}
          />
        </label>
      </div>
      <br />

      <div>
        <label>
          Role:{' '}
          <input
            name="role"
            value={role.value}
            onChange={role.onChange}
          />
        </label>
        {role.message && (
          <p className="error-message">{role.message}</p>
        )}
      </div>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
