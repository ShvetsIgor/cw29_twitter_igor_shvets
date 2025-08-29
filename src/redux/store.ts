import {configureStore} from "@reduxjs/toolkit";
import {statsReducer} from "./slices/userStatsSlice.ts";
import {userReducer} from "./slices/userAvatarSlice.ts";
import {contentReducer} from "./slices/contentSlice.ts";

export const store = configureStore({
    reducer: {
        stats: statsReducer,
        user: userReducer,
        content: contentReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;