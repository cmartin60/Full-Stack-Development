import departmentData from "../../data/departments";

export function Employees() {
    const departmentListElement = departmentData.map(d => {
        return <section key={d.name}>
            <h2>{d.name}</h2>
            <ul className="employees">
                {d.employees.map(e => <li key={`${e.firstName}-${e.lastName}`}>{e.firstName} {e.lastName}</li>)}
            </ul>
        </section>
    });

    return(
        <main>
            <section>
                <h1>Employees by Department</h1>
                {departmentListElement}
            </section>
        </main>
    )
}