import React, {Dispatch} from "react";
import {IconButton} from "@mui/material";
import StyleIcon from '@mui/icons-material/Style';

export function ViewModeSelect(props: { viewMode: string, setViewMode: Dispatch<string> }) {

    const handleTypeSelect = () => {
        if (props.viewMode === "thumb") {
            props.setViewMode("list")
        } else {
            props.setViewMode("thumb")
        }
    }

    return (
        <IconButton onClick={handleTypeSelect}>
            <StyleIcon/>
        </IconButton>
    )
}