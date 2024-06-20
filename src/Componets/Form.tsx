import { useState } from "react";
import { Deltager } from "../services/entityFacade";
import { createDeltager } from "../services/apiFacade";

const EMPTY_DELTAGER: Deltager = {
    id: null,
    navn: "",
    alder: 0,
    køn: "mand",
    klub: "",
};

export default function Form() {
    const [formData, setFormData] = useState<Deltager>(EMPTY_DELTAGER);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("Form submitted");
        console.log(formData);
        createDeltager(formData);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-200 rounded-md w-80 m-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <label htmlFor="navn" className="block text-sm font-medium text-gray-700">
                    Navn
                </label>
                <input type="text" id="navn" name="navn" value={formData.navn} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />

                <label htmlFor="alder" className="block mt-4 text-sm font-medium text-gray-700">
                    Alder
                </label>
                <input
                    type="number"
                    id="alder"
                    name="alder"
                    value={formData.alder}
                    onChange={(e) => setFormData({ ...formData, [e.target.name]: Number(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                />

                <label htmlFor="køn" className="block mt-4 text-sm font-medium text-gray-700">
                    Køn
                </label>
                <select id="køn" name="køn" value={formData.køn} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option value="mand">Mand</option>
                    <option value="kvinde">Kvinde</option>
                </select>

                <label htmlFor="klub" className="block mt-4 text-sm font-medium text-gray-700">
                    Klub
                </label>
                <input type="text" id="klub" name="klub" value={formData.klub} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />

                <button
                    type="submit"
                    className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Tilføj
                </button>
            </form>
        </div>
    );
}
