import React from "react";
import {Release} from "../../../interfaces/Release";
import {Stack, Typography} from "@mui/material";

export function ThumbView(props: { releases: Release[] }) {
    const dimensions = 100
    const style = {borderRadius: 5, margin: 5}

    return (
        <div style={{margin: '0 auto', width: '95%', alignContent: 'center', padding: 10, display: 'grid'}}>
            {props.releases.map((release) => {
                return <Stack direction={'column'} key={release.id}>
                    <img
                        src={release.basic_information.cover_image}
                        alt={release.basic_information.title}
                        key={release.id}
                        width={dimensions}
                        height={dimensions}
                        style={style}
                    />
                    <Typography key={`title-${release.id}`} variant={'body1'}>{release.basic_information.title}</Typography>
                    <Typography key={`artist-${release.id}`} variant={'caption'}>{release.basic_information.artists[0].name}</Typography>
                </Stack>
            })}
        </div>
    )
}