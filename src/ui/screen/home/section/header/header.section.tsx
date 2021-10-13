import styled from "styled-components"
import { Container } from "../../../../components/container/container.cmponent";
import flcl from './flcl.png';

const MyHeader = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.black};
`;

const Div = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Img = styled.img`
    width: 70px;
`;

const Header = () => {
    return (
        <MyHeader>
            <Div>
                <Img src={flcl} alt="flcl" />
            </Div>
        </MyHeader>
    )
}


export {
    Header
}