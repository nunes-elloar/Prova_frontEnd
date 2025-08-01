import React from 'react'
import img from "../image/do-utilizador.png"

function Perfil() {
  return (
    <div className='container_perfil'>
      <h1>Perfil</h1>
      <div className='perfil'>
      <img src={img} alt="" className='imagem'/>
      <div className='inform_perfil'>
      <h1>Nome: Cacau</h1>
      </div>

      <div className='inform_perfil'>
      <p>Sobre você: Clara</p>
      </div>

      <div className='inform_perfil'>
      <p>Gênero favorito: Romance</p>
      </div>

      <div className='inform_perfil'>
      <p>Livro favorito: Iracema em cena</p>
      </div>

      </div>
    </div>
  )
}

export default Perfil
