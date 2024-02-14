import React, { createContext, useReducer } from 'react';

const initialState = {

characters: []

}

export const GlobalContext = createContext(initialState);