import { useEffect, useState } from "react";
import { getDiscipliner } from "../services/apiFacade";
import { Disciplin } from "../services/entityFacade";

export default function DisciplinList() {
    const [discipliner, setDiscipliner] = useState<Disciplin[]>([]);
    useEffect(() => {
        getDiscipliner().then((data) => setDiscipliner(data));
    }, []);

    return (
        <div>
            <h1>Discipliner</h1>
            <ul>
                <li>Navn: 100 meter</li>
                <li>ResultatType: Tid</li>
            </ul>
        </div>
    );
}
