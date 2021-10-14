import { FC } from "react";
import styled from "styled-components";
import { H1Dark, H2Dark, PDark } from "../../../..";
import { MabaseImg } from "../../../../../assets/img/mabase/mabase";
import { Container } from "../../../../components/container/container.cmponent";

const Section = styled.section`
    position: relative;
    background-color: ${props => props.theme.white};
    
`;

const SectionContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const Div00 = styled.div`
    width: 50%;
    flex-direction: column;
`;

const Div01 = styled(Div00)`
    align-items: center;
    padding-top: 100px;
`;

const H100 = styled.h1`
    color: ${props => props.theme.black};
    font-size: 100px;
    padding-left: 50px;
    padding-bottom: 120px;
`;


const ImgAbs = styled.img`
    position: absolute;
    object-fit: contain;
    width: 300px;
    height: 300px;
    top: -150px;
    left: 20%;
`;

const Div02 = styled(Div00)`
    padding-top: 150px;
`;


const Section01: FC = () => {
    return (
        <Section>
            <ImgAbs src={MabaseImg} alt="Mabase" />
            <SectionContainer>
                <Div01>
                    <H100>
                        01
                    </H100>
                    <div>
                        <H2Dark>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </H2Dark>
                        <PDark>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eius non
                        </PDark>
                    </div>
                </Div01>
                <Div02>
                    <H1Dark>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, libero!
                    </H1Dark>
                    <H2Dark>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, odio porro omnis voluptates sint odit maxime nisi unde
                    </H2Dark>
                    <PDark>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repudiandae asperiores autem saepe laboriosam iure, fuga aspernatur dicta voluptatem cumque eius magni laudantium commodi culpa aliquam omnis quidem perspiciatis sint?
                    </PDark>
                </Div02>
            </SectionContainer>
        </Section>
    )
}

export {
    Section01
}