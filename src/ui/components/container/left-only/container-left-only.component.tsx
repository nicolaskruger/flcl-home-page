import styled from "styled-components";

const ContainerLeftOnly = styled.section`
    margin-left: calc( ( 100% - 1200px ) / 2 );
    display: flex;
    justify-content: space-between;
    @media(max-width: 1333px){
        margin-left: 5%;
    }
`;

export { ContainerLeftOnly }