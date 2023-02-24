import React, {Dispatch, useState} from "react";
import {ViewModes} from "./ViewModes";
import Select, {SingleValue} from 'react-select';

export interface SelectOption {
    value: number
    label: string
}

export function ViewModeSelect(props: { setViewMode: Dispatch<ViewModes> }) {
    const [selectedOption, setSelectedOption] = useState(0);

    // FIXME: This component and this part in particular needs a refactor
    const options: SelectOption[] = [
        {"value": ViewModes.Thumb, "label": "Thumb"},
        {"value": ViewModes.List, "label": "List"},
    ]

    function dispatchViewMode(value: number) {
        if (value === 0) {
            props.setViewMode(ViewModes.Thumb);
        } else if (value === 1) {
            props.setViewMode(ViewModes.List);
        }
    }

    const handleTypeSelect = (event: SingleValue<SelectOption>) => {
        if (event) {
            setSelectedOption(event.value)
            dispatchViewMode(event.value)
        }
    };

    return (
        <div>
            <Select
                options={options}
                onChange={handleTypeSelect}
                value={options.filter(function (option) {
                    return option.value === selectedOption;
                })}
                name={'mode'}
            />
        </div>
    )
}