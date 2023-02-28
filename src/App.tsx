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
import {SearchField} from "./components/SearchField/SearchField";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [releases, setReleases] = useState<Release[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)
    const [viewMode, setViewMode] = useState("thumb")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [searchText, setSearchText] = useState("")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [filteredReleases, setFilteredReleases] = useState(releases)

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
                setReleases(response)
            })
            .catch((error) => console.error(error))
    }, [user])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div style={{marginTop: 20, marginBottom: 30}}>
                <Stack margin={1} direction={'row'} alignItems={'center'} sx={{height: 30}}
                       justifyContent={"space-between"}>
                    <SearchField setSearchText={setSearchText} />
                    <Stack margin={1} direction={'row'} alignItems={'center'} sx={{height: 30}}
                           justifyContent={"space-between"}>
                        <ViewModeSelect viewMode={viewMode} setViewMode={setViewMode}/>
                        <UserProfile username={user?.username} avatar_url={user?.avatar_url}/>
                    </Stack>
                </Stack>
                <CollectionView releases={releases} viewMode={viewMode}/>
            </div>
        </ThemeProvider>
    );
}

export default App;
