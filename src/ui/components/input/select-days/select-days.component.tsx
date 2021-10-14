import { FC } from "react";
import { PropsSelect, Select } from "..";

const SelectDays: FC<PropsSelect> = (props) => {

    const options = '0'.repeat(30).split('')
        .map((val, i) => `${1 + i}`)

    return <Select {...props} options={options} />
}

export {
    SelectDays
}