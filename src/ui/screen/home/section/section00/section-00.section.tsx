import { FC, useState } from "react";
import styled from "styled-components";
import { Button, Card, ContainerLeftOnly, PropsSelect, SelectDays, SelectMonth, SelectYear } from "../../../..";
import { HarukoImg, MamimiImg, NaotaImg } from "../../../../../assets";
import { CardDisplay } from "../../../../components/card";

const Section = styled(ContainerLeftOnly)`
    padding-top: 50px;
    padding-bottom: 200px;
`;

const Div00 = styled.section`
    width: 45%;
`;

const styleSelect = (comp: FC<PropsSelect>) => styled(comp || styled.select``)`
    background-color: ${props => props.theme.black};
    padding: 8px 30px;
`;

const SelectD = styleSelect(SelectDays);
const SelectM = styleSelect(SelectMonth);
const SelectY = styleSelect(SelectYear);

const H2 = styled.h2`
    font-weight: lighter;
`;

const H1 = styled.h1`
    font-size: 40px;
`;

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const Li = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Span = styled.span`
    font-size: 12px;
    font-weight: lighter;
`;


const Section00: FC = () => {

    const [days, setDays] = useState('1');
    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('1998');

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
                <H2>
                    On a place thats allmost all day is ordinary
                </H2>
                <H1>
                    You going to live a adventura with naota, mamimi and haruko
                </H1>
                <Ul>
                    <Li>
                        <Span>day</Span>
                        <SelectD value={days} onChange={setDays} />
                    </Li>
                    <Li>
                        <Span>month</Span>
                        <SelectM value={month} onChange={setMonth} />
                    </Li>
                    <Li>
                        <Span>year</Span>
                        <SelectY value={year} onChange={setYear} />
                    </Li>
                </Ul>

                <Button>
                    start
                </Button>
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