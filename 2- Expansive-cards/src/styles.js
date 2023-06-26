import styled, {css} from 'styled-components';

export const Title = styled.h1`
    color:blue;
`

export const IMG = styled.div`
    width: ${props=>props.width};
    height: 100%;
    border-radius: 50px;
    background-image: url(${(props)=>props.src});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: width ease-out 1s;
`



export const Container = styled.div`
    width: 80vw;
    height: 80vh;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 20px;
   
`

export const ContainerFlex = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`