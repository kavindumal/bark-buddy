import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../reducers/user-slice.ts";
import {injectStore} from "../api/api-instance.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

injectStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;