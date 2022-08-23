import React, { createContext, useReducer } from 'react';


// Initial State
const initialState = {
  users: [],
}
// Create Context
export const GlobalContext = createContext(initialState);
// Provider Component
export const GlobalProvider = ({ children }) => {


  let provides = {

  }

  return (
    <GlobalContext.Provider value={provides}>
      {children}
    </GlobalContext.Provider>
  )
}