import styled, {css, createGlobalStyle} from 'styled-components';


export const EstilosGlobales = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }
`

export const Background = styled.div`
    background-color: #7A5DF7 ;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const InputDiv = styled.div`
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    transition: all .4s;

    & button{
            position: absolute;
            padding: 10px;
            border: none;
            background-color: transparent;
            transition: margin .4s;
        }

    & i{
        font-size: 20px;
    }
    & input{
            width: 100%;
            height: 100%;
            border-radius: 5px;
            border: none;
            display: none ;
            
        }

    ${props=>props.active && css`
        width: 200px;

        & button{
            position: absolute;
            margin: 0 10px 10px 160px;
            width: auto;
            height: auto;
        }

        & input{    
            border-radius: 5px;
            border: none;
            display: block;
        }
    `}

    
`