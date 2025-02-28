import {configureStore} from "@reduxjs/toolkit";
// import warehouseReducer from "../reducers/warehouse-slice.ts";
import {injectStore} from "../api/api-instance.ts";

export const store = configureStore({
    reducer: {
        // warehouse: warehouseReducer,
    },
});

injectStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;