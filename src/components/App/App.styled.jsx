import styled from 'styled-components';
import { ImUser } from "react-icons/im";

export const MainBox = styled.div`
display: flex;
align-items: baseline;
`;


export const Header = styled.header`
    width: 75%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    min-height: 64px;
    padding: 12px 24px;
    color: rgb(255, 255, 255);
    background-color: gainsboro;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 
`;

export const Container = styled.div`
display: flex;
padding: 25px;
`;

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 25px;
  padding-bottom: 0;
  color: deepskyblue;
`;

export const NeedContactBox = styled.div`
  margin-left: 40px;
`;

export const IconCurrentContact = styled(ImUser)`
    width: 32px;
    `;

export const CurrentContact = styled.div`
display: flex;
align-items: center;
`;

export const SecondBlock = styled.div`
  width: 100%;
  height: auto;
`;

export const AvatarDiv = styled.div`
    margin-right: auto;
    padding-bottom: 10px;
`;

export const TitleCurrent = styled.p`
    padding: 10px 15px;
    background-color: darkslategray;
    border-radius: 7px;
    color: aliceblue;
`;

export const DateCurrent = styled.p`
color: cadetblue;
margin: 0;
padding-left: 45px;
`;



