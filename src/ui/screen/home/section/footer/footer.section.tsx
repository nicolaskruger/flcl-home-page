import { FC } from "react";
import styled from "styled-components";
import { atomosk } from "../../../../../assets";
import { Container } from "../../../../components";
import { H1Ligth, H2Ligth } from "../../../../components";

const Section = styled.section``;

const Img00 = styled.img`
    position: relative;
    width: 300px;
    top: -50px;
`;

const MyContainer = styled(Container)`
    display: flex;
    gap: 20px
`;

const MyH1Ligth = styled(H1Ligth)`
    margin: 0;
    padding-left: 30px;
    padding-bottom: 20px;
`;

const Footer: FC = () => {
    return (
        <Section>
            <MyContainer >
                <div>
                    <Img00 src={atomosk} />
                    <MyH1Ligth>
                        FLCL
                    </MyH1Ligth>
                </div>
                <div>
                    <H2Ligth>
                        anoter characters
                    </H2Ligth>
                    <ul>

                    </ul>
                </div>
            </MyContainer>
        </Section>
    )
}

export {
    Footer
}