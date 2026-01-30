import organizationData from "../../../data/organization.ts";
import styles from "./Organization.module.css";

export function Organization() {
    const leaders = organizationData.map(leader => {
        return (
            <li key={`${leader.firstName}-${leader.lastName}`} className={styles.leaderItem}>
                <span>{leader.role}</span>
                <span>{leader.firstName} {leader.lastName}</span>
            </li>
        );
    });

    return (
        <main>
            <section>
                <h1>Leadership and Management</h1>
                <ul className={styles.leaders}>
                    {leaders}
                </ul>
            </section>
        </main>
    );
}
