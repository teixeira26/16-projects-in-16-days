import styled, {createGlobalStyle} from 'styled-components';


export const ImgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #161616 20%, #1E1E1E 50%, #1D161D 70%, black);

    & img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: ${props=>`blur(${50-(props.number/2)+'px'})`};
        ${props=>console.log()}
    }
`

export const NumberContainer = styled.div`
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    position: absolute;
    top: 0;
    left: 0;
    opacity: ${props=>1-(props.number/100)};;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`