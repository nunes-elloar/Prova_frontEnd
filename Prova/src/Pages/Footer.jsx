import React from 'react'
import Livro from "../image/Logo.png"
import insta from "../image/insta.png"
import face from "../image/face.png"
import tik from "../image/tik.png"
import tw from "../image/tw.png"

function Footer() {
  return (
    <div className='tudo'>
      <footer className='rodape'>
        <div className='tudoLN'>

   <img src={Livro} className='img' alt="" style={{width: "60px", height: "60px", borderRadius: "50%"}} />
   <h1 className='name'><strong>BETWENN COVERS LIVRARY</strong></h1>
        </div>
      </footer>

      <div className='redesociais'>
<h1 className='rd'><strong>Redes Sociais</strong></h1>
<nav>

<div className='iF'>
    <img src={insta} alt="instagram" style={{width:"30px", height:"30px"}} />
    <img src={face} alt="facebook" style={{width:"30px", height:"30px"}} />
</div>
<div className='xT'>
    <img src={tw} alt="X" style={{width:"30px", height:"30px"}}/>
    <img src={tik} alt="tiktok" style={{width:"30px", height:"30px"}}/>
</div>
</nav>

      </div>
    </div>
  )
}

export default Footer
