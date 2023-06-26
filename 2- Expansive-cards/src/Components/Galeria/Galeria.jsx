import Imagenes from "../Imagenes/Imagenes";
import {IMG, Container, ContainerFlex} from '../../styles'
import { useState } from "react";




const Galeria = ()=>{

    const screenWidth = window.innerWidth*0.8;
    const [imagenes, setImagenes] = useState([{img:'./assets/1.avif', width:screenWidth-340+'px'},{img:'./assets/2.avif', width:'70px'},{img:'./assets/3.avif', width:'70px'},{img:'./assets/4.avif', width:'70px'},{img:'./assets/5.avif', width:'70px'}])
    

    const expandirCard =(e)=>{
        console.log(e.target.attributes.src.value == './assets/3.avif')
        let sizes = imagenes.map(x=>{
          
            if(x.img === e.target.attributes.src.value) {
                let imgGrande= {...x, width:screenWidth-340+'px'}
                return (imgGrande)
            }
            else{
                let imgChico = {...x, width:'70px'}
                return (imgChico)
            }
            
        })
        setImagenes(sizes)
}


    return(
        <ContainerFlex>
            <Container>
                {imagenes.map((imagen, y)=><IMG key={y} width={imagen.width} src={imagen.img} onClick={expandirCard}></IMG>)}
            </Container>
        </ContainerFlex>
    )
}

export default Galeria;