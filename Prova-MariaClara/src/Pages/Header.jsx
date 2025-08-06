import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="barra">
  <Link className="link" to="/">Inicio</Link>  
  <Link className="link" to="perfil">Perfil</Link>      
  <Link className="link" to="sobre">Sobre a Página</Link>
        <hr/>
        </nav>

    )
}
export default Header;