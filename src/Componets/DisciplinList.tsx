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
            await createDisciplin(formData);
        }
        setFormData(EMPTY_DISCIPLIN);
        setEditMode(false);
        getDiscipliner().then((data) => setDiscipliner(data));
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
        <div className="flex flex-col items-center justify-center p-5 bg-gray-200 m-auto">
            <form onSubmit={handleSubmit} className="mb-4 w-full">
                <label className="block">
                    Navn
                    <input
                        type="text"
                        name="navn"
                        value={formData.navn}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </label>
                <label className="block mt-2">
                    Resultat Type
                    <input
                        type="text"
                        name="resultatType"
                        value={formData.resultatType}
                        onChange={handleChange}
                        className="block w-full mt-1 p-2 border border-gray-300 rounded"
                    />
                </label>
                <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
                    {editMode ? "Opdater" : "Opret"} Disciplin
                </button>
            </form>
            <table className="text-center">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Resultat Type</th>
                        <th>Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    {discipliner.map((disciplin) => (
                        <tr key={disciplin.id}>
                            <td>{disciplin.navn}</td>
                            <td>{disciplin.resultatType}</td>
                            <td>
                                <button onClick={() => handleEdit(disciplin)} className="mr-2 p-1 bg-yellow-500 text-white rounded">
                                    Rediger
                                </button>
                                <button onClick={() => handleDelete(disciplin.id!)} className="p-1 bg-red-500 text-white rounded">
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