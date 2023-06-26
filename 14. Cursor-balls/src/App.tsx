import { throws } from 'assert';
import React, { useEffect, useRef } from 'react';


function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null;
  let particles:Particle[] = [];
  let hue = 0;

  class Particle {
    x:number;
    y:number;
    color:string;
    size:number;
    speedX:number;
    speedY:number;
    constructor(x:number, y:number, size:number){
      this.x = x;
      this.y = y;
      this.color = `hsl(${hue}, 100%, 50%)`
      this.size = size;
      this.speedX = Math.random()*3-1.5;
      this.speedY = Math.random()*3-1.5;
    }
    draw(){
      if(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 6.24);
        ctx.fill();
      }
    }
    update(){
      this.x+=this.speedX;
      this.y+=this.speedY;
      if(this.size>=0.2){
        this.size-=0.1
      };
    }  
  }

  const handleParticles= ()=>{
    particles.forEach((particle, indice)=>{
      if(particle.size<=0.2)particles.splice(indice,1);
      else{
        particle.draw();
        particle.update()
      }
    })
    hue++;
  }

  const animate = ()=>{
    if(ctx && canvas.current){
    // ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
    ctx.fillStyle = 'rgba(255,255,255,0.05)'
    ctx.fillRect(0,0,canvas.current.width, canvas.current.height);
  }
    handleParticles();
    requestAnimationFrame(animate);
  }
  useEffect(()=>{
    if(canvas.current){
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      ctx = canvas.current.getContext('2d'); 
      animate();
      canvas.current.addEventListener('mousemove',(e)=>{
        for(let n = Math.random()*20;n>0;n--){
        particles.push(new Particle(e.x, e.y, Math.random()*10+1));
        }
        console.log(particles)
      })
     
    }
  },[canvas])
  window.addEventListener('resize',()=>{
    if(canvas.current){
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    }
  })
 
  return (
    <div className="App">
      <canvas ref={canvas}></canvas>

    </div>

  );
}

export default App;
