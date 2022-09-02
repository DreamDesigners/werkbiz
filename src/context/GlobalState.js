import React, { createContext, useReducer } from "react";
import SubscriberReducer from "./reducers/subscriberReducer";
import SubscriberInitialState from "./intialstates/subscriberState";

// Initial State
const initialState = {
  users: [],
};
// Create Context
export const GlobalContext = createContext(initialState);
// Provider Component
export const GlobalProvider = ({ children }) => {
  const [subscriberState, subscriberDispatch] = useReducer(
    SubscriberReducer,
    SubscriberInitialState
  );

  let provides = {
    subscriberState,
    subscriberDispatch,
  };

  return (
    <GlobalContext.Provider value={provides}>{children}</GlobalContext.Provider>
  );
};