import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="barra">
  <Link to="/" className="link">Sugestões</Link> 
   <Link to="perfil" className="link">Perfil</Link> 
     <Link to="mais" className="link">Mais...</Link> 
      <Link to="sobre" className="link">Sobre a Página</Link>
            
        <hr className="hr"/>
        </nav>

    )
}
export default Header;