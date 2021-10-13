import { FC } from "react";
import styled from "styled-components";
import { Card, CardComponent } from "../..";
import { MamimiImg, NaotaImg } from "../../../assets";
import { HarukoImg } from "../../../assets/img/haruko/haruko.img";
import { CardDisplay } from "../../components/card";

const Div = styled.div`
    background-color: black;
`;

const HomeScreen: FC = () => {

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
        <Div>
            <CardDisplay cards={list} />
        </Div>
    )
}

export {
    HomeScreen
}