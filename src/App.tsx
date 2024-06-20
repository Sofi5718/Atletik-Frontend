import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
//import ProductForm from "./Componets/ProductForm";
//import ProductList from "./Componets/ProductList";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"hello"} />
                <Route path="products" element={<ProductList />} />
                <Route path="addProduct" element={<ProductForm />} />
            </Routes>
        </div>
    );
}
