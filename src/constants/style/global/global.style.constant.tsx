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
`;

export {
    GlobalStyle
}