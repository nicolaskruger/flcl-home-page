import { FC } from "react";
import styled from "styled-components";
import { Card } from "../../../..";
import { HarukoImg, MamimiImg, NaotaImg } from "../../../../../assets";
import { CardDisplay } from "../../../../components/card";
import { Container } from "../../../../components/container/container.cmponent";

const Section = styled.section`
    padding-top: 50px;
    margin-left: calc( ( 100% - 1200px ) / 2 );
    display: flex;
    justify-content: space-between;
    @media(max-width: 1333px){
        margin-left: 5%;
    }
`;

const Div00 = styled.section`
    width: 45%;
`;

const Section00: FC = () => {


    const list: Card[] = [
        {
            img: NaotaImg,
            title: "naota",
            subTitle: `"ordinary"`,
        },
        {
            img: MamimiImg,
            title: "mamimi",
            subTitle: `"swing the bat"`,
        },
        {
            img: HarukoImg,
            title: "haruko",
            subTitle: `"evil alien"`,
        }
    ];

    return (
        <Section>
            <Div00>
                <h2>
                    On a place thats allmost all day is ordinary
                </h2>
                <h1>
                    You going to live a adventura with naota, mamimi and haruko
                </h1>
                <ul>

                </ul>

                <button>
                    start
                </button>
            </Div00>
            <Div00>
                <CardDisplay cards={list} />
            </Div00>
        </Section>
    )
}

export {
    Section00
}