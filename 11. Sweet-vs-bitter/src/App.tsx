import React, { ImgHTMLAttributes, RefObject, useRef } from 'react';
import './App.css'
function App() {
  const container1 = useRef<HTMLDivElement>(null)
  const container2 = useRef<HTMLDivElement>(null)
  const img1 = useRef<HTMLImageElement>(null);
  const img2 = useRef<HTMLImageElement>(null);

  const cambiarWidth = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    console.log(e.target)
    
    if(img1.current === e.target){
      container1.current && container1.current.classList.add('crecer');
      container2.current&& container2.current.classList.add('disminuir')
    }
    else{
      container2.current && container2.current.classList.add('crecer')
      container1.current && container1.current.classList.add('disminuir')
    }
  }
  const volverAlNormal = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
    container1.current && container1.current.classList.remove('crecer');
    container1.current && container1.current.classList.remove('disminuir');
    container2.current && container2.current.classList.remove('crecer')
    container2.current && container2.current.classList.remove('disminuir')
  }
  return (
    <div className="App">
      <div className='container1'  ref={container1} onMouseEnter={(e)=>cambiarWidth(e)} onMouseLeave={(e)=>volverAlNormal(e)}>
        <img src="./assets/mateAmargo.jpeg"  ></img>
        <div className='fondo1' ref={img1}>
          <h1>Mate Amargo 😍​</h1>
          <button>Votar</button>
          </div>
      </div>

      <div className='container2' ref={container2}  onMouseEnter={(e)=>cambiarWidth(e)} onMouseLeave={(e)=>volverAlNormal(e)}>
        <img src="./assets/mateDulce.jpeg" ></img>
        <div className='fondo2'ref={img2}>
          <h1>Mate Dulce 🥰​​</h1>
          <button>Votar</button>
        </div>
      </div>
     
    </div>
  );
}

export default App;
