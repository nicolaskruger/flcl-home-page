import { FC } from "react";
import styled from "styled-components";
import { Button, H1Ligth, H2Ligth, NumberLigth, PLigth } from "../../../..";
import { bat, cigarette, MamimiPickImg, sleep } from "../../../../../assets";
import { Container } from "../../../../components/container/container.cmponent";

const Section = styled.section`
    background-color: ${props => props.theme.black};
    position: relative;
`;

const SectionContainer = styled(Container)`
    display: flex;
`;

const DivImg = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -200px;
`;
const ImgAbs = styled.img`
    width: 400px;
    height: 400px;
    object-fit: contain;
     filter: grayscale(100%) brightness(120%) sepia(90%) hue-rotate(5deg) saturate(500%) contrast(0.7);;
`;

const Number = styled(NumberLigth)`
    z-index: 10;
    position: absolute;
    top: 50px;
    left: 150px;
`;

const Div = styled.div`
    width: 50%;
`;

const Div02 = styled(Div)`
    padding-top: 250px;
`;

const ImgLi = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
`;

const Li = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
`;
const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const MyButton = styled(Button)`
    margin: 10px 0;
`;

const Section02: FC = () => {
    return (
        <Section>
            <DivImg>
                <ImgAbs src={MamimiPickImg} alt="mamimi-pick" />
                <Number>02</Number>
            </DivImg>
            <SectionContainer>
                <Div>
                    <NumberLigth>03</NumberLigth>
                </Div>
                <Div02>
                    <H1Ligth>
                        Lorem ipsum dolor sit amet
                    </H1Ligth>
                    <H2Ligth>
                        Lorem, ipsum dolor sit amet consectetur a
                    </H2Ligth>
                    <PLigth>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                    </PLigth>
                    <Ul>
                        <Li>
                            <ImgLi src={cigarette} alt="" />
                            <PLigth>cigarete</PLigth>
                        </Li>
                        <Li>
                            <ImgLi src={sleep} alt="" />
                            <PLigth>sleep</PLigth>
                        </Li>
                        <Li>
                            <ImgLi src={bat} alt="" />
                            <PLigth>bat</PLigth>
                        </Li>
                    </Ul>
                    <MyButton>
                        Start
                    </MyButton>
                </Div02>
            </SectionContainer>
        </Section>
    )
}

export {
    Section02
}