import HSLToRGB from "./HSLToRGB";

const cambiarColorPicker = (color, setColor, setColorSecundario)=>{
    console.log(color.hsl.h,(360 - color.hsl.h));
    let h;
    if(color.hsl.h >= 180) h = color.hsl.h-180;
    else h = color.hsl.h+180;
    console.log(h)
    setColor(`rgb (${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`);
    setColorSecundario(`hsl(${h},${color.hsl.s},${color.hsl.l})`)
    
  }

  export default cambiarColorPicker