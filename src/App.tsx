import React, {useEffect, useState} from 'react';
import './App.css';
import {User} from "./interfaces/User";
import {Release} from "./interfaces/Release";
import {fetchCollection} from "./api/FetchCollection";
import {fetchUser} from "./api/FetchUser";
import {UserProfile} from "./components/UserProfile";
import {CollectionView} from "./components/CollectionView/CollectionView";
import {ViewModeSelect} from "./components/CollectionView/ViewModeSelect";


function App() {
    const [releases, setReleases] = useState<Release[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)
    const [viewMode, setViewMode] = useState("thumb")

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
        <div className="App">
            <header className="App-header">
                <ViewModeSelect viewMode={viewMode} setViewMode={setViewMode}/>
                <UserProfile username={user?.username} avatar_url={user?.avatar_url}/>
                <CollectionView releases={releases} viewMode={viewMode}/>
            </header>
        </div>
    );
}

export default App;
