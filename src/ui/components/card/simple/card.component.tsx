import { ButtonHTMLAttributes, FC } from "react"
import styled from "styled-components";

type Card = {
    img: string
    title: string,
    subTitle: string
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    card: Card,
    hide: boolean
}

type ButtonProps = {
    hide: boolean
}

const Button = styled.button<ButtonProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 200px;
    min-width: 200px;
    padding-top: 45px;
    padding-bottom: 20px;
    background: ${props => props.theme.yellow};
    background: ${props => props.theme.yellowGradient};
    border-radius: 2px;
    opacity: ${props => props.hide ? "0.7" : "1"};
`;

const Img = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
`;

const Lines = styled.div`
    position: absolute;
    top: -60px;
    padding: 20px;
    border-radius: 50%;
    border: ${props => props.theme.white} dashed 1px;
`;

const H1 = styled.h1`
    color: ${props => props.theme.white};
`;

const H2 = styled.h2`
    color: ${props => props.theme.white};
`;

const CardComponent: FC<Props> = (props) => {

    const { card } = props;

    const { img, title, subTitle } = card;

    return (
        <Button {...props}>
            <Lines>
                <Img src={img} alt={title} />
            </Lines>
            <H1>
                {title}
            </H1>
            <H2>
                {subTitle}
            </H2>
        </Button>
    )
}

export {
    CardComponent
}

export type {
    Card
}