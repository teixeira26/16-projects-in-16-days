import React, { useEffect, useRef } from 'react';
import './test.css';
function App() {
  const unicornio= useRef<HTMLImageElement>(null)
  const cavallosContainer:any = useRef()
  const guia:any = useRef()

  const observadorDiv = new IntersectionObserver(()=>{
    let algo = document.createElement('img')
    algo.src='./assets/unicornio.gif';
    algo.classList.add('test')
    cavallosContainer.current.appendChild(algo)
    Array.from(cavallosContainer.current.childNodes).forEach((x:any)=>obervador.observe(x))
  }, 
  {root:null,
  rootMargin:'500px 0px 0px 0px',
  threshold: 1,}
  )
  const obervador = new IntersectionObserver((e)=>{
    console.log(e[0])
    if(e[0].isIntersecting){
      if(!e[0].target.classList.contains('move')){
        console.log(e[0].target.classList);
        e[0].target.classList.add('move')}
      else e[0].target.classList.remove('move')
  }
  }
  ,{
    root:null,
    rootMargin:'0px 1000px 0px 1000px',
    threshold: 1,

  })

  useEffect(()=>{
      let a:any = Array.from(cavallosContainer.current?.childNodes)
      console.log(a)
      if(guia)observadorDiv.observe(guia.current)
      if(a){
        a.forEach((x:any)=>obervador.observe(x))}
    }
    ,[cavallosContainer, guia])
  
  return (
    <div className="App">
      <div style={{width:'100vw', height:'100vh', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <h1>SCROLL DOWN</h1>
      <div className='flecha'></div>
      </div>
      <div className='cavallosContainer' ref={cavallosContainer}>
      <img src="./assets/unicornio.gif" className='test' alt="" />
      </div>
      <div ref={guia}></div>
    </div>
  );
}

export default App;
