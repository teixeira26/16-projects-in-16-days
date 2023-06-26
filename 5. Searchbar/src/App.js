import { useState } from "react";
import { Background, EstilosGlobales, InputDiv } from "./styles";

function App() {
  const [active, setActive] = useState(false)
  const agrandar =()=>{
    if (active === false)setActive(true);
    else setActive(false)
  }
  return (
    <div>
      <EstilosGlobales></EstilosGlobales>
      <Background>
        <InputDiv active={active}>
        <button onClick={agrandar}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type={'text'} placeholder='Buscar...'></input>
        </InputDiv>
      </Background>
    </div>
  );
}

export default App;
