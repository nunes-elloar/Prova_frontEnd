import React from 'react'
import img from "../image/do-utilizador.png"

function Perfil() {
  return (
    <div>
      <h1>Perfil</h1>
      <div className='perfil'>
      <img src={img} alt="" className='imagem'/>
      <h1>Nome: usuario</h1>
      <p>Sobre você:</p>
      <p>Gênero favorito: ...</p>
      <p>Livro favorito: ...</p>
      </div>
    </div>
  )
}

export default Perfil
