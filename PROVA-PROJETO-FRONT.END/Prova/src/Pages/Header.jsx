import React from "react";
import { Link } from "react-router-dom";
import imagem from '../image/Logo.png'

function Header() {
    return (
        <nav className="barra">
  <Link to="/" className="link">Sugestões</Link> 
   <Link to="perfil" className="link">Perfil</Link> 
      <Link to="sobre" className="link">Sobre a Página</Link> 
      
      <div className="ln">

      <img className="logoS" src={imagem} alt="" style={{width: '100px', height: '100px', borderRadius: '50px'}} />
      <h1 className="nome">Between Covers Livrary</h1>
      </div>
            
        <hr className="hr"/>
        </nav>

    )
}
export default Header;