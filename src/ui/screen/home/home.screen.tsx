import { FC } from "react";
import { Card, CardComponent } from "../..";
import { NaotaImg } from "../../../assets";

const HomeScreen: FC = () => {

    const list: Card[] = [
        {
            img: NaotaImg,
            title: "naota",
            subTitle: `"ordinary"`,
        }
    ];

    return (
        <div>
            {list.map(card => <CardComponent card={card} />)}
        </div>
    )
}

export {
    HomeScreen
}