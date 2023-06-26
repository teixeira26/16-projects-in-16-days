import { setFips } from 'crypto';
import React, { useState } from 'react';
import {Button, ButtonesContainer, GlobalStyle, TutorialContainer, Animal} from'./style'

interface step {
  texto:string,
  color?:string,
  elemento:string,
}
const db = [
  {
    texto: 'Bienvenido a este increíble tutorial :)',
    elemento: 'nada'
  },
  {
    texto: 'Si presionas este butón podrás ver un señor Gato',
    elemento:'gato'
  },
  {
    texto: 'Si presionas este butón podrás ver un Perron',
    elemento:'perro'
  },
  {
    texto: 'Gracias por utilizar mi app XD',
    elemento:'nada'
  }
]
function App() {
  const [tutorial, setTutorial] = useState<boolean>(true);
  const [gato, setGato] = useState<boolean>(false)
  const [perro, setPerro] = useState<boolean>(false)
  const [steps, setStep] = useState<Array<step>>(db);
  const [actualStep, setActualStep] = useState<number>(0)
  const maullido = new Audio();
  maullido.src = './assets/gato.mp3'
  const ladrido = new Audio();
  ladrido.src = './assets/perro.mp3'
  const prev =()=>{
    if(actualStep>0)setActualStep(actualStep-1)
  }
  const next = ()=>{
    if(actualStep<steps.length-1)setActualStep(actualStep+1)
    else if(actualStep === steps.length-1)setTutorial(false)
  }
  const ladrar = ()=>{
    setPerro(true);
    ladrido.play()
    ladrido.addEventListener('ended', ()=>setPerro(false))
  }

  const maullar = ()=>{
    setGato(true);
    maullido.play()
    maullido.addEventListener('ended', ()=>setGato(false))
  }
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      {tutorial &&<TutorialContainer>
      <h1>{steps[actualStep].texto}</h1>
      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
        <button onClick={()=>setTutorial(false)}>skip</button>
      </div>
      
      </TutorialContainer>}
      <ButtonesContainer>
        <div>
        <Button onClick={maullar} name='gato' selected ={steps[actualStep].elemento === 'gato'}  >Click Me</Button>
        </div>
        <div>
        <Button onClick={ladrar} name='perro'  selected ={steps[actualStep].elemento === 'perro'}  >Click Me</Button>
        </div>
      </ButtonesContainer>

      {gato && <Animal src="./assets/gato.png" alt="" />}
      {perro && <Animal src="./assets/perro.png" alt="" />}
    </div>
  );
} 

export default App;
