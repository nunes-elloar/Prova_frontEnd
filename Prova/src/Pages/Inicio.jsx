import React from 'react'
import Livro1 from "../image/LV472645.webp"
import Livro2 from "../image/09788525067425_1.webp"
import Livro3 from "../image/1-67eed492626a5_mini.webp"

function Inicio() {
  return (
    <div className='container'>
      <div className='pesquisas'>
       <input type="text" className='pesquisa'  placeholder='Pesquisa'/>
      </div>
      
      

      <h1>Sugestões</h1>

   {/* CATERORIA 1 (ELLOAR)*/}
      <div className='categoria1'>
        <h1 className='h1C2'>Categoría: Cristã</h1>

        <div className='categ'>


        <div className='categoriaC'>

        <img src={Livro1} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>O Deus que Destrói Sonhos</h1>
        <p>O livro "O Deus que Destrói Sonhos", de Rodrigo Bibo, <br />
          aborda a ideia de que, muitas vezes, Deus pode "destruir" <br />
           os sonhos que temos para que possamos alcançar algo maior <br />
           e mais significativo em nossas vidas. O autor explora o <br />
            conceito de discipulado e como a busca pela vontade de Deus <br />
            pode envolver abrir mão de nossos próprios planos e desejos,<br />
             a fim de seguir o plano que Deus tem para nós. </p>
        </div>

        </div>

        <div className='categoriaC'>

        <img src={Livro3} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>Como se Tornar Um Cristão Inútil</h1>
        <p>O livro "O Deus que Destrói Sonhos", de Rodrigo Bibo, <br />
         aborda a ideia de que a busca pela vontade de Deus pode <br />
          levar ao abandono dos nossos próprios sonhos em favor <br />
           de algo maior: os planos e propósitos que Ele tem para <br />
           nós. O autor explora a perspectiva cristã de que Deus <br />
           não está comprometido com nossos sonhos, mas com Sua <br />
            Palavra e Seus propósitos, que muitas vezes são diferentes <br />
             dos nossos.  </p>
        </div>

        </div>

        </div>

      </div>
      <br />
<hr />
      {/* CATEGORIA 2 */}
      <div className='categoria2'>
        <h1 className='h1R3'>Categoría: Românce</h1>

<div className='categ'>

        <div className='categoriaR'>

        <img src={Livro2} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>A Cinco Passos de Você</h1>
           <p>"A Cinco Passos de Você" conta a história de Stella e Will, <br />
         dois jovens com fibrose cística, uma doença pulmonar grave. <br /> Eles se 
          apaixonam, mas precisam manter uma distância de seis <br /> pés para  evitar 
           a propagação de bactérias entre eles, já que <br />a doença é  contagiosa. 
            O filme explora o desafio de manter um <br /> relacionamento amoroso com essa
             limitação e a luta deles contra <br /> a doença, mostrando a importância de 
             aproveitar <br />  a vida apesar das dificuldades.  </p>
        </div>

        </div>
        <div className='categoriaR'>

        <img src={Livro2} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>Livro 2 Românce</h1>
           <p>"A Cinco Passos de Você" conta a história de Stella e Will, <br />
         dois jovens com fibrose cística, uma doença pulmonar grave. <br /> Eles se 
          apaixonam, mas precisam manter uma distância de seis <br /> pés para  evitar 
           a propagação de bactérias entre eles, já que <br />a doença é  contagiosa. 
            O filme explora o desafio de manter um <br /> relacionamento amoroso com essa
             limitação e a luta deles contra <br /> a doença, mostrando a importância de 
             aproveitar <br />  a vida apesar das dificuldades.  </p>
        </div>

        </div>
</div>

      </div>
      <br />
      <hr className='hr'/>

      {/* CATEGORIA 3 */}
       <div className='categoria3'>
        <h1 className='h1R2'  >Categoría: Terror</h1>
 <div className='categ' id='categ'>

        <div className='categoriaT2'>

        <img src={Livro2} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>A Cinco Passos de Você</h1>
        <p>"A Cinco Passos de Você" conta a história de Stella e Will, <br />
         dois jovens com fibrose cística, uma doença pulmonar grave. <br /> Eles se 
          apaixonam, mas precisam manter uma distância de seis <br /> pés para  evitar 
           a propagação de bactérias entre eles, já que <br />a doença é  contagiosa. 
            O filme explora o desafio de manter um <br /> relacionamento amoroso com essa
             limitação e a luta deles contra <br /> a doença, mostrando a importância de 
             aproveitar <br />  a vida apesar das dificuldades.  </p>
        </div>

        </div>
        <div className='categoriaT2'>

        <img src={Livro2} alt="livro1" className='imagemP' /> 

        <div>

        <h1 className='h1C'>A Cinco Passos de Você</h1>
     <p>"A Cinco Passos de Você" conta a história de Stella e Will, <br />
         dois jovens com fibrose cística, uma doença pulmonar grave. <br /> Eles se 
          apaixonam, mas precisam manter uma distância de seis <br /> pés para  evitar 
           a propagação de bactérias entre eles, já que <br />a doença é  contagiosa. 
            O filme explora o desafio de manter um <br /> relacionamento amoroso com essa
             limitação e a luta deles contra <br /> a doença, mostrando a importância de 
             aproveitar <br />  a vida apesar das dificuldades.  </p>
        </div>

        </div>

      </div>
 </div>

      </div>

   
  )
}

export default Inicio
