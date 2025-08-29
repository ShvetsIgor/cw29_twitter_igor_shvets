import UserAvatar from "./UserAvatar.tsx";
import * as React from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks.ts";
import {statsActions} from "../redux/slices/userStatsSlice.ts";
import {userActions} from "../redux/slices/userAvatarSlice.ts";

const UserStats = () => {

    const dispatch = useAppDispatch();
    const stats = useAppSelector((state) => (state.stats))
    const user = useAppSelector((state) => state.user);

    const handleMouseStats = (event: React.MouseEvent<HTMLDivElement>, type: "followers" | "subscribers") => {
        event.preventDefault();
        dispatch(statsActions.updateStats({type: type, button: event.button}))
    }

    return (
        <div className={"user-stats"}>
            <UserAvatar/>
            <p
                onClick={() => dispatch(userActions.changeName({
                    name: prompt("Enter new nickname") || user.name
                }))}
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