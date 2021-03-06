import { FC, useState } from "react"
import styled from "styled-components"
import { LeftRigthClick } from "..";
import { Card, CardComponent } from "../.."

type Props = {
    cards: Card[]
}

const Div = styled.div`
    position: relative;
    padding-top: 60px;
    display: flex;
    overflow-x: hidden;
    flex-direction: column;
    width: 100%;
`;

type WarperProps = {
    index: number
}

const Warper = styled.div<WarperProps>`
    position: relative;
    display: flex;
    transition: 300ms;
    gap: 20px;
    padding-left: 10px;
    transform: translateX(${props => `${props.index * -220}px`});
    width: 100%;
`;

const CardDisplay: FC<Props> = ({ cards }) => {

    const [curr, setCurr] = useState(0);

    const next = () => {
        const pos = curr < (cards.length - 1) ? curr + 1 : curr;
        setCurr(pos)
    }
    const prev = () => {
        const pos = curr <= 0 ? 0 : curr - 1;

        setCurr(pos)
    }

    return (
        <Div>
            <Warper index={curr}>
                {cards.map((card, index) => <CardComponent hide={curr !== index} onClick={() => setCurr(index)} card={card} />)}
            </Warper>
            <LeftRigthClick onClickLeft={prev} onClickRigth={next}>
                <p>
                    FLCL characters
                </p>
            </LeftRigthClick>
        </Div>
    )
}

export {
    CardDisplay
}