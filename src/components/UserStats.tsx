import UserAvatar from "./UserAvatar.tsx";
import {TwitterContext} from "../utils/twitterContext.ts";
import {useContext} from "react";
import * as React from "react";
import type {Stats} from "../utils/types";


const UserStats = () => {
    const {user, stats, changeName, setStats} = useContext(TwitterContext)


    const handleMouseStats = (event: React.MouseEvent<HTMLDivElement>, type: 'followers' | 'subscribers') => {
        event.preventDefault();

        setStats((prevStats: Stats) => ({
            ...prevStats,
            [type]:
                event.button === 0 ? prevStats[type] + 1 : event.button === 2 ? Math.max(prevStats[type] - 1, 0) : prevStats[type]
        }))

    }

    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p
                onClick={() => changeName(prompt('Enter new nickname') as string)}
            >{user.name}</p>
            <div className={'stats'}>
                <div
                    onMouseDown={(event) => handleMouseStats(event, 'followers')}
                    onContextMenu={(event) => event.preventDefault()}>
                    Followers: {stats.followers}
                </div>
                <div
                    onMouseDown={(event) => handleMouseStats(event, 'subscribers')}
                    onContextMenu={(event) => event.preventDefault()}>
                    Subscribers: {stats.subscribers}
                </div>
            </div>
        </div>
    );
};

export default UserStats;