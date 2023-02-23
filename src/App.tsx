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

function App() {
    const [collection, setCollection] = useState("")
    const [user, setUser] = useState<User | undefined>(undefined)

    const fetchCollection = async () => {
        return await axios.get(`/.netlify/functions/collections`)
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
                setCollection(response.data.results)
            })
            .catch((error) => console.error(error))
    }, [user])

    return (
        <div className="App">
            <header className="App-header">
                <img src={user?.avatar_url} alt={user?.username} width={'80px'} height={'80px'}/>
                <p>{user?.username}</p>
                <p>{JSON.stringify(collection)}</p>
            </header>
        </div>
    );
}

export default App;
