import React, { useEffect, useRef } from 'react';
import {layer1, layer2, layer3, layer4, layer5} from './images'
import './background.css';

function App() {
  const canvas = useRef<HTMLCanvasElement>(null)
  let ctx: CanvasRenderingContext2D | null;
  let gameSpeed = 30;


  class Layer {
    x:number;
    speed:number;
    image:HTMLImageElement;
    velocity:number;

    constructor(image:HTMLImageElement, velocity:number){
      this.x = 0;
      this.image = image;
      this.speed = gameSpeed;
      this.velocity = velocity;
    }
    update(key:string){
      if(key === 'ArrowRight'){
        if(this.x>=2400)this.x=0;
        else this.x += gameSpeed*this.velocity;
      }
      if(key === 'ArrowLeft'){
        if(this.x<=-2400)this.x=0;
        else this.x -= gameSpeed*this.velocity;
      }
      
    }
    draw(){
      drawImage(this.x, this.image);
      drawImage(this.x+2400, this.image);
      drawImage(this.x-2400, this.image);
    }
  }

  const drawImage = (x:number, image:HTMLImageElement)=>{
    if(ctx && canvas.current){
      ctx.drawImage(image, x, 0, 2400,700, 0,0,2400,canvas.current.height)
    }
  }

  const layers = [new Layer(layer1, 0.1),new Layer(layer2, 0.2),new Layer(layer3, 0.03),new Layer(layer4, 0.6), new Layer(layer5, 0.7)]
  const animate = ()=>{
    
    if(ctx && canvas.current) {
      ctx.clearRect(0,0,canvas.current.width, canvas.current.height)
      layers.forEach(layer=>{
        layer.draw();
      })
      
    
    }
    requestAnimationFrame(animate);
  }
  useEffect(()=>{
    if(canvas.current){
      canvas.current.width = window.innerWidth;
      canvas.current.height = window.innerHeight;
      ctx = canvas.current.getContext('2d');
      if(ctx)ctx.fillRect(0,0,canvas.current.width, canvas.current.height)
      animate();

      window.addEventListener('keydown',(e)=>{
        console.log(e);
        layers.forEach(layer=>{
          layer.update(e.code);
        })
        
      })
    }

   
  },[canvas])

  return (
    <div className="App">
      <canvas ref={canvas}></canvas>
    </div>
  );
}

export default App;
