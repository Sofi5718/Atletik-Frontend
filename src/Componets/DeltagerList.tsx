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
        <div className="flex flex-col items-center justify-center p-8 bg-gray-100 m-auto max-w-3xl shadow-lg rounded-lg">
            <div className="mb-4 w-full">
                <input 
                    type="text" 
                    placeholder="Søg" 
                    onChange={handleSearch} 
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                />
            </div>
            <table className="w-full text-center bg-white shadow rounded-lg">
                <thead className="bg-indigo-600 text-white">
                    <tr>
                        <th className="py-2 px-4">Navn</th>
                        <th className="py-2 px-4">Alder</th>
                        <th className="py-2 px-4">Køn</th>
                        <th className="py-2 px-4">Klub</th>
                        <th className="py-2 px-4">Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    {deltagere.map((deltager) => (
                        <tr key={deltager.id} className="odd:bg-gray-50 even:bg-white">
                            <td className="py-2 px-4">{deltager.navn}</td>
                            <td className="py-2 px-4">{deltager.alder}</td>
                            <td className="py-2 px-4">{deltager.køn}</td>
                            <td className="py-2 px-4">{deltager.klub}</td>
                            <td className="py-2 px-4">
                                <Link 
                                    to="/form" 
                                    state={deltager} 
                                    className="text-indigo-600 hover:underline"
                                >
                                    Rediger
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    }
    