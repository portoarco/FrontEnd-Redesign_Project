"use client";
import { ReactNode } from "react";
import {Provider} from 'react-redux';
import { store } from "@/lib/redux/store"; //store yang udah dibuat sebelumnya

interface IStoreProviderProps{
    children:ReactNode
}

function StoreProvider(props:IStoreProviderProps){
    return <Provider store={store}>
        {props.children}
    </Provider>
}
export default StoreProvider;
