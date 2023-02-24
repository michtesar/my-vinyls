import React from "react";
import {Avatar, Chip, CircularProgress} from "@mui/material";

export function UserProfile(props: { username: string | undefined, avatar_url: string | undefined }) {
    return (
        <div>
            {props.username && props.avatar_url && (
                <Chip
                    avatar={<Avatar alt={props.username} src={props.avatar_url}/>}
                    label={props.username}
                    variant="outlined"
                />
            )}
            {(!props.username || !props.avatar_url) && <CircularProgress/>}
        </div>
    )
}