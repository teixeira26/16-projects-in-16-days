import React, { useEffect, useRef } from 'react';
import './canvas.css'

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx:CanvasRenderingContext2D | null;
  interface mouseInterface{
    x:number|undefined,
    y:number|undefined
  }
  const mouse:mouseInterface ={
    x:undefined,
    y:undefined
  } 
  const array:{draw:any, update:any, size:any}[]= [];

  const drawCircle = (ctx:CanvasRenderingContext2D | null, x:number|undefined, y:number|undefined, color:string, size:number)=>{
    if(ctx && canvas.current && x!==undefined && y!==undefined){
    // ctx.clearRect(0,0,canvas.current.width, canvas.current.height)
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill()
    }
  }

  const animate = ()=>{
    if(ctx)ctx.clearRect(0,0,window.innerWidth, window.innerHeight)
    
    array.forEach((x,i)=>{
      if(array[i].size<0.4){
        array.splice(i, 1)
        array.push(new Particle);

      }
      x.update()})
    // drawCircle(ctx, mouse.x, mouse.y,'black')
    requestAnimationFrame(animate)
  }

  
  class Particle {
    x:number = Math.random()*window.innerWidth;
    y:number = Math.random()*window.innerHeight;
    xVelocity:number = (Math.random() *2)-1.5;
    yVelocity = (Math.random() *2)-1.5;
    hue:number = Math.random()*360;
    size:number = Math.random()*20+5
    update(){
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      if(this.size>0)this.size -= 0.1;
      drawCircle(ctx, this.x, this.y, `hsl(${this.hue}, 100%, 50%)`, this.size)

    }
    draw(){
      
      drawCircle(ctx, this.x, this.y, 'black', this.size)
    }
  }
  const init=()=>{
    for (let n=0; n<100; n++){
      array.push(new Particle)
    }
  }
  init();

  const handleParticles = ()=>{
    console.log(array)
    for (let n=0; n<array.length-1;n++){
      array[n].draw();
      
    }
  }
  
  useEffect(()=>{
    if(canvas && canvas.current){
      ctx = canvas.current.getContext('2d');
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight

      handleParticles();
      animate()
      canvas.current.addEventListener('mousemove', (e)=>{
        mouse.x = e.x;
        mouse.y = e.y;
        if(ctx != undefined){
        
        }
      })
    }
    
  },[canvas])

  return (
    <div className="App">
     <canvas ref={canvas} className='canvas'></canvas>
    </div>
  );
}

export default App;
