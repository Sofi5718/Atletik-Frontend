import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="bg-indigo-500 p-6 shadow-lg">
            <ul className="flex justify-between items-center">
                <li className="mr-6">
                    <NavLink to="/" end className="text-white font-semibold text-lg hover:text-gray-300 transition duration-300">
                        Home
                    </NavLink>
                </li>
                <li className="mr-6">
                    <NavLink to="deltagere" className="text-white font-semibold text-lg hover:text-gray-300 transition duration-300">
                        Deltagere
                    </NavLink>
                </li>
                <li className="mr-6">
                    <NavLink to="discipliner" className="text-white font-semibold text-lg hover:text-gray-300 transition duration-300">
                        Discipliner
                    </NavLink>
                </li>
                <li>
                    <NavLink to="resultater" className="text-white font-semibold text-lg hover:text-gray-300 transition duration-300">
                        Resultater
                    </NavLink>
                </li>
                <li>
                    <NavLink to="form" className="text-white font-semibold text-lg hover:text-gray-300 transition duration-300">
                        Tilføj deltager
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
