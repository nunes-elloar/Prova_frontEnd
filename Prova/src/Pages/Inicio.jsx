import React from 'react'
import Livro1 from "../image/LV472645.webp"
import Livro2 from "../image/09788525067425_1.webp"
import Livro3 from "../image/1-67eed492626a5_mini.webp"
import Livro4 from "../image/livroRomance.webp"
import Livro5 from "../image/livroTerror.webp"
import Livro6 from "../image/terrafamnormal1.jpg"
import imagem from "../icon/5832416.png"
import Livro7 from "../image/download.jfif"
import Livro8 from "../image/download2.jfif"

function Inicio() {
  return (
    <>
      <div className='pesquisa'>
        <img
          src={imagem}
          alt="Ícone de pesquisa"
          style={{ width: '20px', height: '20px' }}
        />
        <input
          type="text"
          placeholder='Pesquisa'
        />
      </div>

      <div className='container'>


        {/* CATERORIA 1 (ELLOAR)*/}
        <div className='categoria1'>
          <h1 className='h1C2' id='h1'><strong>Categoría: Cristã</strong></h1>

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

        {/* CATEGORIA 2 */}
        <div className='categoria2'>
          <h1 className='h1R3' id='h1'><strong>Categoría: Românce</strong></h1>

          <div className='categ'>

            <div className='categoriaR'>

              <img src={Livro2} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>A Cinco Passos de Você</h1>
                <p>"A Cinco Passos de Você" conta a história de Stella e Will, <br />
                  dois jovens com fibrose cística, uma doença pulmonar grave. <br />
                  Eles se apaixonam, mas precisam manter uma distância de <br />
                  seis pés para  evitar a propagação de bactérias entre eles, <br />
                  já que a doença é  contagiosa.  O filme explora o <br />
                  desafio de manter um relacionamento amoroso com <br />
                  essalimitação e a luta deles contra a doença, <br />
                  mostrando a importância de aproveitar a vida apesar <br />
                  das dificuldades.  </p>
              </div>

            </div>
            <div className='categoriaR'>

              <img src={Livro4} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>O Plano do Amor</h1>
                <p>Uma trajetória emocionante e surpreendente <br />
                  sobre o amor com A maiúsculo, o Amor de Deus. <br />
                  Com um enredo que enaltece a redenção através <br />
                  da Graça de Deus, o perdão imerecido, as boas <br />
                  amizades, onde os personagens sempre parecem <br />
                  ser nossos bons e velhos conhecidos, uma leitura <br />
                  incrivelmente edificante. </p>
              </div>

            </div>
          </div>

        </div>
        <br />


        {/* CATEGORIA 3 */}
        <div className='categoria3'>
          <h1 className='h1R2' id='h1'><strong>Categoría: Terror</strong></h1>
          <div className='categ' id='categ'>

            <div className='categoriaT2'>

              <img src={Livro5} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>O paciente</h1>
                <p>Numa série de publicações online, Parker H., um jovem <br />
                  e ambicioso psiquiatra, relata o seu terrível trabalho num <br />
                  hospital psiquiátrico e o seu esforço para curar um paciente <br />
                  desconcertante e muito perigoso: um homem de 40 anos que <br />
                  está internado desde os 6. </p>
              </div>

            </div>
            <div className='categoriaT2'>

              <img src={Livro6} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>A Terra Faminta</h1>
                <p> Costa Book Awards une drama familiar e fantasia em intrigante <br />
                  terror psicológicoQuando o filho de cinco anos de Juliette e Richard <br />
                  morre de repente após cometer uma série de atos inexplicáveis de <br />
                  violência — instigado, segundo ele, por uma voz misteriosa —, o <br />
                  mundo dos dois desmorona.  </p>
              </div>

            </div>

          </div>
        </div>

        {/* CATEGORIA 4 FICÇÃO */}
        <div className='categoria4'>
          <h1 className='h1C2' id='h1'><strong>Categoría: Ficção</strong></h1>

          <div className='categ'>


            <div className='categoriaC'>

              <img src={Livro7} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>Harry Potter e o Enigma do Príncipe</h1>
                <p>Em "Harry Potter e o Enigma do Príncipe", Harry <br />
                  retorna para seu sexto ano em Hogwarts, onde enfrenta <br />
                  desafios crescentes, tanto na escola quanto na luta <br />
                  contra Lord Voldemort. O livro explora o passado de <br />
                  Voldemort através de memórias compartilhadas por <br />
                  Dumbledore, revelando segredos obscuros e preparando <br />
                  Harry para a batalha final.</p>
              </div>

            </div>

            <div className='categoriaC' id='aba'>

              <img src={Livro8} alt="livro1" className='imagemP' />

              <div>

                <h1 className='h1C'>A Brumas de Avalon</h1>
                <p>"As Brumas de Avalon" reconta a lenda do Rei Arthur <br />
                  sob a perspectiva das mulheres de Avalon e Camelot, <br />
                  como Igraine, Viviane, Guinevere e, principalmente, <br />
                  Morgana. A história explora o conflito entre o cristi- <br />
                  anismo e a velha religião de Avalon, com foco no poder <br />
                  feminino e nas conspirações que moldam o destino de <br />
                  uma nação. </p>
              </div>

            </div>

          </div>

        </div>
      </div>



    </>
  )
}

export default Inicio
