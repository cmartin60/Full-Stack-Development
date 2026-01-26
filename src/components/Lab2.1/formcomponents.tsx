export default function Formcomponents() {
  return (
    <>
      <label id = "FirstName">
        First Name: <input name="FirstName" />
      </label>
      <br></br>
      <label id ="Department">Department:</label>
        <select name="Department" id="Department">
            <option value="Administration">Administration</option>
            <option value="Audit">Audit</option>
            <option value="Banking Operations">Banking Operations</option>
            <option value="Communications">Communications</option>
            <option value="Facilities">Facilities</option>
            <option value="Financial Services">Financial Services</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Information Technology">Information Technology</option>
            <option value="IT Technician">IT Technician</option>
    </select>
    </>
  );
}
