const cambiarColor = ()=>{
    let button = $('#button');
    let fondo = $('#fondo');
    let texto = $('#texto');

    const {rojo, verde, azul} = definirColorButtonRgb();
    const colorHex = encontrarCodigoHexadecimal(rojo, verde, azul);

    fondo[0].style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
    button[0].style.backgroundColor = `#${colorHex}`;


    if(rojo>125&&verde>125||verde>125&&azul>125||azul>125&&rojo>125) {
        button[0].style.border='5px solid black';
        button[0].style.color='black'
        texto[0].style.color='black'
    }
    else {
        button[0].style.border='5px solid white'
        button[0].style.color='white'
        texto[0].style.color='white'
    }



    texto.html(`
    <div>
        <p>rgb: ${rojo}, ${verde}, ${azul}</p>
        <p>Hexadecimal: #${colorHex}</p>
    </div>
    `)

}

const definirColorButtonRgb = ()=>{
    let rojo = Math.round(Math.random()*255);
    let verde = (Math.round(Math.random()*255));
    let azul = (Math.round(Math.random()*255));

    return ({rojo, verde, azul})
}

const encontrarCodigoHexadecimal = (rojo, verde, azul)=>{
    let rojohex = rojo.toString(16).length===2?rojo.toString(16):0+rojo.toString(16);
    let verdehex = verde.toString(16).length===2?verde.toString(16):0+verde.toString(16);
    let azulhex = azul.toString(16).length===2?azul.toString(16):0+azul.toString(16);
    return(rojohex+ verdehex+ azulhex)
}

