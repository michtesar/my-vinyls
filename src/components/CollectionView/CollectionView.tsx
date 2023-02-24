import React from "react";
import {Release} from "../../interfaces/Release";
import {ThumbView} from "./Views/ThumbView";
import {ListView} from "./Views/ListView";
import {CircularProgress} from "@mui/material";

export function CollectionView(props: { releases: Release[], viewMode: string }) {

    const SelectiveView = (props: { viewMode: string, releases: Release[] }) => {
        if (props.viewMode === "thumb") {
            return <ThumbView releases={props.releases}/>
        } else {
            return <ListView releases={props.releases}/>
        }
    }

    return (
        <div>
            {props.releases &&
                <SelectiveView viewMode={props.viewMode} releases={props.releases}/>
            }
            {!props.releases && <CircularProgress/>}
        </div>
    )
}

