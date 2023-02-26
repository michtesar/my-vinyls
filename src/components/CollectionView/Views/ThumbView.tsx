import React from "react";
import {Release} from "../../../interfaces/Release";
import {Stack, Typography} from "@mui/material";
import {openInNewTab} from "../../../utils/open";

function generateReleaseUrl(id: number): string {
    return `https://www.discogs.com/release/${id}`
}

export function ThumbView(props: { releases: Release[] }) {
    const dimensions = 150
    const style = {borderRadius: 10, margin: 5, cursor: 'pointer'}

    return (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gridGap: '10px'}}>
            {props.releases.map((release) => {
                return <Stack direction={'column'} key={release.id}>
                    <img
                        src={release.basic_information.cover_image}
                        alt={release.basic_information.title}
                        key={release.id}
                        width={dimensions}
                        height={dimensions}
                        style={style}
                        onClick={() => openInNewTab(generateReleaseUrl(release.id))}
                    />
                    <Typography key={`title-${release.id}`} variant={'body1'} noWrap={true}
                                maxWidth={dimensions}>{release.basic_information.title}</Typography>
                    <Typography key={`artist-${release.id}`} variant={'caption'} noWrap={true}
                                maxWidth={{dimensions}}>{release.basic_information.artists[0].name}</Typography>
                </Stack>
            })}
        </div>
    )
}