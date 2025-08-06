import  { useState, useEffect } from 'react';
import Perfil from './Perfil';

function PaginaDeCarregamento() {
  const [carregando, setCarregando] = useState(true);
  const [dado, setDado] = useState(null);

  useEffect(() => {
  
    setTimeout(() => {
      setDado("Conteúdo carregado!");
      setCarregando(false);
    }, 4000);
  }, []);

  return (
    <div>
      {carregando ? <div>Carregando...</div> : <div>{<Perfil/>}</div>}
    </div>
  );
}

export default PaginaDeCarregamento;