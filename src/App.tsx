import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import DeltagerList from "./Componets/DeltagerList";
import DisciplinList from "./Componets/DisciplinList";
import Form from "./Componets/Form";
import Resultater from "./Componets/Resultater";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"Velkommen, du er logget ind som admin"} />
                <Route path="deltagere" element={<DeltagerList />} />
                <Route path="discipliner" element={<DisciplinList />} />
                <Route path="form" element={<Form />} />
                <Route path="resultater" element={<Resultater />} />
            </Routes>
        </div>
    );
}
