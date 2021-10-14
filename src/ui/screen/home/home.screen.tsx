import { FC } from "react";
import styled from "styled-components";
import { Header, Section00, Section01, Section02 } from "./section";

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
        </Div>
    )
}

export {
    HomeScreen
}