import React, { useEffect, useState } from 'react';
import { ImgContainer, NumberContainer, GlobalStyle} from './style';

function App() {
  const [number, setNumber] = useState<number>(0)
 
  
  useEffect(()=>{
    
    if(number<100)setTimeout(()=>setNumber(number+1),30)
  },[number])
  
  
  // if (number === 100)clearInterval(a)
  return (
    <div className="App">
        <GlobalStyle></GlobalStyle>
        <ImgContainer number={number}>
          <img src='./assets/onepiece.jpg'/>
        </ImgContainer>
        <NumberContainer number={number}>
          <h1>{number}%</h1>
        </NumberContainer>
    </div>
  );
}

export default App;
