import './galeria.css';
import Image from '../Image/Image';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
const Galeria = ()=>{
    const [imgSeleccionado, setImgSeleccionado] = useState(false);
    useEffect(()=>{
        if(imgSeleccionado)console.log(imgSeleccionado)
    }, [imgSeleccionado])
    let imagenes = ["./assets/1.jpg","./assets/2.jpg","./assets/3.jpg","./assets/4.jpg","./assets/5.jpg","./assets/6.jpg","./assets/7.jpg","./assets/8.jpg"];
    const image = useRef()
    const agrandar = ()=>{
        // setImgSeleccionado(true);
        if(image.current.style.transform == 'scale(1.3)'){
            image.current.style.transform = 'scale(1.0)';
            image.current.style.cursor='zoom-in';
        }
        else{
        image.current.style.transform = 'scale(1.3)';
        image.current.style.cursor='zoom-out';
        }

    }

    const next = ()=>{
        const imageActual = parseInt(imgSeleccionado.split('/')[2].split('.jpg')[0]);
        if(imageActual >=8){
            setImgSeleccionado(`./assets/1.jpg`);
        }
        else{
            setImgSeleccionado(`./assets/${imageActual+1}.jpg`)
        }
    }
    const prev = ()=>{
        const imageActual = parseInt(imgSeleccionado.split('/')[2].split('.jpg')[0]);
        if(imageActual <=1){
            setImgSeleccionado(`./assets/8.jpg`);
        }
        else{
            setImgSeleccionado(`./assets/${imageActual-1}.jpg`)
        }
    }
    const reproducion =()=>{
        let imageActual = parseInt(image.current.src.split('/')[4].split('.jpg')[0]);
        console.log(image.current.src.split('/')[4].split('.jpg')[0])
        if(imageActual >=8){
            console.log(image.current.src)
            image.current.src = `./assets/1.jpg`;
            imageActual = 1;
        }
        else{
            console.log(image.current.src)
            image.current.src = `./assets/${imageActual+1}.jpg`
            imageActual += 1;
        }
    }

    const playClosure = ()=>{
        let timer = false;
        return(()=>{ 
            if(timer){    
                clearInterval(timer)
                timer = false;
            }
            
            else{
                timer = setInterval(reproducion,2000)
            } 
            return  
        })
    
    }
    const play = playClosure();
    return(
        <div className='container'>
            <div className="galeria">
                {imagenes.map((img, y)=><Image img={img} y = {y} setImgSeleccionado={setImgSeleccionado}></Image> )}
            </div>
            {imgSeleccionado&&<div className='popUp' >
                {/* onClick={()=>setImgSeleccionado(false)} */}
                <div className='flechaIzquierda'>
                    <img src="./assets/play.png" alt="play"  className='icono' onClick={prev} />
                </div>

                <img src={imgSeleccionado} alt="imgSeleccionado" ref={image} onClick={agrandar} className='imagenSeleccionado'/>

                <div className='navBar'>
                    <img src="./assets/agrandar.png" alt="agrandar" onClick={agrandar} className='icono' />
                    <img src="./assets/play.png" alt="play" onClick={play} className='icono' />
                    {/* <img src="./assets/grid.png" alt="grilla"  className='icono' /> */}
                </div>

                <div className='flechaDerecha'>
                    <img src="./assets/play.png" alt="play"  className='icono' onClick={next} />
                </div>

            </div>}
        </div>
    )
}
export default Galeria;