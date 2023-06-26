import styled,{css, keyframes, createGlobalStyle} from 'styled-components';


const fadeIn = keyframes`
    from{
        background-color: transparent;
    }
    to{
        background-color: rgba(0,0,0,.5);
    }
`

export const TutorialContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    animation-name: ${fadeIn};
    animation-duration: 1s;


    & h1{
        margin-bottom: 50px;
    }

    & button{
        margin: 5px;
        background-color: transparent;
        border-radius: 5px;
        padding: 8px;
    }

    & button:hover{
        background-color: white;
    }

`
export const Button = styled.button`
    position: absolute;
    z-index: ${props=>props.selected?200:0};
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    border: ${props=>props.selected?'3px solid red':'1px solid black'};


    
    & div{

    }
    &:hover{
        background-color: black;
        color: white;
    }

`

export const ButtonesContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-evenly;
    align-items: center;
`

export const GlobalStyle = createGlobalStyle`
    body{
        margin:0;
    }
    h1{
        color:lightgray;
    }
`

export const movimiento = keyframes`
    from{
        transform: translate(0);
    }
    to{
        transform: translate(3px);
    }
`
export const Animal = styled.img`
    position: absolute;
    z-index: 1000;
    width: 50vw;
    animation-name: ${movimiento};
    animation-duration: 0.1s;
    animation-iteration-count: infinite;
    ${props=>console.log(props.src.split('.png')[0].split('/')[2])}
    ${props=>props.src.split('.png')[0].split('/')[2] !== 'gato'? css`
        right: 0;
        left: auto;
    `:css`
         left: 0; 
        right: auto;
    `
    }
`