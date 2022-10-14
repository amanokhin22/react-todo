import {configureStore} from '@reduxjs/toolkit'
import todoSliceReducer from "./todoSlice";
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        todo: todoSliceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();