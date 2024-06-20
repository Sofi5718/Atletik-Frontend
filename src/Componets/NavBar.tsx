import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-slate-600 p-6">
            <ul className="flex justify-between">
                <li>
                    <NavLink to="/" end className="text-white hover:text-gray-300">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="products" className="text-white hover:text-gray-300">
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="addProduct" className="text-white hover:text-gray-300">
                        Add Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
