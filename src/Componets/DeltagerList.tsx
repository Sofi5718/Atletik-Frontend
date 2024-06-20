import { useEffect, useState } from "react";
import { getDeltagere } from "../services/apiFacade";
import { Deltager } from "../services/entityFacade";
import { Link } from "react-router-dom";

export default function DeltagerList() {
    const [deltagere, setDeltagere] = useState<Deltager[]>([]);

    useEffect(() => {
        getDeltagere().then((data) => setDeltagere(data));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-200 m-auto">
            <table className="text-center">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Alder</th>
                        <th>Køn</th>
                        <th>Klub</th>
                    </tr>
                </thead>
                <tbody>
                    {deltagere.map((deltager) => (
                        <tr key={deltager.id}>
                            <td>{deltager.navn}</td>
                            <td>{deltager.alder}</td>
                            <td>{deltager.køn}</td>
                            <td>{deltager.klub}</td>
                            <td>
                                <Link to="/form" state={deltager}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
