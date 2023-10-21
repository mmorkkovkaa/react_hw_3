import "./App.css";
import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form.jsx";

function App() {
    return(
        <Routes>
            <Route path='/' element={<Form/>} />
            <Route
                path="*"
                element={<span>Not found</span>}
            />
        </Routes>
    )
}

export default App
