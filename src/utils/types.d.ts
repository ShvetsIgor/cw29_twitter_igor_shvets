import * as React from "react";

export type User = {
    name: string,
    avatar: string
}

export type Stats = {
    followers: number,
    subscribers: number
}

export type PropsBody = {
    user: User,
    stats: Stats,
    changeAvatar: (url: string) => void,
    changeName: (name: string) => void
}

export type ContextValue = {
    user: User,
    stats: Stats,
    setStats: React.Dispatch<React.SetStateAction<Stats>>,
    changeAvatar: (url: string) => void,
    changeName: (name: string) => void
}