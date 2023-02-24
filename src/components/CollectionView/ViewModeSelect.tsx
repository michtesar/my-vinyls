import React, {Dispatch} from "react";
import {IconButton} from "@mui/material";
import GridOnIcon from '@mui/icons-material/GridOn';

export function ViewModeSelect(props: { viewMode: string, setViewMode: Dispatch<string> }) {

    const handleTypeSelect = () => {
        if (props.viewMode === "thumb") {
            props.setViewMode("list")
        } else {
            props.setViewMode("thumb")
        }
    }

    return (
        <IconButton aria-label="delete" onClick={handleTypeSelect}>
            <GridOnIcon/>
        </IconButton>
    )
}