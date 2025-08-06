import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../Pages/Header";
import Perfil from "../Pages/Perfil";
import SobreApag from "../Pages/SobreApag";
import Inicio from "../Pages/Inicio";
import Erro from "../Pages/Erro";
import '../App.css'

const AppRouter = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            
            <Route path="/" element={<Inicio/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="sobre" element={<SobreApag/>}/>
            <Route path="*" element={<Erro/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter
