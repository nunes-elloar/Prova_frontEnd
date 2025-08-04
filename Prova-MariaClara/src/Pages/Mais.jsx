import React from 'react'
import { useState, useEffect } from 'react'

function Mais() {

  const [buscar, setBuscar] = useState('')
  const [livros, setLivros] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(" https://openlibrary.org/search.json");
        const dados = await response.json()
        setLivros(dados)
      } catch (error) {

      }
    }
  }, [])


  return (
    <div className='container_mais'>
      <h1>Procure o livro ideal para você aqui:</h1>
      <form>
        <input className='livro_pesquisa' type="text" placeholder='Pesquise' />
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Mais;
