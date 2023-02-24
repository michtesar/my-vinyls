import React from "react";
import {CircularProgress} from "@mui/material";

export function UserProfile(props: { username: string | undefined, avatar_url: string | undefined }) {
    const dimension = 80

    return (
        <div>
            {props.username && props.avatar_url && (
                <div>
                    <img src={props.avatar_url} alt={props.username} width={dimension} height={dimension}/>
                    <p>{props.username}</p>
                </div>
            )}
            {(!props.username || !props.avatar_url) && <CircularProgress/>}
        </div>
    )
}