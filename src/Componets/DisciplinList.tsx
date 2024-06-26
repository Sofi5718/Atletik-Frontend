import { useEffect, useState } from "react";
import { getDiscipliner } from "../services/apiFacade";
import { Disciplin } from "../services/entityFacade";
import { createDisciplin, updateDisciplin, deleteDisciplin } from "../services/apiFacade";

const EMPTY_DISCIPLIN: Disciplin = {
    id: null,
    navn: "",
    resultatType: "",
};

export default function DisciplinList() {
    const [discipliner, setDiscipliner] = useState<Disciplin[]>([]);
    const [formData, setFormData] = useState<Disciplin>(EMPTY_DISCIPLIN);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        getDiscipliner().then((data) => setDiscipliner(data));
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (editMode) {
            await updateDisciplin(formData);
        } else {
            console.log(formData);
            const newDisciplin = await createDisciplin(formData);
            console.log(newDisciplin);
            setDiscipliner((prevDiscipliner) => [...prevDiscipliner, newDisciplin]);
        }
        setFormData(EMPTY_DISCIPLIN);
        setEditMode(false);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleEdit(disciplin: Disciplin) {
        setFormData(disciplin);
        setEditMode(true);
    }

    async function handleDelete(id: number) {
        await deleteDisciplin(id);
        getDiscipliner().then((data) => setDiscipliner(data));
    }
return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 m-auto max-w-3xl shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="mb-6 w-full bg-white p-6 rounded-lg shadow">
            <label className="block mb-4">
                <span className="text-gray-700 font-semibold">Navn</span>
                <input
                    type="text"
                    name="navn"
                    value={formData.navn}
                    onChange={handleChange}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </label>
            <label className="block mb-4">
                <span className="text-gray-700 font-semibold">Resultat Type</span>
                <input
                    type="text"
                    name="resultatType"
                    value={formData.resultatType}
                    onChange={handleChange}
                    className="block w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
            </label>
            <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
            >
                {editMode ? "Opdater" : "Opret"} Disciplin
            </button>
        </form>
        <table className="w-full text-center bg-white shadow rounded-lg">
            <thead className="bg-indigo-600 text-white">
                <tr>
                    <th className="py-2 px-4">Navn</th>
                    <th className="py-2 px-4">Resultat Type</th>
                    <th className="py-2 px-4">Handlinger</th>
                </tr>
            </thead>
            <tbody>
                {discipliner.map((disciplin) => (
                    <tr key={disciplin.id} className="odd:bg-gray-50 even:bg-white">
                        <td className="py-2 px-4">{disciplin.navn}</td>
                        <td className="py-2 px-4">{disciplin.resultatType}</td>
                        <td className="py-2 px-4">
                            <button
                                onClick={() => handleEdit(disciplin)}
                                className="mr-2 py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
                            >
                                Rediger
                            </button>
                            <button
                                onClick={() => handleDelete(disciplin.id!)}
                                className="py-1 px-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                            >
                                Slet
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
}
