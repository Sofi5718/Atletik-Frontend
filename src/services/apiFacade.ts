import { Deltager } from "./entityFacade";

const API_URL = "http://localhost:8080";
const DELTAGER_URL = API_URL + "/deltagere";
const DISCIPLIN_URL = API_URL + "/discipliner";

//Product fetches the products from the backend and returns them as a JSON object.
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

export { getDeltagere, getDiscipliner, createDeltager };
