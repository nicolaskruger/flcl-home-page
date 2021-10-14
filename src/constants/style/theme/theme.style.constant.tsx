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
    yellowGradient: "linear-gradient(90deg, rgba(255,211,0,1) 42%, rgba(255,241,0,1) 67%)",
    white: "whitesmoke",
    black: "black"
}


export {
    theme
}