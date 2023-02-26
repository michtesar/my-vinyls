import React from "react";
import {Release} from "../../../interfaces/Release";
import {Stack, Typography} from "@mui/material";

export function ListView(props: { releases: Release[] }) {
    const dimensions = 60
    const style = {borderRadius: 5, margin: 5}

    return (
        <div style={{margin: '0 auto', alignContent: 'center'}}>
            {props.releases.map((release) => {
                return <Stack key={`item-${release.id}`} direction={'row'}>
                    <img
                        src={release.basic_information.cover_image}
                        alt={release.basic_information.title}
                        key={release.id}
                        width={dimensions}
                        height={dimensions}
                        style={style}
                    />
                    <Stack key={`details-${release.id}`} direction={'column'}>
                        <Typography key={`title-${release.id}`}
                                    variant={'body1'}>{release.basic_information.title}</Typography>
                        <Typography key={`artist-${release.id}`}
                                    variant={'caption'}>{release.basic_information.artists[0].name}</Typography>
                        <Typography key={`year-${release.id}`}
                                    variant={'caption'}>{release.basic_information.year}</Typography>
                    </Stack>
                </Stack>
            })}
        </div>
    )
}