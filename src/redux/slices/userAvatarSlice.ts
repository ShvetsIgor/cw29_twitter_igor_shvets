import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserState} from "../../utils/types";

const initialState: UserState = {
    name: "Avatar",
    avatar: "https://media.tenor.com/sTW9KoM9Lv0AAAAm/avatar-the-last-airbender-avatar.webp"
}

const userAvatarSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeAvatar: (state, action: PayloadAction<{ avatar: string }>) => {
            state.avatar = action.payload.avatar;
        },
        changeName: (state, action: PayloadAction<{ name: string }>) => {
            state.name = action.payload.name;
        }
    }
})

export const userActions = userAvatarSlice.actions;
export const userReducer = userAvatarSlice.reducer;