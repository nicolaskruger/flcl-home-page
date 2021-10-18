import { FC } from "react";
import styled from "styled-components";
import { atomosk, kamon, kanti } from "../../../../../assets";
import { shingekun } from "../../../../../assets/img/shingekun/shingekun";
import { Container } from "../../../../components";
import { H1Ligth, H2Ligth, PLigth, Button } from "../../../../components";

const Section = styled.section``;

const Img00 = styled.img`
    position: relative;
    width: 300px;
    top: -50px;
`;

const MyContainer = styled(Container)`
    display: flex;
    gap: 20px;
`;

const MyH1Ligth = styled(H1Ligth)`
    margin: 0;
    padding-left: 30px;
    padding-bottom: 20px;
`;

type ImgName = {
    name: string,
    img: string
}

const characters: ImgName[] = [
    {
        name: "kanti",
        img: kanti
    },
    {
        name: "kamon",
        img: kamon
    },
    {
        name: "shingekun",
        img: shingekun
    }
];

const Img01 = styled.img`
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
`;

const P = styled(PLigth)`
    margin: 0;
`;

const info: string[] = [
    "FLCL",
    "fooly cooly",
    "mabase",
    "ordinary"
];

const Ul00 = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Div00 = styled.div`
    width: 320px;
`;

const Div01 = styled.div`
    width: calc(100% - 320px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Div02 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const H1 = styled(H1Ligth)`
    align-self: flex-end;
`;

const Footer: FC = () => {
    return (
        <Section>
            <MyContainer >
                <Div00>
                    <Img00 src={atomosk} />
                    <MyH1Ligth>
                        FLCL
                    </MyH1Ligth>
                </Div00>
                <Div01>
                    <Div02>

                        <div>
                            <H2Ligth>
                                anoter characters
                            </H2Ligth>
                            <Ul>
                                {characters.map(char => (
                                    <Li>
                                        <Img01 src={char.img} alt={char.name} />
                                        <PLigth>
                                            {char.name}
                                        </PLigth>
                                    </Li>
                                ))}
                            </Ul>
                        </div>
                        <div>
                            <H2Ligth>
                                about
                            </H2Ligth>
                            <Ul00>
                                {info.map((inf, i) => (
                                    <li key={i}>
                                        <P>
                                            {inf}
                                        </P>
                                    </li>
                                ))}
                            </Ul00>
                        </div>
                        <div>
                            <H2Ligth>
                                exited
                            </H2Ligth>
                            <Button>
                                start
                            </Button>
                        </div>
                    </Div02>
                    <H1>
                        fooly cooly
                    </H1>
                </Div01>
            </MyContainer>
        </Section>
    )
}

export {
    Footer
}