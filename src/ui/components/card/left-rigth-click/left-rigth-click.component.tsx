import { FC } from "react";
import styled from "styled-components";
import { ArrowBack, ArrowFoward } from "../../../../assets";

type Props = {
    onClickLeft: () => void,
    onClickRigth: () => void,
    dark?: boolean
}

const InnerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button`
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const LeftRigthClick: FC<Props> = ({ onClickLeft, onClickRigth, children, dark = false }) => {

    const color = dark ? "#000000" : "#ffffff"

    return (
        <InnerDiv>
            <Button onClick={onClickLeft} >
                <ArrowBack color={color} />
            </Button>
            {children}
            <Button onClick={onClickRigth} >
                <ArrowFoward color={color} />
            </Button>
        </InnerDiv>
    )
}

export {
    LeftRigthClick
}