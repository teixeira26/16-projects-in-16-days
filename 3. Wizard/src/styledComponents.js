import styled, {css} from 'styled-components';

export const Number = styled.div`
    border-radius: 50%;
    width: 20px;
    border: 3px solid lightgray;
    height: 20px;
    color: #555;
    text-align: center;
    transition: border .5s ease-out;
    ${props=>console.log(props)}
    ${(props)=>props.active&&css`
    border: 3px solid #3498DB;
    `} 
`

export const Line = styled.div`
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #3498DB 50%, lightgray 50% );
    background-size: 200%;
    background-position: -50px;
    transition: background-position .5s;

    ${props=>props.active&&css`
        background-position: 0;
    `}
`


export const Button = styled.button`
    border-radius: 5px;
    color: white;
    background-color: #3498DB;
    margin: 2px;
    border: 1px solid #3498DB;
    padding: 5px 10px;

    &:hover{
        color:#3498DB;
        border: 1px solid #3498DB;
        background-color: white;
    }

    &:disabled{
        color:white;
        background-color: lightgray;
        border: 1px solid lightgray;
    }
`
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    margin: 10px;
    flex-direction: ${props=>props.direction === 'column'?'column':'row'};
    height:${props=>props.height?props.height:'auto'};
    background-color: ${props=>props.background};
`
