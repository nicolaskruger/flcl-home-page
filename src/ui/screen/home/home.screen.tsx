import { FC } from "react";
import styled from "styled-components";
import { Footer, Header, Section00, Section01, Section02, Section03 } from "./section";

const Div = styled.div`
    background-color: black;
`;

const HomeScreen: FC = () => {


    return (
        <Div>
            <Header />
            <Section00 />
            <Section01 />
            <Section02 />
            <Section03 />
            <Footer />
        </Div>
    )
}

export {
    HomeScreen
}