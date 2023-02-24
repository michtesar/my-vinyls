import React, {useEffect, useState} from 'react';
import './App.css';
import {User} from "./interfaces/User";
import {Release} from "./interfaces/Release";
import {fetchCollection} from "./api/FetchCollection";
import {fetchUser} from "./api/FetchUser";
import {UserProfile} from "./components/UserProfile/user";
import {CollectionView} from "./components/CollectionView/CollectionView";
import {ViewModeSelect} from "./components/CollectionView/ViewModeSelect";
import {CssBaseline, Stack, ThemeProvider, useMediaQuery} from "@mui/material";
import {makeTheme} from "./utils/theme";


function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [releases, setReleases] = useState<Release[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)
    const [viewMode, setViewMode] = useState("thumb")

    const theme = React.useMemo(
        () => makeTheme(prefersDarkMode),
        [prefersDarkMode],
    )

    useEffect(() => {
        fetchUser()
            .then((response) => {
                setUser(response.data)
            })
            .catch((error) => console.error(error))

    }, [])

    useEffect(() => {
        fetchCollection()
            .then((response) => {
                setReleases(response.data.releases)
            })
            .catch((error) => console.error(error))
    }, [user])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Stack direction={'row'} spacing={2} margin={2}>
                <UserProfile username={user?.username} avatar_url={user?.avatar_url}/>
                <ViewModeSelect viewMode={viewMode} setViewMode={setViewMode}/>
            </Stack>
            <CollectionView releases={releases} viewMode={viewMode}/>
        </ThemeProvider>
    );
}

export default App;
