import { FC, SelectHTMLAttributes } from "react";

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
    onChange: (n: any) => void,
}

interface Props extends PropsSelect {
    options: string[]
}

const Select: FC<Props> = (props) => {

    const { options } = props;

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange(e.target.value);
    }

    return (
        <select  {...props} onChange={onChange}>
            {
                options.map(val => (
                    <option value={val} >{val}</option>
                ))
            }
        </select>
    )
}

export {
    Select
}

export type {
    PropsSelect
}