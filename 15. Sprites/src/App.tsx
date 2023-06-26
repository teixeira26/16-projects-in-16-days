import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useEffect, useRef } from 'react';
import './aplicacion.css'

function App() {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx:CanvasRenderingContext2D | null;
  let imgWidth = 6876/12;
  let imgHeight = 523;
  let muerte = new Image();
  muerte.src = './assets/shadow_dog.png'
  const animationFrames:any = []
  const animationStates = [
    {
      name:'idle',
      frames:7
    },
    {
      name:'jump',
      frames:7
    },
    {
      name:'fall',
      frames:7
    },
    {
      name:'run',
      frames:9
    },
    {
      name:'play',
      frames:11
    },
    {
      name:'sit',
      frames:5
    },
    {
      name:'roll',
      frames:7
    },
    
  ]
  animationStates.forEach((action, index)=>{
    let frames = {
      loc:[{}]
    }
    for(let n=0; n<action.frames-1; n++){
      if(n==0)frames.loc.pop();
      let xPosition = imgWidth*n;
      let yPosition = imgHeight*index;
      frames.loc.push(
        {
          xPosition,
          yPosition
        })
    }
    animationFrames.push({[animationStates[index].name]:frames});
  })
  let gameFrame = 0;
  let action = 'idle';
  let frameX = 0;
  let keys:string[] = [];
  let indexAction = 0;

  const animate = ()=>{
    let animation = animationFrames.find((x:any, index:number)=>Object.keys(x).includes(action))[action];
    if(ctx){
    ctx.clearRect(0,0,400,400)

    ctx.drawImage(muerte, animation.loc[frameX].xPosition, animation.loc[0].yPosition,imgWidth, imgHeight,0,0, 400,400);
      
    if(gameFrame%animation.loc.length === 5 ){
      if(frameX>=animation.loc.length-1)frameX = 0;
      else frameX++;
    }
    
    gameFrame++ 

    
  }
    requestAnimationFrame(animate);
  }

  useEffect(()=>{
    if(canvas.current){
      canvas.current.width = 400;
      canvas.current.height = 400;
      ctx = canvas.current.getContext('2d');
      animate();
      window.addEventListener('keydown',(e)=>{
        // console.log(e)
        const validKeys = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'Space']
        gameFrame = 0;
        if(keys[0]!==e.code)frameX = 0;
        if(validKeys.includes(e.code)){
          keys = keys.filter(x=>x!==e.code && x!==' ');
          keys.unshift(e.code)
        }
        if(e.code === 'ArrowUp')action = 'jump'
        if(e.code === 'ArrowRight')action = 'run'
        if(e.code === 'ArrowDown')action= 'sit'
        if(e.code === 'Space')action = 'roll'
        

      });
      window.addEventListener('keyup',(e)=>{
        // console.log(keys)
        keys = keys.filter(x=>x!==e.code)
        gameFrame = 0;
        frameX = 0;
        if(keys.length === 0)action = 'idle';
        else {
          if(keys[0] === 'ArrowUp')action = 'jump';
          if(keys[0] === 'ArrowRight')action = 'run'
          if(keys[0] === 'ArrowDown')action= 'sit'
          if(keys[0] === 'Space')action = 'roll'
        }
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
