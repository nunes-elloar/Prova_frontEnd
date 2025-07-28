import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="barra">
  <Link to="/">Inicio</Link> | <Link to="perfil">Perfil</Link>  | <Link to="mais">Mais...</Link> | <Link to="sobre">Sobre a Página</Link>
        <hr/>
        </nav>

    )
}
export default Header;