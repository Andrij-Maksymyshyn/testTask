import styled from 'styled-components';
import { ImUser } from "react-icons/im";

export const IconContact = styled(ImUser)`
    width: 32px;
    color: ${function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }}
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Box = styled.div`
    display: flex;
    align-items: baseline;
`;

export const Div1 = styled.div`
    display: flex;    
    align-items: center;
`;

export const Div2 = styled.div`
    margin-left: auto;
    font-size: 12px;
`;

export const H3 = styled.h3`
margin-top: 0;
margin-bottom: 0;
`;

export const Li = styled.li`
cursor: pointer;

&:not(:last-child) {
    margin-bottom: 15px;
    }     
`;

export const Span = styled.span`
color: cadetblue;
`;