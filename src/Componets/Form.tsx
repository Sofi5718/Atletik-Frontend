import { useState } from "react";
import { Deltager } from "../services/entityFacade";
import { createDeltager, updateDeltager, deleteDeltager } from "../services/apiFacade";
import { useNavigate, useLocation } from "react-router-dom";

const EMPTY_DELTAGER: Deltager = {
    id: null,
    navn: "",
    alder: 0,
    køn: "Mand",
    klub: "",
};

export default function Form() {
    const navigate = useNavigate();
    const deltagerToEdit = useLocation().state || null;
    const [formData, setFormData] = useState<Deltager>(deltagerToEdit || EMPTY_DELTAGER);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form submitted");
        console.log(formData);
        if (deltagerToEdit) {
            updateDeltager(formData);
        } else {
            createDeltager(formData);
        }
        navigate("/deltagere");
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleDelete() {
        if (formData.id) {
            try {
                await deleteDeltager(formData.id);
                navigate("/deltagere");
            } catch (error) {
                console.error("Failed to delete participant", error);
            }
        } else {
            console.error("No participant to delete");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow-lg w-80 m-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <label htmlFor="navn" className="block text-sm font-medium text-gray-700">
                    Navn
                </label>
                <input type="text" id="navn" name="navn" value={formData.navn} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />

                <label htmlFor="alder" className="block mt-4 text-sm font-medium text-gray-700">
                    Alder
                </label>
                <input
                    type="number"
                    id="alder"
                    name="alder"
                    value={formData.alder}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />

                <label htmlFor="køn" className="block mt-4 text-sm font-medium text-gray-700">
                    Køn
                </label>
                <select id="køn" defaultValue={formData.køn} name="køn" value={formData.køn} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Mand">Mand</option>
                    <option value="Kvinde">Kvinde</option>
                </select>

                <label htmlFor="klub" className="block mt-4 text-sm font-medium text-gray-700">
                    Klub
                </label>
                <input type="text" id="klub" name="klub" value={formData.klub} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />

                <div className="flex space-x-4">
                    <button
                        type="submit"
                        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Gem
                    </button>
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="mt-4 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Slet
                    </button>
                </div>
            </form>
        </div>
    );
}
