import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    button{
        border: none;
        padding: 0;
        margin: 0;
        background-color: rgba(0,0,0,0);
        cursor: pointer;
    }
    * {
        color: ${props => props.theme.white};
    }
    ul{
        margin: 0;
        padding: 0;
        border: 0;
        list-style-type: none;
    }
    li{
        margin: 0;
        padding: 0;
        border: none;
    }
`;

export {
    GlobalStyle
}