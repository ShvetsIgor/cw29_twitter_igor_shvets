import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {Stats} from "../../utils/types";

const initialState: Stats = {
    followers: 0,
    subscribers: 0,
}

type UpdatePayload = {
    type: keyof Stats;
    button: number; // 0 = левый клик, 2 = правый
};

const userStatsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        updateStats: (state, action: PayloadAction<UpdatePayload>) => {
            const {type, button} = action.payload;

            if (button === 0) {
                state[type] += 1;
            } else if (button === 2) {
                state[type] = Math.max(state[type] - 1, 0);
            } else if (button === 1) {
                state[type] = initialState[type];
            }
        },
        resetStats: () => initialState
    }
})

export const statsActions = userStatsSlice.actions;
export const statsReducer = userStatsSlice.reducer;
