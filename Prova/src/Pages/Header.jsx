import React from "react";
import { Link } from "react-router-dom";
import imagem from '../image/Logo.png'

function Header() {
    return (
        <nav className="barra">
  <Link to="/" className="link">Sugestões</Link> 
   <Link to="perfil" className="link">Perfil</Link> 
     <Link to="mais" className="link">Mais...</Link> 
      <Link to="sobre" className="link">Página</Link> 
      <img src={imagem} alt="" style={{width: '100px', height: '100px', borderRadius: '50px'}} />
            
        <hr className="hr"/>
        </nav>

    )
}
export default Header;