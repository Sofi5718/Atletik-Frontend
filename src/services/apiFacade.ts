import { Deltager } from "./entityFacade";
import { Disciplin } from "./entityFacade";

const API_URL = "http://localhost:8080";
const DELTAGER_URL = API_URL + "/deltagere";
const DISCIPLIN_URL = API_URL + "/discipliner";
const RESULTAT_URL = API_URL + "/resultater";

// fetches from the backend and returns them as a JSON object.
async function getDeltagere() {
    return fetch(DELTAGER_URL).then((res) => res.json());
}

async function getDiscipliner() {
    return fetch(DISCIPLIN_URL).then((res) => res.json());
}

async function createDeltager(deltager: Deltager) {
    return fetch(DELTAGER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(deltager),
    }).then((res) => res.json());
}

async function deleteDeltager(id: number) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch(`${DELTAGER_URL}/${id}`, options);

        if (!response.ok) {
            const errorDetails = await response.text();
            console.error(`Failed to delete participant: ${errorDetails}`);
            throw new Error("Failed to delete participant");
        }
        return response;
    } catch (error) {
        console.error(`Error occurred while deleting participant with ID ${id}:`, error);
        throw error;
    }
}

async function updateDeltager(deltager: Deltager) {
    return fetch(`${DELTAGER_URL}/${deltager.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(deltager),
    }).then((res) => res.json());
}

async function createDisciplin(disciplin: Disciplin) {
    console.log(disciplin);
    return fetch(DISCIPLIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(disciplin),
    }).then((res) => res.json());
}

async function updateDisciplin(disciplin: Disciplin) {
    return fetch(`${DISCIPLIN_URL}/${disciplin.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(disciplin),
    }).then((res) => res.json());
}

async function deleteDisciplin(id: number) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    const response = await fetch(`${API_URL}/discipliner/${id}`, options);

    if (!response.ok) {
        throw new Error("Failed to delete discipline");
    }
    return response;
}

async function getResultater() {
    return fetch(RESULTAT_URL).then((res) => res.json());
}

export { getDeltagere, getDiscipliner, createDeltager, updateDeltager, deleteDeltager, createDisciplin, updateDisciplin, deleteDisciplin, getResultater };
