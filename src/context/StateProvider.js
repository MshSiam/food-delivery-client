import React, { useReducer } from "react"
import { useContext } from "react"
import { createContext } from "react"

export const StateContext = createContext()

export const StateProvider = ({ redecer, initialState, children }) => (
  <StateContext.Provider value={useReducer(redecer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
