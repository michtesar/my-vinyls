import React from "react";
import {Release} from "../../../interfaces/Release";
import {ViewModes} from "../ViewModeSelection/ViewModes";
import {ThumbView} from "./ThumbView";

export function CollectionView(props: { releases: Release[], viewMode: ViewModes }) {

    const SelectiveView = (props: { mode: ViewModes, releases: Release[] }) => {
        if (props.mode == ViewModes.Thumb) {
            return <ThumbView releases={props.releases}/>
        } else if (props.mode == ViewModes.List) {
            return <p>List view</p>
        } else {
            return <p>Invalid view</p>
        }
    }

    return (
        <div>
            {props.releases &&
                <SelectiveView mode={props.viewMode} releases={props.releases}/>
            }
            {!props.releases &&
                <div>
                    <p>Loading releases...</p>
                </div>
            }
        </div>
    )
}

