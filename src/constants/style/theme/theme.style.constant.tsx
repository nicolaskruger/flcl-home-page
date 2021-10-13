import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        yellow: string,
        yellowGradient: string,
        white: string,
        black: string
    }
}

const theme: DefaultTheme = {
    yellow: "yellow",
    yellowGradient: "linear-gradient(90deg, rgba(214,203,31,1) 42%, rgba(244,200,53,1) 67%)",
    white: "whitesmoke",
    black: "black"
}


export {
    theme
}