import React from 'react'
import  { useEffect, useState } from 'react'
import img from "../image/download.jpg"


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
      <div className='tudoPerfil'>
        {carregando ? <div><strong>Carregando...</strong></div> : <div>{
          <div className='container_perfil'>
            <h1>Usuário</h1>
            <div className='perfil'>
              <img src={img} alt="" className='imagem' />
              <div className='infor_perfil'>
                <h1 className='nomeU'> <strong>Nome: </strong>Izabela</h1>
                <p> <strong> Sobre você:</strong> Sou apaixonada por literatura.</p>
                <p> <strong> Gênero favorito:</strong> Romance</p>
                <p> <strong>Livro favorito:</strong> Iracema em cena</p>
              </div>

            </div>
          </div>
        }</div>}
      </div>



    </>

            )


}

            export default Perfil