import React, {useEffect, useState} from 'react';
import './App.css';
import {User} from "./interfaces/User";
import {Release} from "./interfaces/Release";
import {fetchCollection} from "./api/FetchCollection";
import {fetchUser} from "./api/FetchUser";
import {UserProfile} from "./components/UserProfile";


function App() {
    const [releases, setReleases] = useState<Release[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)

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
                <UserProfile username={user?.username} avatar_url={user?.avatar_url} />
                {releases.map((release) => {
                    return <div key={release.basic_information.title}>{release.basic_information.title}</div>
                })}
            </header>
        </div>
    );
}

export default App;
