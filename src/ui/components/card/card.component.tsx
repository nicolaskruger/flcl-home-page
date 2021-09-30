import { FC } from "react"
import { CardDiv } from "./card.style";

type Card = {
    img: string
    title: string,
    subTitle: string
}

type Props = {
    card: Card
}

const CardComponent: FC<Props> = ({ card }) => {

    const { img, title, subTitle } = card;

    return (
        <CardDiv>
            <img src={img} alt={title} />
            <h1>
                {title}
            </h1>
            <h2>
                {subTitle}
            </h2>
        </CardDiv>
    )
}

export {
    CardComponent
}

export type {
    Card
}