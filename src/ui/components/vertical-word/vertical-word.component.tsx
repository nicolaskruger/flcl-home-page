import { FC } from "react";
import styled, { DefaultTheme, StyledComponent } from "styled-components";


type Props = {
    word: string,
    Style: StyledComponent<"span", DefaultTheme, {}, never>
}

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const VerticalWord: FC<Props> = ({ word, Style }) => {
    return (
        <Ul>
            {word.split("").map((w, i) => (
                <li key={i}>
                    <Style>
                        {w}
                    </Style>
                </li>
            ))}
        </Ul>
    )
}

export {
    VerticalWord
}