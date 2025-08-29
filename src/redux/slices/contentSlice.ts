import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {ContentState} from "../../utils/types";

const initialState: ContentState = {
    text: "One moment..."
}

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setQuote: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchRequest.pending, (state) => {
            state.text = "Loading..."
        })
            .addCase(fetchRequest.rejected, (state) => {
                state.text = "Error"
            })
            .addCase(fetchRequest.fulfilled, (state, action) => {
                state.text = action.payload || state.text
            })
    }
})

export const fetchRequest = createAsyncThunk<string>(
    'content/fetchQuote',
    async () => {
        const response = await fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random");

        if (!response.ok) throw new Error('Something went wrong');
        const data = await response.json();
        return data.message;
    }
)

export const contentActions = contentSlice.actions;
export const contentReducer = contentSlice.reducer;
