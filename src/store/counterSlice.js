import {createSlice} from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 10
    },
    reducers: {
        change: (state,action) => {
            state.value += action.payload
        }
    }
})
export default counterSlice.reducer
export const {change} = counterSlice.actions