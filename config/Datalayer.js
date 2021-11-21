import React , { createContext, useReducer , useContext } from "react";

export const DataContext = createContext();

//data layer for providing the theme and User information accross the website.
export const DataLayer = ({ initialState , reducer , children }) => (
    <DataContext.Provider value={useReducer( reducer , initialState )}>
        {children}
    </DataContext.Provider>
);

export const useDataLayerValue = () => useContext(DataContext);

