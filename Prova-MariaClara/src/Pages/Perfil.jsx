import React, { useEffect, useState } from 'react'
import img from "../image/do-utilizador.png"
import PaginaDeCarregamento from './PaginaDecarregamento'

function Perfil() {

  const [carregando, setCarregando] = useState(true);
  const [dado, setDado] = useState(null);

  useEffect(() => {

    setTimeout(() => {
      setDado("Conteúdo carregado!");
      setCarregando(false);
    }, 2000);
  }, []);


  return (
    <>
      <div>
        {carregando ? <div><strong>Carregando...</strong></div> : <div>{
          <div className='container_perfil'>
            <h1>Usuário</h1>
            <div className='perfil'>
              <img src={img} alt="" className='imagem' />
              <div className='infor_perfil'>
                <h1>Nome: Cacau</h1>
                <p>Sobre você: Nada</p>
                <p>Gênero favorito: Romance</p>
                <p>Livro favorito: Iracema em cena</p>
              </div>

            </div>
          </div>
        }</div>}
      </div>



    </>

  )
}

export default Perfil
