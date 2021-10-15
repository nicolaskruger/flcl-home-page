import { FC } from "react"
import styled from "styled-components";
import { ContainerLeftOnly, H1Dark, H2Dark, NumberDark, PDark } from "../../../.."
import { kanti, tv, what } from "../../../../../assets";
import { LeftRigthClick } from "../../../../components/card";
import { YellowImg } from "../../../../components/style";

const Section = styled.section`
    background-color: ${props => props.theme.white};
    padding-bottom: 100px;
`;

const Div = styled.div`
    width: 50%;
`;

const Img00 = styled.img`
    position: relative;
    width: 350px;
    top: -50px;
`;

const P = styled.p`
    margin: 0;
    color: ${props => props.theme.black};
`;

const ImgChar = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
`;

const Strong = styled.strong`
    color: ${props => props.theme.black};
`;

const Div00 = styled.div`
    display: flex;
    gap: 30px;
`;

const Pl = styled.div`
    color: ${props => props.theme.black};
    font-weight: lighter;
`;

const Div01 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
`;

const Div02 = styled(Div)`
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Img01 = styled(YellowImg)`
    align-self: flex-end;
`;

const Section03: FC = () => {

    const doit = () => { }

    return (
        <Section>
            <ContainerLeftOnly>
                <Div>
                    <Img00 src={tv} />
                    <LeftRigthClick onClickRigth={doit} onClickLeft={doit} dark >
                        <P>27/05</P>
                    </LeftRigthClick>
                    <H1Dark>
                        Lorem ipsum dolor sit amet
                    </H1Dark>
                    <H2Dark>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, unde aliquid. Voluptas, dignissimos v
                    </H2Dark>
                    <PDark>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam cum quod aliquid nostrum sit odio eveniet accusamus, atque minima quam odit voluptates ips
                    </PDark>
                    <Div00>
                        <ImgChar src={what} alt="what" />
                        <Div01>
                            <Strong>Samejima Mamimi</Strong>
                            <Pl>NEVER NOW BEST</Pl>
                        </Div01>
                    </Div00>
                </Div>
                <Div02>
                    <NumberDark>
                        04
                    </NumberDark>
                    <Img01 src={kanti} alt="kant" />
                </Div02>
            </ContainerLeftOnly>
        </Section>
    )
}

export {
    Section03
}