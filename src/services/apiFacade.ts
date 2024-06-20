/*import { Product } from "./entityFacade";
import { Product } from "./entityFacade";

const API_URL = "http://localhost:8080/";
const PRODUCT_URL = API_URL + "api/products";

//Product fetches the products from the backend and returns them as a JSON object.
async function getProducts() {
    return fetch(PRODUCT_URL).then((res) => res.json());
}

async function addProduct(product: Product) {
    return fetch(PRODUCT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    }).then((res) => res.json());
}

export { getProducts, addProduct };
*/