import { FC } from "react";
import { PropsSelect, Select } from "..";

const SelectMonth: FC<PropsSelect> = (props) => {

    const options = '0'.repeat(12).split('')
        .map((val, i) => `${1 + i}`)

    return <Select {...props} options={options} />
}

export {
    SelectMonth
}