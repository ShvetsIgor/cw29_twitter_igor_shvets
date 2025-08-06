import './App.css'
import {useState} from "react";
import Nav from "./components/Nav.tsx";
import Body from "./components/Body.tsx";
import type {Stats, User} from "./utils/types";
import {TwitterContext} from "./utils/twitterContext.ts";


function App() {

    const [user, setUser] = useState<User>({
        name: "User",
        avatar: "https://media.tenor.com/sTW9KoM9Lv0AAAAm/avatar-the-last-airbender-avatar.webp"
    })

    const [stats, setStats] = useState<Stats>({
        followers: 0,
        subscribers: 0
    })

    const changeName = (name: string) => {
        setUser({...user, name: name || user.name})
    }

    const changeAvatar = (url: string) => {
        setUser({...user, avatar: url || user.avatar})
    }


    return (
        <>
            <TwitterContext.Provider value={
                {
                    user: user,
                    stats: stats,
                    setStats: setStats,
                    changeAvatar: changeAvatar,
                    changeName: changeName
                }
            }>
                <Nav/>
                <Body/>
            </TwitterContext.Provider>
        </>
    )
}

export default App
