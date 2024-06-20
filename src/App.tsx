import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import DeltagerList from "./Componets/DeltagerList";
import DisciplinList from "./Componets/DisciplinList";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"hello"} />
                <Route path="deltagere" element={<DeltagerList />} />
                <Route path="addProduct" element={<DisciplinList />} />
            </Routes>
        </div>
    );
}
