import {configureStore} from '@reduxjs/toolkit'
import userReducer from '@/lib/redux/features/userSlice'
import articleReducer from '@/lib/redux/features/articleSlice'
// setup store

export const store = configureStore({
    reducer:{
        // define config reducer
        user: userReducer,
        article:articleReducer
        
    }
});

// define type structure 
export type Rootstate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 
