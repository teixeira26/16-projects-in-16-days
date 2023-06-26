import styled, {createGlobalStyle}from 'styled-components';
import HSLToRGB from './utils/HSLToRGB';
import RGBToHSL from "./utils/RGBToHSL";

export const ColorPrimario = styled.div`
background-color: ${(props)=>typeof props.color === 'string'?props.color.split(' ').join(''):'oko'};
width: 50%;
height: 100%;
display: block;
`

export const ColorSecundario = styled(ColorPrimario)`
background-color: ${(props) => {
    if (typeof props.colorSecundario ==='string'){
        const [h, s, l] = (props.colorSecundario.split('(')[1].split(','))
        console.log(props.colorSecundario)
        console.log(parseInt(h),parseFloat(s)*100,parseFloat(l.split(')')[0])*100)
        const [r,g,b] = (HSLToRGB(Math.round(parseFloat(h)),Math.round((parseFloat(s))*100),Math.round(parseFloat(l.split(')')[0])*100)))
        return `rgb(${r}, ${g}, ${b})`
    } 
    
    return `black`}};
`  

export const Container= styled.div`
width: 100vw;
height:100vh;
display:flex;
align-items:center;
justify-content: center;

`
export const ContainerPicker = styled(Container)`
position:absolute;
top:0;
left:0;
width: 100vw;
height: 100vh;
display: flex;
justify-content: space-evenly;
align-items: center;
`

export const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin:0;
    }

`