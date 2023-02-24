import React from "react";
import {Release} from "../../interfaces/Release";
import {ViewModes} from "./ViewModeSelection/ViewModes";
import {ThumbView} from "./Views/ThumbView";
import {ListView} from "./Views/ListView";
import {Alert, CircularProgress} from "@mui/material";

export function CollectionView(props: { releases: Release[], viewMode: ViewModes }) {

    const SelectiveView = (props: { mode: ViewModes, releases: Release[] }) => {
        if (props.mode === ViewModes.Thumb) {
            return <ThumbView releases={props.releases}/>
        } else if (props.mode === ViewModes.List) {
            return <ListView releases={props.releases}/>
        } else {
            return <Alert severity={'error'}>`Unknown ViewMode ${props.mode}`</Alert>
        }
    }

    return (
        <div>
            {props.releases &&
                <SelectiveView mode={props.viewMode} releases={props.releases}/>
            }
            {!props.releases && <CircularProgress/>}
        </div>
    )
}

