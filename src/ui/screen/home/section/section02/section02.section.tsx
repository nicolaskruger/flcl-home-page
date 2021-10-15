import { FC } from "react";
import styled from "styled-components";
import { Button, H1Ligth, H2Ligth, NumberLigth, PLigth, VerticalWord } from "../../../..";
import { bat, cigarette, MamimiPickImg, sleep } from "../../../../../assets";
import { gaku } from "../../../../../assets/img/gaku/gaku.img";
import { masashi } from "../../../../../assets/img/masashi/masashi.img";
import { ninamori } from "../../../../../assets/img/ninamori/ninamori.img";
import { Container } from "../../../../components/container/container.cmponent";
import { YellowImg } from "../../../../components/style";

const Section = styled.section`
    background-color: ${props => props.theme.black};
    position: relative;
    padding-bottom: 100px;
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
const ImgAbs = styled(YellowImg)`
    width: 400px;
    height: 400px;
    object-fit: contain;
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

const ImgSecond = styled.img`
    width: 70px;
    height: 70px;
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

const Span = styled.span``;

const Ul0 = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-right: 80px;
`;

const Li0 = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
                    <Ul0>
                        <Li0>
                            <ImgSecond src={ninamori} />
                            <VerticalWord word="Eri Ninamori" Style={Span} />
                        </Li0>
                        <Li0>
                            <VerticalWord word="Gaku" Style={Span} />
                            <ImgSecond src={gaku} />
                            <VerticalWord word="Manabe" Style={Span} />
                        </Li0>
                        <Li0>
                            <VerticalWord word="Masashi Masamune" Style={Span} />
                            <ImgSecond src={masashi} />
                        </Li0>
                    </Ul0>
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