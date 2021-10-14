import { FC } from "react";
import { PropsSelect, Select } from "..";

const SelectYear: FC<PropsSelect> = (props) => {

    const options = '0'.repeat(20).split('')
        .map((val, i) => `${1990 + i}`);

    return <Select {...props} options={options} />
}

export {
    SelectYear
}