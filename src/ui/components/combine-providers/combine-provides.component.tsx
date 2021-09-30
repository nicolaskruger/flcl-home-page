import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../../../constants";

const CombineProvider: FC = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export {
    CombineProvider
}