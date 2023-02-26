import React from "react";
import {Avatar, Chip, CircularProgress} from "@mui/material";

function generateUserUrl(username: string): string {
    return `https://www.discogs.com/user/${username}/collection`
}

function openUserOnDiscogs(username: string) {
    const url = generateUserUrl(username)
    window.open(url, '_blank');
}

export function UserProfile(props: { username: string | undefined, avatar_url: string | undefined }) {
    return (
        <div>
            {props.username && props.avatar_url && (
                <Chip
                    avatar={<Avatar alt={props.username} src={props.avatar_url}/>}
                    label={props.username}
                    variant="outlined"
                    onClick={() => {
                        if (props.username) {
                            openUserOnDiscogs(props.username)
                        }
                    }}
                />
            )}
            {(!props.username || !props.avatar_url) && <CircularProgress/>}
        </div>
    )
}