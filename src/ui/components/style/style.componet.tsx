import styled from "styled-components";

const NumberBase = styled.h1`
    font-size: 100px;
`;
const NumberDark = styled(NumberBase)`
    color: ${props => props.theme.black};
`;
const NumberLigth = styled(NumberBase)`
    color: ${props => props.theme.white};
`;
const H1Base = styled.h1`
    font-size: 20px;
    font-weight: lighter;
`;
const H1Dark = styled(H1Base)`
    color: ${props => props.theme.black};
`;
const H1Ligth = styled(H1Base)`
    color: ${props => props.theme.white};
`;
const H2Base = styled.h2`
    font-size: 25px;
    font-weight: bold;
`;
const H2Dark = styled(H2Base)`
    color: ${props => props.theme.black};
`;
const H2Ligth = styled(H2Base)`
    color: ${props => props.theme.white};
`;
const PBase = styled.p`
    font-weight: lighter;
    font-size: 15px;
`;
const PDark = styled(PBase)`
    color: ${props => props.theme.black};
`;
const PLigth = styled(PBase)`
    color: ${props => props.theme.white};
`;

const Button = styled.button`
    background: ${props => props.theme.yellowGradient};
    padding: 15px 70px;
    border-radius: 2px;
    font-weight: bold;
    font-size: 15px;
    color: ${props => props.theme.black};
`;

export {
    NumberDark,
    NumberLigth,
    H1Dark,
    H1Ligth,
    H2Dark,
    H2Ligth,
    PDark,
    PLigth,
    Button
}