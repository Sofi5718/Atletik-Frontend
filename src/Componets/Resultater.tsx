import { useState, useEffect } from "react";
import { Deltager, Disciplin, Resultat } from "../services/entityFacade";
import { getDeltagere, getDiscipliner, getResultater } from "../services/apiFacade";

export default function Resultater() {
    const [resultater, setResultater] = useState<Resultat[]>([]);
    const [deltagere, setDeltagere] = useState<Deltager[]>([]);
    const [discipliner, setDiscipliner] = useState<Disciplin[]>([]);

    useEffect(() => {
        getResultater().then((data) => setResultater(data));
        getDeltagere().then((data) => setDeltagere(data));
        getDiscipliner().then((data) => setDiscipliner(data));
    }, []);

    const getDeltagerName = (id) => {
        const deltager = deltagere.find((d) => d.id === id);
        return deltager ? deltager.navn : "Unknown";
    };

    const getDisciplinName = (id) => {
        const disciplin = discipliner.find((d) => d.id === id);
        return disciplin ? disciplin.navn : "Unknown";
    };

    return (
        <div className="flex flex-col items-center text-center justify-center p-8 bg-gray-100 m-auto max-w-3xl shadow-lg rounded-lg">
            <h1 className="text-3xl font-semibold mb-4">Resultater</h1>
            <table className="w-full bg-white rounded-lg shadow">
                <thead>
                    <tr>
                        <th className="bg-gray-100 border-b p-2">Deltager</th>
                        <th className="bg-gray-100 border-b p-2">Disciplin</th>
                        <th className="bg-gray-100 border-b p-2">Resultat</th>
                        <th className="bg-gray-100 border-b p-2">Rediger</th>
                        <th className="bg-gray-100 border-b p-2">Slet</th>
                    </tr>
                </thead>
                <tbody>
                    {resultater.map((resultat: Resultat) => (
                        <tr key={resultat.id}>
                            <td className="border-b p-2">{getDeltagerName(resultat.deltagerId)}</td>
                            <td className="border-b p-2">{getDisciplinName(resultat.disciplinId)}</td>
                            <td className="border-b p-2">{resultat.resultat}</td>
                            <td className="border-b p-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Rediger</button>
                            </td>
                            <td className="border-b p-2">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Slet</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
