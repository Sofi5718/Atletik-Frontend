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
                    <NavLink to="deltagere" className="text-white hover:text-gray-300">
                        Deltagere
                    </NavLink>
                </li>
                <li>
                    <NavLink to="discipliner" className="text-white hover:text-gray-300">
                        Discipliner
                    </NavLink>
            
                </li>
                <li>
                    <NavLink to="form" className="text-white hover:text-gray-300">
                        Tilføj deltager
                    </NavLink>
            
                </li>

            </ul>
        </nav>
    );
}
