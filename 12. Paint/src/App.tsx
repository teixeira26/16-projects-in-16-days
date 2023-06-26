import React, { useEffect, useRef, useState } from 'react';
import './canvas.css'

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);

  let cambiarColor:any;
  let color:string;
  useEffect(()=>{
    let clicked = false;
    
    if(canvas.current){
      console.log(canvas.current)
      const ctx = canvas.current?.getContext('2d')
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      
      cambiarColor = (colore:string)=>{
        console.log('ijijds')
        color = colore
      }
      
      canvas.current.addEventListener('mousedown',(e)=>{
        console.log(color)
        dibujarCirculo(ctx, e.x, e.y, color||'black')
        clicked = true
      })
      canvas.current.addEventListener('mousemove',(e)=>{
        if(clicked){
        dibujarCirculo(ctx, e.x, e.y, color||'black')}
      })
      canvas.current.addEventListener('mouseup', ()=>clicked = false)
    }
  },[canvas])
  const dibujarCirculo =(ctx:CanvasRenderingContext2D | null, x:number, y:number, color:string)=>{
    if(ctx){
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.beginPath()
      ctx.arc(x, y,10,0,6.28);
      ctx.fill()
    }
  }


  return (
    <div className="App">
     <canvas ref={canvas} className='canvas'></canvas>
      <div className='colors'>
        <div style={{backgroundColor:'orange'}} onClick={()=>cambiarColor('orange')} ></div>
        <div style={{backgroundColor:'blue'}} onClick={()=>cambiarColor('blue')}></div>
        <div style={{backgroundColor:'red'}} onClick={()=>cambiarColor('red')}></div>
        <div style={{backgroundColor:'green'}} onClick={()=>cambiarColor('green')}></div>
        <div style={{backgroundColor:'yellow'}} onClick={()=>cambiarColor('yellow')}></div>
        <div style={{backgroundColor:'grey'}} onClick={()=>cambiarColor('grey')}></div>
      </div>
    </div>
  );
}

export default App;
