import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";

interface User {
    uri: string
    username: string
    collection_folders_url: string
    wantlist_url: string
    avatar_url: string
    banner_url: string
    num_collection: number
}

interface Release {
    id: number
    date_added: string
    rating: number
    basic_information: BasicInformation
}


interface Artist {
    name: string
    id: number
}

interface BasicInformation {
    cover_image: string
    title: string
    year: number
    artists: Artist[]
    genres: string[]
}

function App() {
    const [releases, setReleases] = useState<Release[]>([])
    const [user, setUser] = useState<User | undefined>(undefined)

    const fetchCollection = async () => {
        return await axios.get(`/.netlify/functions/collections?page=1&per_page=10`)
    }

    const fetchUser = async () => {
        return await axios.get('/.netlify/functions/user')
    }

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
                <img src={user?.avatar_url} alt={user?.username} width={'80px'} height={'80px'}/>
                <p>{user?.username}</p>
                {releases.map((release) => {
                    return <div key={release.basic_information.title}>{release.basic_information.title}</div>
                })}
            </header>
        </div>
    );
}

export default App;
