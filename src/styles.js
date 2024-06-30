import { styled } from "styled-components";

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";


export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ToDoList = styled.div`
    background: #fff;
    padding: 30px 20px;
    border-radius: 5px;

    ul{
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid #D1D3D466;
    border-radius: 5px;
    height: 40px;
    margin-right: 30px;
    padding-left: 10px;
    width: 342px;
`

export const Button = styled.button`
    background: #8052EC;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #fff;
    font-size: 17px;
    line-height: 2px;
    width: 130px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    border-radius: 5px;
    box-shadow: 1px 4px 10px 0px #00000033;
    height: 60px;
    background: ${props => props.isFinished ? "#E8FF8B" : "#E4E4E4"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;
    
    li{
        list-style:none;
    }
`

    export const Trash = styled(FcEmptyTrash)`
        cursor: pointer;
        &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
    ` 

    export const Check = styled(FcCheckmark)`
        cursor: pointer;

        &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
    ` 

