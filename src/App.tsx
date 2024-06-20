import { Route, Routes } from "react-router-dom";
import NavBar from "./Componets/NavBar";
import DeltagerList from "./Componets/DeltagerList";
import DisciplinList from "./Componets/DisciplinList";
import Form from "./Componets/Form";

export default function App() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={"hello"} />
                <Route path="deltagere" element={<DeltagerList />} />
                <Route path="addProduct" element={<DisciplinList />} />
                <Route path="form" element={<Form />} />
            </Routes>
        </div>
    );
}
