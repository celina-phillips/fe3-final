import React from 'react'
import { createContext, useContext, useState, useEffect, useReducer } from "react"

const GlobalStates = createContext()

const Context = ({children}) => {
    const [dentistas, setDentistas] = useState([])

    const url = `https://jsonplaceholder.typicode.com/users`
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDentistas(data))
    }, [])



return (
    <GlobalStates.Provider value = {{dentistas}}>
        {children}
    </GlobalStates.Provider>
)
}

export default Context

export const useGlobalStates = () =>{
    return useContext(GlobalStates);
}