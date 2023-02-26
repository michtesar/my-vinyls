import React from "react";
import {Avatar, Chip, CircularProgress} from "@mui/material";
import {openInNewTab} from "../../utils/open";

function generateUserUrl(username: string): string {
    return `https://www.discogs.com/user/${username}/collection`
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
                            openInNewTab(generateUserUrl(props.username))
                        }
                    }}
                />
            )}
            {(!props.username || !props.avatar_url) && <CircularProgress/>}
        </div>
    )
}