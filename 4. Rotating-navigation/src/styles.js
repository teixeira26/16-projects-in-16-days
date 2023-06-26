import styled, {css, createGlobalStyle} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform linear .5s;
    transform-origin: top left;
    background-color: white;
    
    & div{
        display: flex;
        flex-direction: column;
        width: 75%;
    }

    ${props=>props.rotar&&css`
        transform: ${props=>props.rotar&&'rotate(-30deg)'};
        transform-origin: top left;
    `}
`

export const ContainerTrasero = styled.div`
    background-color: #333333;
    width: 100vw;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
`

export const DivFixed = styled.div`
    position: fixed;
    top: -50px;
  
    z-index: 200;
    transition: transform linear .5s;
    width: 50px;
    height: 100px;
   
    display: flex;
    flex-direction: column;
    ${props=>props.rotar && css`
        transform: rotate(180deg);
    `}
    & button{
        background-color: transparent;
        border: none;
        height: 50px;
    }
    & i{
        font-size: 25px;
        border: none;
        background-color: transparent;
    }
`


export const Button = styled.button`
    ${props=>props.bajo && css`
        
        align-self: flex-start;
      

        
    `}

    ${props=>props.alto && css`
       margin-top:auto;
       align-self: end;
       

        

    `}
`

export const CirculoFixed = styled.div`
    background-color: #FF7979;
    border-radius: 50%;
    position: fixed;
    top: -50px;
    left: -30px;
    width: 120px;
    height: 120px;
    z-index: 150;
    `


    export const Navbar = styled.nav`
        position: absolute;
        top: 317px;
        left: 93px;
        width: 100px;
        height: 100px;
        z-index: 200;


        & p, i{
            margin-left: -200px;
            color: white;
            transition: margin ease-in-out .5s;
            display: inline;
            padding: 5px;
            text-transform: uppercase;
            ${props=>props.appear && css`
                margin: 15px 0 15px 0;
            `}
        }


    `

    export const GlobalStyle = createGlobalStyle`
    
    i{
        color: white;
    }
    
    `