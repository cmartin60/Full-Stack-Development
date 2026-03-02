import { useState, useEffect } from "react";
import NewPersonForm from "./NewPersonForm";
import styles from "./Organization.module.css";
import type { OrganizationRepository } from "../../../apis/organizationRepository";
import type { OrganizationService } from "../../../services/organizationService";
import type { Employee } from "../../../types/employee";

interface OrganizationProps {
  repository: OrganizationRepository;
  service: OrganizationService;
}

export function Organization({ repository, service }: OrganizationProps) {
    const [people, setPeople] = useState<Employee[]>([]);

    useEffect(() => {
      const allPeople = repository.getAll();
      setPeople(allPeople);
    }, [repository]);

    const handlePersonAdded = () => {
      // Update state from repository after successful creation
      setPeople([...repository.getAll()]);
    };

    const leaders = people.map(leader => {
        return (
            <li key={`${leader.firstName}-${leader.lastName}`} className={styles.leaderItem}>
                <span>{leader.firstName} {leader.lastName}</span>
                <span>{leader.role}</span>
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
                <NewPersonForm service={service} onPersonAdded={handlePersonAdded} />
            </section>
        </main>
    );
}
