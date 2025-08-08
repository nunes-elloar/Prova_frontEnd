import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../Pages/Header.jsx";
import Perfil from "../Pages/Perfil.jsx";
import SobreApag from "../Pages/SobreApag.jsx";
import Inicio from "../Pages/Inicio.jsx";
import Erro from "../Pages/Erro.jsx";


const AppRouter = () => {
    return(
        <div className="container">

        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="sobre" element={<SobreApag/>}/>
            <Route path="*" element={<Erro/>}/>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default AppRouter
