import RGBToHSL from "./utils/RGBToHSL";
import {SketchPicker} from 'react-color';
import { useState } from "react";
import cambiarColorPicker from "./utils/cambiarColorPicker";
import {ColorPrimario, ColorSecundario, Container, ContainerPicker, GlobalStyle} from './styles.js'

function App() {
  const [color, setColor] = useState({r:0,g:0,b:0})
  const [colorSecundario, setColorSecundario] = useState({r:0,g:0,b:0})
  
  
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <ContainerPicker>
        <SketchPicker color={color} onChangeComplete={(selectedColor)=>cambiarColorPicker(selectedColor, setColor, setColorSecundario)}></SketchPicker>
        <SketchPicker color={colorSecundario} onChangeComplete={(selectedColor)=>cambiarColorPicker(selectedColor, setColor, setColorSecundario)}></SketchPicker>
      </ContainerPicker>
      <Container>
        <ColorPrimario color={color} ></ColorPrimario>
        <ColorSecundario colorSecundario={colorSecundario}></ColorSecundario>
      </Container>
      
    </div>
  );
}

export default App;
