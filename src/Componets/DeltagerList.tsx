import { useEffect, useState } from "react";
import { getDeltagere } from "../services/apiFacade";
import { Deltager } from "../services/entityFacade";
import { Link } from "react-router-dom";

export default function DeltagerList() {
    const [deltagere, setDeltagere] = useState<Deltager[]>([]);
const [originalDeltagere, setOriginalDeltagere] = useState<Deltager[]>([]);

    useEffect(() => {
        getDeltagere().then((data) => {
            setDeltagere(data);
            setOriginalDeltagere(data);
        });
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue === "") {
            setDeltagere(originalDeltagere);
        } else {
            const searchResults = originalDeltagere.filter((deltager) => {
                return deltager.navn.toLowerCase().includes(searchValue) || deltager.klub.toLowerCase().includes(searchValue);
            });
            setDeltagere(searchResults);
        }
    };
    

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-200 m-auto">
            <div>
                <input type="text" placeholder="Søg" onChange={handleSearch} />
            </div>
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
