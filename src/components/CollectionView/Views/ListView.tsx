import React from "react";
import {Release} from "../../../interfaces/Release";

export function ListView(props: { releases: Release[] }) {
    const dimensions = 50
    const style = {borderRadius: 5, margin: 5}

    return (
        <div>
            {props.releases.map((release) => {
                return <img
                    src={release.basic_information.cover_image}
                    alt={release.basic_information.title}
                    key={release.basic_information.title}
                    width={dimensions}
                    height={dimensions}
                    style={style}
                />
            })}
        </div>
    )
}